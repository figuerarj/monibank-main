import ehUmCPF from "./valida-cpf.js"

const camposDoFormulario = document.querySelectorAll("[required]")

//para cada campo que ele reconhecer que tem o required dentro, entao será realizado...
camposDoFormulario.forEach((campo) => {
    // evento blur é quando tiramos o foco do input. No caso quando tiramos o foco do campo entao o verificaCampo é acionado.
    campo.addEventListener("blur", () => verificaCampo(campo))

})

function verificaCampo(campo){
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }
}