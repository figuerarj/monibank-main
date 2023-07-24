import ehUmCPF from "./valida-cpf.js"
import ehMaiorDeIdade from "./valida-idade.js"

const camposDoFormulario = document.querySelectorAll("[required]")

//para cada campo que ele reconhecer que tem o required dentro, entao será realizado...
camposDoFormulario.forEach((campo) => {
    // evento blur é quando tiramos o foco do input. No caso quando tiramos o foco do campo entao o verificaCampo é acionado.
    campo.addEventListener("blur", () => verificaCampo(campo));
    //previne o js de enviar algum erro sem o nosso consentimento.
    campo.addEventListener("invalid", evento => evento.preventDefault())

})

function verificaCampo(campo){
    // se o campo name estiver com o valor cpf = true ou se o campo tiver menos ou igual a 11 numeros .
    // entao a funcao ehUmCPF é executada.
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }
    // se o campo name estiver com aniversario = true ou se o campo value for diferente de vazio = true. 
    // entao ele ira chamar a funcao eh maior idade.
    if(campo.name == "aniversario" && campo.value != ""){
        ehMaiorDeIdade(campo);
    }
    // .validity - verifica automaticamente uma serie de possiveis erros e retorna verdd ou falso

    console.log(campo.validity);
}