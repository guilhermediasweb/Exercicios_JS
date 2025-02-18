class Carro{
    constructor(pnome, ptipo){
        this.nome=pnome
        if(ptipo ==1){
            this.tipo="Esportivo"
            this.velmax=300
        }else if(ptipo==2){
            this.tipo="Utilitário"
            this.velmax=100
        }else if(ptipo==3){
            this.tipo="Passeio"
            this.velmax=100
        }else{
            this.tipo="Serviço"
            this.velmax=90
        }
    }
    
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return[this.nome, this.tipo, this.velmax]
    }//#array

    setNome(nome){
        this.nome=nome
    }

    setTipo(tipo){
        this.tipo=tipo
    }

    setVelMax(velmax){
        this.velmax=velmax
    }
    info (){
        console.log(`Nome.:  ${this.nome}`)
        console.log(`Tipo.:  ${this.tipo}`)
        console.log(`V.Max:  ${this.velmax}`)
    }
}

let c1 = new Carro("Rapidão", 1)
let c2 = new Carro("Super Luxo", 2)
let c3 = new Carro("Patricinha", 3)
let c4 = new Carro("Topa tudo", 4)

c1.setVelMax("450")
c1.setNome("Super Veloz")
c1.setTipo("Hipercarro")
c1.info()

//console.log(c2.getInfo())