// Função anônima como argumento de outra função -  Crie uma função chamada executarOperacao que aceita dois números e uma função anônima como argumento. A função anônima será usada para realizar uma operação (como soma, subtração, etc.) entre os dois números.

function executaroperacao(a, b, operacao){
    return operacao(a,b)
}

const resultadosoma = executaroperacao(5, 3, function (x,y){
    return x+y
})

console.log("Soma:", resultadosoma)

const resultadomulti = executaroperacao(5,3, function(x,y){
    return x*y
})

console.log("Multiplicação:", resultadomulti)