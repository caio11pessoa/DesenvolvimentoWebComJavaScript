Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length ; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

// Retorne um array apenas com os preços

const passarParaObj = json => JSON.parse(json)
/* let arrayDeObjetos = carrinho.map(passarParaObj)
console.log(arrayDeObjetos) */

const transPrecos = produto => produto.preco
const arrayResultado = carrinho.map2(passarParaObj).map2(transPrecos)
console.log(arrayResultado)