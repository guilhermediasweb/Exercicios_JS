//Callback para transformar e concatenar Strings - Criar uma função que receba um array de strings, um callback para transformar cada string e outro callback para concatenar os resultados. Escreva uma função chamada processarStrings que aceita um array de strings, um callback de transformação (para modificar cada string) e um callback de concatenação (para juntar os resultados). O primeiro callback transforma cada string, e o segundo define como os resultados são combinados.

function processarStrings(array, transformCallback, concatCallback) {
    let resultado = array [0] ? transformCallback(array[0]) : ""
    for (let i = 1; i < array.length; i++){
        resultado = concatCallback(resultado, transformCallback(array[i]))
    }
    return resultado
}

const palavras = ["casa", "carro", "moto"]
const resultado = processarStrings(
    palavras,
    (str) => str.toUpperCase(),
    (acumulado, atual) => acumulado + "-"+ atual
)
console.log(resultado)