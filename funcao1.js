// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)// pode passar só um valor, o segundo valor será undefined, o resultado será um NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8)// pode passar mais de dois valores, a função vai considerar apenas os dois primeiros e vai ignorar o resto
imprimirSoma()// pode não colocar nenhum parâmetro, retorna um NaN

// Funcao com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))