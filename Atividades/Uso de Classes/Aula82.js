const palco=document.getElementById('palco');
const num_objetos=document.getElementById('num_objetos');
const txt_qtde=document.getElementById('txt_qtde');
const btn_add=document.getElementById('btn_add');
const btn_remover=document.getElementById("btn_remover");

//1 - definindo a altura/largura do palco 
let larguraPalco=palco.offsetWidth
let alturaPalco=palco.offsetHeight
let bolas=[]
let numBola=0

//3 - criando a classe bola
class Bola{
    constructor(arrayBolas,palco){
        this.tam=Math.floor(Math.random()*10)+10//tamanho das bolas
        this.r=Math.floor(Math.random()*255)
        this.g=Math.floor(Math.random()*255)
        this.b=Math.floor(Math.random()*255)
        //posição aleatória
        this.px=Math.floor(Math.random()*(larguraPalco-this.tam))
        this.py=Math.floor(Math.random()*(alturaPalco-this.tam))
        //Velocidade
        this.velx=Math.floor(Math.random()*2)+0.5
        this.vely=Math.floor(Math.random()*2)+0.5
        //direção
        this.dirx=(Math.random()*10) > 5? 1:-1
        this.diry=(Math.random()*10) > 5? 1:-1
        //adicionando a bola no array
        this.palco=palco
        this.arrayBolas=arrayBolas
        //id para cada bola
        this.id=Date.now()+"_"+Math.floor(Math.random()*100000000000)
        this.desenhar()
        //variavel para controle
        this.controle=setInterval(this.controlar,10)
        this.eu=document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML=numBola
    }
    minhasPos=()=>{
        //posição da bola
        return this.arrayBolas.indexOf(this)
    }
    remover=()=>{
        //remover bola do array
        clearInterval(this.controle)
        bolas=bolas.filter((b)=>{
            if(b.id!=this.id){
                return b
            }
        })
        this.eu.remove()
        numBola--
        num_objetos.innerHTML=numBola
    }
    desenhar=()=>{
        //desenhar bolinha
        const div=document.createElement("div")
        div.setAttribute("id",this.id)
        div.setAttribute("class","bola")
        div.setAttribute("style",`left: ${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        this.palco.appendChild(div)
    }
    controle_bordas=()=>{
        //colisão com bordas
        if(this.px+this.tam >= larguraPalco){
            this.dirx=-1
        }else if(this.px <=0){
            this.dirx=1
        }
        if(this.py+this.tam >= alturaPalco){
            this.diry=-1
        }else if(this.py <=0){
            this.diry=1
        }

    }
    controlar=()=>{
        //controla a bola
        this.controle_bordas()
        this.px+=this.dirx*this.velx
        this.py+=this.diry*this.vely
        this.eu.setAttribute("style",`left: ${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        if((this.px > larguraPalco)||(this.py > alturaPalco)){
            this.remover()
        }
    }
}

//2 - dimencionando o palco
window.addEventListener("resize",(evt)=>{
    larguraPalco=palco.offsetWidth
    alturaPalco=palco.offsetHeight
    
})

// Botões de add e remover bolas
btn_add.addEventListener("click",(evt)=>{
    const qtde=txt_qtde.value
    for(let i=0;i<qtde;i++){
        //instanciar novas bolas(lá ele)
        bolas.push(new Bola(bolas,palco))
    }
})


btn_remover.addEventListener("click",(evt)=>{
    bolas.map((b)=>{
        //remover bolas
        b.remover()
    })
})