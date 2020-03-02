class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joão')
p1.falar()

//Função construtora
function criarPessoa(nome) {
    this.nome = nome
    this.falar = () => console.log(`meu nome é ${nome}`)

    
}
const p2 = new criarPessoa("Caio")
p2.falar()