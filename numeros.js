const peso1 = 1.0
const peso2 =  Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())//nao altera media
console.log(media.toString(2))// retorna em binário
console.log(typeof media)
console.log(typeof Number)
console.log(Number(false))
console.log(Number(true))
console.log(typeof Boolean)
console.log(Boolean(-15))// só se torna false se for 0, qualquer outro valor retorna true