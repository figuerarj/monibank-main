export default function ehUmCPF(campo){
    // vai procurar "." e "-" no CPF e vai dar replace por " " um campo vazio.
   const cpf = campo.value.replace(/\.|-/g,"") ;
   if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf) ){
    console.log('Esse CPF não existe');
   } else {
    console.log('Existe!')
   }

   
  
}

function validaNumerosRepetidos(cpf){
    const numeroRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numeroRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf){
    let soma = 0 ;
    let multiplicador = 10;
    // faz um looping pegando de 0 até 8 posicao
    for (let posicao = 0; posicao < 9; posicao++) {
        // pega o numero do cpf na posicao 0,1,2,3,4,5,6,7,8 , multiplica pelo multiplicador 
        // e soma a variavel soma.
        soma += cpf[posicao] * multiplicador;
        // reduz 1 no multiplicador 10,9,8,7,6,5,4,3,2
        multiplicador--;
    }
    //multiplica a soma por 10 pega o resto da divisao de 11 .
    soma = (soma * 10) %11;
    //se a soma for igual a 10 ou 11 entao a soma recebe o valor de 0.
    if (soma == 10 || soma == 11){
        soma = 0;
    }
    // returna verdadeiro ou falso se o valor da soma(após a %11) é diferente do valor na posicao 9 do cpf.
    return soma != cpf[9];
}

function validaSegundoDigito(cpf){
    let soma = 0 ;
    let multiplicador = 11;
    // faz um looping pegando de 0 até 8 posicao
    for (let posicao = 0; posicao < 10; posicao++) {
        // pega o numero do cpf na posicao 0,1,2,3,4,5,6,7,8 , multiplica pelo multiplicador 
        // e soma a variavel soma.
        soma += cpf[posicao] * multiplicador;
        // reduz 1 no multiplicador 10,9,8,7,6,5,4,3,2
        multiplicador--;
    }
    //multiplica a soma por 10 pega o resto da divisao de 11 .
    soma = (soma * 10) %11;
    //se a soma for igual a 10 ou 11 entao a soma recebe o valor de 0.
    if (soma == 10 || soma == 11){
        soma = 0;
    }
    // retorna verdadeiro ou falso se o valor da soma(após a %11) é diferente do valor na posicao 9 do cpf.
    // se for diferente - retorna verdadeiro.
    // se for igual - retorna falso.
    return soma != cpf[10];
}