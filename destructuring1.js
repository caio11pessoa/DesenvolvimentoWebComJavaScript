// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)
const { nome: n, idade: i } = pessoa
console.log(n, i)

const{ sobrenome, bemHumorada = true } = pessoa// Por padrão, se não tiver nada nessa variável, ele fica com o valor true
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep}}= pessoa
console.log(logradouro, numero, cep)