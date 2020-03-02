function tipoDeTriângulo() {
    if (this.lado1 == this.lado2 && this.lado2 == this.lado3) {
        return `Equilátero, ${this.lado1}, ${this.lado2}, ${this.lado3}`
    } else if (this.lado1 == this.lado2 || this.lado2 == this.lado3 || this.lado1 == this.lado3) {
        return `isóceles, ${this.lado1}, ${this.lado2}, ${this.lado3}`
    } else {
        return `Escaleno, ${this.lado1}, ${this.lado2}, ${this.lado3}`
    }
}
/*
function retornarTriangulo(lado1, lado2, lado3) {
    return { lado1, lado2, lado3 }
}
*/
const retornarTriangulo = (lado1, lado2, lado3) => {
    return { lado1, lado2, lado3 }
}

const triangulo1 = retornarTriangulo(10, 20, 20)
const triangulo2 = retornarTriangulo(20, 20, 20)
const triangulo3 = retornarTriangulo(21, 22, 23)

console.log(tipoDeTriângulo.call(triangulo1))
console.log(tipoDeTriângulo.call(triangulo2))
console.log(tipoDeTriângulo.call(triangulo3))

console.log(typeof triangulo1)
console.log(typeof retornarTriangulo)