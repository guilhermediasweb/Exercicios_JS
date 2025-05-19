const q1=document.getElementById("q1")
const q2=document.getElementById("q2")
const posx=document.getElementById("posx")
const posy=document.getElementById("posy")
const largura=document.getElementById("largura")
const altura=document.getElementById("altura")

//Atribuindo a tecla de atalho para cada quadrado
q1.accessKey="q"
q2.accessKey="w"
console.log("q1: "+q1.accessKey)
console.log("q2: "+q2.accessKey)

const info=(el)=>{
    let DOMRect_q=el.getBoundingClientRect()
posx.innerHTML=`posx: ${DOMRect_q.x}`
posy.innerHTML=`posy: ${DOMRect_q.y}`
largura.innerHTML=`largura: ${DOMRect_q.width}`
altura.innerHTML=`altura: ${DOMRect_q.height}`
}

//Mostrando as propriedades dos quadrados após clicar

q1.addEventListener("click",(evt)=>{
    info(evt.target)
})
q2.addEventListener("click",(evt)=>{
    info(evt.target)
})