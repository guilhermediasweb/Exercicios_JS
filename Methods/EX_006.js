// Sort, Map, Reduce - Escreva uma função que recebe um array de números, ordene-os em ordem decrescente (usando sort), depois eleve cada número ao quadrado (com map), e finalmente calcular a soma dos quadrados (com reduce). 

function ordenarElevarESomarN(arr){
    return arr.sort((a,b) => b - a)//ordena de forma decrescente
    .map(num => num * num) // eleva ao quadrado
    .reduce((soma, num) => soma + num, 0) // soma os quadrados
}
const numeros = [3, 1, 4, 1, 5, 9]
console.log(ordenarElevarESomarN(numeros))