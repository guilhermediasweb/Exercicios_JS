class npc{
    static alerta=false// definindo em uma propriedade estática
    constructor(energia){
        this.energia=energia;
        this.alerta==false;
    }
    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${npc.alerta?"Sim":"Não"}`)
        console.log("----------------------------------")
    }
    static alertar(){
        npc.alerta=true;
    }//definindo como método por fora da classe

}

const npc1=new npc(100);
const npc2=new npc(200);
const npc3=new npc(80)

npc.alertar()


npc1.info();
npc2.info();
npc3.info();

