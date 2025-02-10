//Filtrar números pares - Usar o método filter() para criar um novo array contendo apenas os números pares de um array dado.

const numeros = [1,2,3,4,5,6,7,8,9,10]
const pares = numeros.filter(function(num){
    return num % 2 ===0
})

console.log(pares)

