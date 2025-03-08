function* perguntas(){
    const nome=yield'Qual o seu nome?'
    const esporte=yield'Qual o seu esporte favorito?'
    return "Seu nome é " + nome +', seu esporte favorito é ' + esporte
} //possível armazenar info com const

const itc=perguntas()
console.log(itc.next().value)
console.log(itc.next('Guilherme').value)
console.log(itc.next('Futebol').value)


