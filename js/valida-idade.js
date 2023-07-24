export default function ehMaiorDeIdade(campo){
    // pega o valor do campo de data e transforma em um valor que o js entenda.
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuário não é maior de idade.');
    }
}

function validaIdade(data){
    //pega o valor da data atual que estamos, na data presente.
    const dataAtual = new Date();
    //pegou a data que foi inserida pelo usuario e adicionou 18, 
    // essa validação ajuda a determinar se na data presente o cliente já completou 18 anos.
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    // aqui retornamos verdadeiro ou falso. 
    // caso a idade seja igual 18 ou maior,então o retorno é verdadeiro(true).
    // caso seja falso(false)
    return dataAtual >= dataMais18
}