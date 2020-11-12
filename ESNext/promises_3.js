var qualquer = {
    obj:"Caio",
    num:10
}
function adicionarMb(nome, idade) {
    return new Promise(function(resolve){
            setTimeout(()=>{
                resolve({
                    nome:nome,
                    idade:idade
                })
            },2000)
    })
}

var novaProme = adicionarMb("Caio", 21)

novaProme.then(variavel => {
    console.log(variavel)
    variavel.nome.sobrenome = "Pessoa"
    return variavel.nome;
})
.then(variavel => {
    console.log(variavel)
    adicionarMb(variavel, 20)
})
.then(console.log)
console.log(novaProme.nome);