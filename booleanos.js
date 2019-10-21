let isAtivo = false//usa o let quando é necessário mudar o valor da variável
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
//todos os numeros inteiros exceto o 0 são verdadeiros
console.log(!!' ')//basta ter um espaço que ja se torna verdadeiro
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(('' || null || 0 || '' || 123))

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Caio'
console.log(nome || 'Desconhecido')
// caso a primeira não esteja válido, use a segunda opção como informação padrão
