// INTER - Manipular Arrays. Escrever uma função que recebe um array e retorna um novo onde cada n é duplicado. Metodo map.

function dNumeros(arr){
    return arr.map(num => num*2)
}

const numeros = [1,2,3,4,5]
console.log(dNumeros(numeros))
    
