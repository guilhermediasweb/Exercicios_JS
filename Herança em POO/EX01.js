class carro{ //classe PAI
    constructor(nome, portas){
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

class militar extends carro{//classe filho
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem=blindagem
        this.municao=municao
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

const c1=new carro("Normal", 4)
c1.ligar()
c1.setCor("Preto")

const c2=new militar("Lutador", 6, 100, 50)

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)

