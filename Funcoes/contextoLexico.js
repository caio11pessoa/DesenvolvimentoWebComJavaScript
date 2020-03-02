const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
minhaFuncao()

function exec() {
    const valor = 'Local'
    minhaFuncao()
}
exec()

const teste = 'externo'
function testando(teste) {
    //const teste = 'interno'// nesse caso tb printa interno
    function testandoDentroDoTeste() {
        console.log("E o veredito é", teste)
    }
    testandoDentroDoTeste()
}
testando("interno")