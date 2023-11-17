from flask import Flask, jsonify, request
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from nltk.tokenize import sent_tokenize
from nltk.corpus import stopwords
from nltk import pos_tag
import re
from gensim.models import Word2Vec
import os
from flask_cors import CORS

def sentence_token(text):
    sentences = sent_tokenize(text)
    return sentences

def tokenize(sentences):
    words = []
    for sentence in sentences:
        w = word_extraction(sentence)
        words.extend(w)
    words = sorted(list(set(words)))
    return words

def word_extraction(sentence):
    ignore = set(stopwords.words('portuguese'))
    words = re.sub("[^\w]", " ", sentence).split()
    cleaned_text = [w.lower() for w in words if w not in ignore]
    return cleaned_text

def process_pipeline_to_string(text):
    sentences = sentence_token(text)
    words = tokenize(sentences)
    # Juntar as palavras em uma string única
    return ' '.join(words)


def model(textos):
    if os.path.exists("word2vec.model"):
        model = Word2Vec.load("word2vec.model")
        textos += model.textos
    
    pipeline_resultados = [process_pipeline_to_string(text) for text in textos]

    tokenized_sentences = [sentence.split() for sentence in pipeline_resultados]
    model = Word2Vec(tokenized_sentences, vector_size=50, window=5, min_count=1, sg=0)
    model.pipeline_resultados = pipeline_resultados
    model.textos = textos
    model.save("word2vec.model")


def similaridade(texto_entrada):
    import numpy as np
    from sklearn.metrics.pairwise import cosine_similarity
    model = Word2Vec.load("word2vec.model")

    pipeline_resultados = model.pipeline_resultados 
    textos = model.textos
    # Função para converter texto em matriz
    def texto_para_matriz(texto, modelo_word2vec):
        palavras = texto.lower().split()
        matriz = np.array([modelo_word2vec[palavra] for palavra in palavras if palavra in modelo_word2vec])
        return matriz


    # Converta o texto de entrada em matriz usando o modelo Word2Vec
    matriz_texto_entrada = texto_para_matriz(texto_entrada, model.wv)


    def calcular_vetor_medio(matriz):
        # Calcular o vetor médio para cada texto
        return np.mean(matriz, axis=0)

    # Calcule o vetor médio para o texto de entrada
    vetor_medio_entrada = calcular_vetor_medio(matriz_texto_entrada)
    if np.isnan(vetor_medio_entrada).any():
        return jsonify({"error": "Não foi possível calcular o vetor médio para o texto de entrada"}), 400

    # Calcule vetores médios para todos os textos na base de dados
    vetores_medios_textos = [calcular_vetor_medio(texto_para_matriz(texto, model.wv)) for texto in pipeline_resultados]
    if np.isnan(vetores_medios_textos).any():
        return jsonify({"error": "Não foi possível calcular o vetor médio para um dos textos da base de dados"}), 400

    # Transforma listas de vetores em matrizes numpy para compatibilidade
    vetor_medio_entrada = np.array([vetor_medio_entrada])
    vetores_medios_textos = np.array(vetores_medios_textos)

    # Calcule a similaridade do cosseno entre o vetor médio da entrada e os vetores médios dos textos
    similaridades = cosine_similarity(vetor_medio_entrada, vetores_medios_textos)

    indices_ordenados = np.argsort(similaridades[0])
    indices_top3 = indices_ordenados[-3:][::-1] 

    response = []

    for i, indice in enumerate(indices_top3):
        response.append(textos[indice])

    return(response)



# textos = ["A estratégia de go-to-market da IBM está fortemente ancorada na inovação em inteligência artificial e cloud computing.",
# "A IBM utiliza analytics avançada para otimizar seu funil de vendas e melhorar as taxas de conversão.",
# "Por meio de campanhas de marketing centradas no cliente, a IBM busca fortalecer sua posição como líder em soluções de cibersegurança empresarial.",
# "Com uma abordagem B2B focada, a IBM constrói relações duradouras com seus parceiros de canal para expandir seu alcance de mercado.",
# "assinatura referência sla "]

# model(textos)

app = Flask(__name__)
CORS(app)
@app.route('/text', methods=['POST'])
def get_frases():
    data = request.get_json()
    response =  similaridade(data['text'])
    return response

@app.route('/model', methods=['POST'])
def make_model():
    data = request.get_json()
    model(data['texts'])
    return "modelo retreinado"

@app.route('/test', methods=['GET'])
def test():
    return "ok"
    
if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)

#pip install nltk
#pip install gensim