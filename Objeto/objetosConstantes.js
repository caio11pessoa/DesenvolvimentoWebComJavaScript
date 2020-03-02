// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} //Gera um erro pois tenta atribuir a constante a outra objeto em endereço de memoria diferente
//pessoa = { nome : 'ana'}

// congela o objeto como era antes, e seus atributos não mudam mais
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)