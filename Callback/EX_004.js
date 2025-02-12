// Callback para filtrar números pares - Criar uma função que receba um array de números e um callback para filtrar apenas os números pares. Escreva uma função chamada filtrarNumeros que aceita um array de números e um callback. O callback deve ser usado para determinar quais números devem ser incluídos no resultado. Use o callback para filtrar apenas os números pares.

function filtrarNumeros(array, callback) {
    const resultado = []
    for (let num of array){
        if (callback(num)){
            resultado.push(num)
        }
    }
    return resultado
}

const numeros = [1,2,3,4,5,6]
const pares = filtrarNumeros(numeros, (num) => num % 2 === 0)
console.log(pares)