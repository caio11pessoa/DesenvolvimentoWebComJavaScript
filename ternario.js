const resultado = nota => nota >= 7 ? 'Aprovado' : 'reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

const status = nota => {
    return nota >= 7 ? 'Aprovado' : 'reprovado'
}
console.log(status(7.1))
console.log(status(6.7))
