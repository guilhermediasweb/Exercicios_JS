//INICIANTE Cumprimentar

//const cumprimentar = n=> `Olá, ${n}!`
//console.log(cumprimentar("Ana"))

//2

//const nome = n=>{return n}
//console.log(nome("AAAAAA"))


// 
// MÉDIO Filtrar lista de objetos, será filtrado no output F8 o nome e a faixa etária escolhida. 1 - Criar var pessoas junto, após iniciar a lista com var nome e idade.
// aplicar o pessoas.filter abaixo da lista, => será em () junto de pessoa.idade e a faixa etária.

const pessoas = [
    { nome: "João", idade: 20},
    { nome: "Maria", idade: 17},
    { nome: "Cléber", idade: 25},
    { nome: "Ana", idade: 15}
]

const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade > 18)
console.log(maioresDeIdade)

