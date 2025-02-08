// Join - Uma função que recebe um array string e retonra uma única string onde todos os elementos estão separados por virgula, usando o método join.

function juntarStrings(arr) {
    return arr.join(', ')
}

const frutas = ['maçã', 'banana', 'laranja']
console.log(juntarStrings(frutas))