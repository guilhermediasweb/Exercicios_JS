// Soma entre elementos com função anônima no reduce - Usar uma função anônima dentro do método reduce() para somar todos os elementos de um array.

const numeros = [10, 20, 30, 40, 50]
const soma = numeros.reduce(function(acumulador, valoratual) {
    return acumulador + valoratual
}, 0)

console.log(soma)