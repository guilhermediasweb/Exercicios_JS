// Transformar uma lista de números em uma lista de objetos com propriedades 'número' e 'quadrado'. Será usado Arrow Function dentro do método map para transformar um array de números em um de objetos onde cada propriedade número com valor original e quadrado com número elevado a X(ex: ao quadrado).

const numeros = [1,2,3,4,5]
const numerosEQuadrados = numeros.map(numero => ({
    numero: numero,
    quadrado: numero ** 2
}))

console.log(numerosEQuadrados)