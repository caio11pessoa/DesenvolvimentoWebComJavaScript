/*
var x;
x = 7
let y = 3;
const z = 100

var x = 10;
if(x > y){
    var k = 200
    console.log(x,k,y)
}
console.log(`a variavel k é ${k}`)
 
let bole = true
let teste = "0"
let falso1 = ""
let falso2 = 0
let falso3 = false
let falso4 = NaN
if(falso2){
    console.log(bole)
}

console.log(typeof falso4)

let teste2 = "Kelvin"
teste2 = parseInt(teste2) 
console.log(teste2)

if(teste2){
    console.log('dentro, true')
}
else{
    console.log('fora, false')
}

let i = 0
for(i = 0 ; i < 10; i++){
console.log(i)

}
const vetor = [1, 2, 32, 4, 10]
console.log(vetor[2])
for(i in vetor){
    console.log(`o valor de i => ${i}, valor no vetor => ${vetor[i]} `)
}

const tamanhoDoVetor = vetor.length
for( i = 0 ; i < tamanhoDoVetor ; i++){
    console.log(`o valor de i => ${i}, valor no vetor => ${vetor[i]} `)
}
i = 0
let quantPlaca = 0
while(!i){
    console.log(`placa ${quantPlaca++}`)
    if(quantPlaca == 3){
        i = 1
    }
}


int nomeDaFuncao (int a, int b){
    return (a + b);
}
void

char[] nomeDaFuncao (parameters){
    return algumacoisa
}

nomeDaFuncao (variavel);
*/





let funcao = function kelvin(a){
    return 3 * a
}
//console.log(kelvin(3))

console.log(funcao(10))

let funcao2 = function (b) {
    return b * 10
}
console.log(funcao2(2))

let funcao3 = a => a*10

console.log(funcao3(4))

let funcao4 = () => {
    console.log(20*10)
}

funcao4()

function exige(){
    console.log(arguments['0'] + arguments['1'] + arguments['2'])
}

exige()
exige(10, 400, 7)
console.log(typeof arguments)

var c = 7
var j = 7
console.log(c === j)