# Teste IBM  Speech to Text

<p>Esse arquivo serve para demostrar a forma de testar a funcionalidade do Speech to text do serviço da IBM</p>

<br>

<strong>Pré-condições de teste</strong>: Baseado na Introdução da IBM sobre o serviço de processamento de transformar audio em texto, é necessário realizar uma chamada HTTP com o método POST, utilizando a chave de API disponibilizada, com a url da API, e usando os parâmetros mostrados na imagem, em formatação JSON.

## 🔧 Configurações

<p>Nesse caso estaremos utilizando o postman para fazer a requisição para o serviço da IBM, onde ele está esperando os seguintes dados</p>

<p><strong>Método</strong>: POST</p>
<p><strong>URL:</strong> https://api.au-syd.speech-to-text.watson.cloud.ibm.com/instances/e2294ad0-33e5-4582-84b4-7cdaeffc5164/v1/recognize</p>

<strong>Authorization:</strong>

- <p><strong>Username:</strong> apikey</p>
- <p><strong>Password:</strong> Possível conseguir no serviço da IBM cloud </p>

<br>

<p>Nesse caso criamos esse serviço para funcionalidade de testes, logo tem change para quando for para produção, seja outras informações de autorização.</p>

<br>

<p>Exemplo de como usar:</p>
<img src="./assets/authorizationIGM.png">

<br>
<br>

<strong>Headers:</strong>

<p>Nesse teste nós estamos definindo uma propriedade ( Content-Type ) para mandar para a requisição entender que estamos enviando um arquivo .flac</p>

- <p>As vezes é necessário desativar esse header e criar um novo com o mesmo nome.</p>

<img src="./assets/headerIMG.png">

<br>
<br>

<strong>Body:</strong>

<p>Abaixo está o link do audio para download. <strong>Recomendamos que utilize esse audio, pois sabemos a forma correta de retorno de resposta dele.</strong></p>

<a href="https://watson-developer-cloud.github.io/doc-tutorial-downloads/speech-to-text/audio-file.flac">Download Audio.flac</a>

<p>Após baixar o arquivo, você deve colocar ele no body da requisição no postman, como demostrando a seguir: </p>

<br>
<br>

<img src="./assets/body1IMG.png">
<img src="./assets/body2IMG.png">

<hr>

## 🚀 Iniciar teste
<p>Após realizar todas essas etapas, o postman já estará pronto para realizar o teste, onde no final estaremos esperando retornar esse resultado: </p>

<img src="./assets/resultaIMG.png">

<p>Video demo:</p>

https://github.com/2023M7T3-Inteli/Projeto5/assets/99296562/d35665db-d578-4065-8321-42b0624495f3


<strong>Pós-condições de teste</strong>: Era esperado que o serviço retornasse o audio transcrito para texto. Nesse caso, foi o resultado esperado.

