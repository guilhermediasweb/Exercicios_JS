// Criar uma função que receba um número e um callback para dobrar esse número - Escreva uma função chamada dobrarNumero que aceita um número e um callback. O callback deve ser executado para calcular o dobro do número e retornar o resultado.

dobrarnumero(5, (num) => num * 2);
function dobrarnumero(numero, callback){
    return callback(numero)
}

const resultado = dobrarnumero(5, (num) => num*2)
console.log(resultado)