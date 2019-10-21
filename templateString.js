const nome = 'Rebeca'
const concatenacao = 'olá' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)
// depos do dollar e entre chaves ele vai interpretar

const up = texto => texto.toUpperCase()//criando a função up
        //parâmetro //retorna texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)