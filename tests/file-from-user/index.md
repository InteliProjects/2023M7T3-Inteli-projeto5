# Teste API para receber os áudios enviados pelo usuário

<p>Esse arquivo serve para demostrar a forma de testar a API para receber os áudios enviados pelo usuário</p>


## 🔧 Configurações

<p>Nesse caso estaremos utilizando o postman para fazer a requisição para a API, onde ela está esperando os seguintes dados</p>

<p><strong>Método</strong>: POST</p>
<p><strong>URL:</strong> https://localhost:3000/upload</p>

<br>
<br>

<strong>Body:</strong>

<p>Abaixo está o link do audio para download. <strong>Recomendamos que utilize esse audio, pois sabemos a forma correta de retorno de resposta dele.</strong></p>

<a href="https://watson-developer-cloud.github.io/doc-tutorial-downloads/speech-to-text/audio-file.flac">Download Audio.flac</a>

<p>Após baixar o arquivo, você deve colocar ele no body da requisição no postman, como demostrando a seguir: </p>

<br>
<br>

<img src="./assets/body1.png">
<img src="./assets/body2.png">
<img src="./assets/body3.png">

<hr>

## 🚀 Iniciar teste
<p>Após realizar todas essas etapas, o postman já estará pronto para realizar o teste, onde no final estaremos esperando retornar esse resultado: </p>

<img src="./assets/fileFronUser-response.png">

<p>Video demo:</p>


https://github.com/2023M7T3-Inteli/Projeto5/assets/99264712/433e5153-5179-47e3-a777-204fa78ab242



<strong>Pós-condições de teste</strong>: Era esperado que o serviço retornasse o audio transcrito para texto e a intenção do texto. Nesse caso, foi o resultado esperado.

