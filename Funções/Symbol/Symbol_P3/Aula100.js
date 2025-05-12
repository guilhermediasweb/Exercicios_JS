const nome=Symbol("nome")
const numero=Symbol("nome")
const corUniforme=Symbol("nome")

const jogador={
    nome: "j1"
    
}
//propriedades do objeto "literais", ''hidden objects''
jogador[numero]= 10,
jogador[corUniforme]= "azul"

for(p in jogador){
    console.log(p)
}
//console.log(nome.description)//descrição do simbolo

//console.log(jogador[nome])
console.log(jogador.nome)
console.log(jogador[numero])
console.log(jogador[corUniforme])
