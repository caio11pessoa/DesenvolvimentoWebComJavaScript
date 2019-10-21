const valores = [7.7, 8.9, 6.3, 9.2] // declarado de forma literal []
console.log(valores[0], valores[3])
console.log(valores[4])//Em Java iria dar um erro, porém em JavaScrypt não gera erro, mas diz que o valor está indefinido

valores[4] = 10
console.log(valores)

//valores[10] = 2 //saída [ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 2 ]
//console.log(valores)

console.log("quantidade de elementos nastring "+valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)//Array pode ser misturado os tipos, mas não é uma boa prática

console.log(valores.pop())//retorna o ultimo elemento do array e o array perde esse elemento
delete valores [0]
console.log(valores)

console.log(typeof valores)