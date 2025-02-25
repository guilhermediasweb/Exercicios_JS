class carro{ //classe PAI
    constructor(nome){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligado=function(){
        this.ligado=true
    }
    desligado=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }

}

class militar extends carro{

}

const c1=new carro("Normal", 4)

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${(c1.portas?"Sim":"Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)

