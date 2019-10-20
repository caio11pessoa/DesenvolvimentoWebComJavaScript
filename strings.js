const escola = "Cod3r"
console.log(escola.charAt(4))// vai me dar a letra que está no índice 0
console.log(escola.charAt(5))// não gera um erro
//retorna um valor vazio
console.log(escola.charCodeAt(3))//valor a tabela ask
console.log(escola.indexOf('3'))// testa se tem aquele valor na string e retorna o índice

console.log(escola.substring(1))// Retorna a partir desse índice até o final
console.log(escola.substring(0, 3))// do Índice 0 até o índice 2
console.log('Escola '.concat(escola).concat("!")) //contatenando valores literais
console.log(escola.replace(3, 'e'))
//console.log(escola.replace(/\d/, 'e'))// expressão regular substitua todos os dígitos do texto pela letra e
//console.log(escola.replace(/\w/g, 'e'))// substituir todas as letras e dígitos

console.log('Ana,Maria,Pedro'.split(','))// transformada em Array
console.log('Ana,Maria,Pedro'.split(/,/))// transformada em Array usando reject

