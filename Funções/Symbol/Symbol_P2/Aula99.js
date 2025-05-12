class jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores=[new jogador("j1"),new jogador("j2"),new jogador("j3"),new jogador("j4"),new jogador("j1"),new jogador("j3")]

//remoção de um jogador
//let s1=jogadores[3].id

//jogadores=jogadores.filter((j)=>{
//    return j.id!=s1
//})//remoção por id

//jogadores=jogadores.filter((j)=>{
//    return j.nome!="j1"
//})//remoção por nome

let s=[]

let s_jogadores=jogadores.filter((j)=>{
    return j.nome=="j1"
})

s=s_jogadores.map((j)=>{
    return j.id
})

console.log(s_jogadores)
console.log(s)
console.log(jogadores)

