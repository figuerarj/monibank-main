const botaoIniciarCamera = document.querySelector("[data-video-botao]");
//rosto
const campoCamera = document.querySelector("[data-camera]");

const video = document.querySelector("[data-video]");

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