// Find - Desenvolva uma função que recebe um array de objetos (pessoas com propriedades nome e idade) e retorna o primeiro objeto onde a idade é maior ou igual a 18 anos, utilizando o método find.

function encontrarAdulto(pessoas){
    return pessoas.find(pessoa => pessoa.idade >= 18)

}

const pessoas = [
    {nome: "Alice", idade: 16},
    {nome: "Bob", idade: 22},
    {nome: "Charlie", idade: 15}
]

console.log(encontrarAdulto(pessoas))
