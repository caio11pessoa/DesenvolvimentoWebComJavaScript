// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b//uma única linha, uma única sentença de código, o resultado dessa sentença de código é retornado

console.log(subtracao(5, 2))

const imprimir2 = a => console.log(a)// em caso de apênas um parâmetro, não precisa colocar o 'a' entre parenteses
imprimir2('Legal!!!')
