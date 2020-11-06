const contadorA = require('./intanciaUnica');
const contadorB = require('./intanciaUnica');//cache

const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor)
console.log(contadorD.valor)