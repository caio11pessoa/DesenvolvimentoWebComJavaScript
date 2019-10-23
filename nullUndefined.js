let valor// não inicializada
console.log(valor)
//console.log(valor2)//valor2 nem foi declarado, por isso gerou um erro

valor = null//essa variável não tem valor primitivo e nem está apontando pra nada
//ausência de valor

console.log(valor)
//console.log(valor.toString())//você não poe ler a propriedade toString de um null

const produto = {}
console.log(produto.preco)//undefined
//console.log(produto.preco.a)//não pode acessar a propriedade a de preco undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)
delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)