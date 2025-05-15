const carro=document.getElementById("carro")
const btn_esq=document.getElementById("btn_esq")
const btn_dir=document.getElementById("btn_dir")
const btn_parar=document.getElementById("btn_parar")

const init=()=>{
    
    carro.style="position:relative;left:0px;width:100px"
    tamMax=window.innerWidth - parseInt(carro.style.width)
}

let tamMax=null

let anima=null// automação usando o setTimeout

const move=(dir)=>{
    if(dir > 0){
        if(parseInt(carro.style.left) <= tamMax){
           carro.style.left=parseInt(carro.style.left) + (10*dir) +"px" 
            anima=setTimeout(move,20,dir)
        }else{
            clearTimeout(anima)
        }
    }else if(dir < 0){
        if(parseInt(carro.style.left) >= 0){
           carro.style.left=parseInt(carro.style.left) + (10*dir) +"px" 
           anima=setTimeout(move,20,dir)
        }else{
            clearTimeout(anima)
        }

    }
     
    
}


//Botões de direção com automação
btn_parar.addEventListener("click",()=>{
    clearTimeout(anima)
    
})

btn_esq.addEventListener("click",()=>{
    clearTimeout(anima)
    move(-1)
})

btn_dir.addEventListener("click",()=>{
    clearTimeout(anima)
    move(1) 
})

//Função de automação
//const move=(dir)=>{
//     carro.style.left=parseInt(carro.style.left) + (10*dir) +"px"
//}


//Botões de direção com automação
//btn_parar.addEventListener("click",()=>{
//    clearInterval(anima)
//})

//btn_esq.addEventListener("click",()=>{
//    clearInterval(anima)
//    anima=setInterval(move,20,-1)
//})

//btn_dir.addEventListener("click",()=>{
//    clearInterval(anima)
//   anima=setInterval(move,20,1)
    
//})


//Botões de direção

//btn_esq.addEventListener("click",()=>{
 //   carro.style.left=parseInt(carro.style.left) - 10+"px"
//})

//btn_dir.addEventListener("click",()=>{
//    let pos=parseInt(carro.style.left)
//    pos+=10
//    carro.style=`position:relative;left:${pos}px`
    
//})

//window.onload=init

window.addEventListener("load",init())
window.addEventListener("resize",()=>{
    tamMax=window.innerWidth - parseInt(carro.style.width)
})//definindo o tamanho máximo da tela independente do tamanho da imagem