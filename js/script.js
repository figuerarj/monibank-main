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

const tiposDeErro = [
    // quando nao tem nada dentro do campo, campo vazio.
    'valueMissing',
    // quando nao combina o elemento com o tipo que estamos preenchendo.
    'typeMismatch',
    // o pattern nao é igual ao padrao
    'patterMismatch',
    // texto menor que o minlength
    'tooShort',
    // erros customizados
    'customError'
]

// mensagens customizadas
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

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