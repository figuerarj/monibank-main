const botaoIniciarCamera = document.querySelector("[data-video-botao]");
//rosto
const campoCamera = document.querySelector("[data-camera]");

const video = document.querySelector("[data-video]");

const botaoTirarFoto = document.querySelector("[data-tirar-foto]");

const canvas = document.querySelector("[data-video-canvas]");

const mensagem = document.querySelector("[data-mensagem]");

const botaoEnviarFoto = document.querySelector("[data-enviar]");

// inicializa vazia e depois recebe o valor da captura.
let imagemURL = "";

//ouvinte de eventos
botaoIniciarCamera.addEventListener("click", async function(){
    //pede pra o navegador iniciar a camera. somente o video, sem audio.
    const inciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
    //estilo que bota display none no botao
    botaoIniciarCamera.style.display = "none";
    //botou um display block
    campoCamera.style.display = "block";
    //recebe o iniciar video.
    video.srcObject = inciarVideo;
})
//pegou o botao tirar foto e colocou um ouvinte de eventos para acionar ao click
botaoTirarFoto.addEventListener("click", function(){
    //cria um canvas em 2d na hora que o botao foi clicado
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
// 
    imagemURL = canvas.toDataURL("image/jpeg");
    //tira o campo de camera.
    campoCamera.style.display = "none";
    // a mensagem aparece.
    mensagem.style.display = "block";

})
//ouvinte de eventos no botao  enviarfoto ao clique
botaoEnviarFoto.addEventListener("click", ()=>{
    //retorna os dados que foi baixado.
    const receberDadosExistentes = localStorage.getItem("cadastro");
    //converte json pra objeto
    const converteRetorno = JSON.parse(receberDadosExistentes);
    // recebe a url da imagem que foi tirada
    converteRetorno.imgem = imagemURL;
    // inseri dentro do cadastro o valor que esta dentro de converteretorno. e transforma em JSON
    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));
    //abre a pagina de cadastro confirmada.
    window.location.href = "./abrir-conta-form-3.html";

})