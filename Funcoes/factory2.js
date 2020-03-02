function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

const produto1 = criarProduto("Coca", 20)
console.log(produto1)