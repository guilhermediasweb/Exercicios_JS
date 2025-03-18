const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const cursos=["HTML","CSS","Javascript","React","MySQL","AAAAAA"]

// Adicionando elementos ao DOM.
// cursos.map((el,chave)=>{
    // console.log(chave)
    // const novoElemento=document.// createElement("div")
    // caixa1.appendChild(novoElemento)
   //  novoElemento.innerHTML=el
    // novoElemento.setAttribute("id","c"// +chave)//após criar o elemento chave e verificar, só adicionar +chave.
    // novoElemento.setAttribute("class",// "curso c1")
// })
//caixa1.appendChild(novoElemento)
//novoElemento.innerHTML="AAAAAA"//Começar a manipular o novo elemento.
//novoElemento.setAttribute("id","c7")//colocando um atributo 
//novoElemento.setAttribute("class","curso c1")//atributo de classe

// Remoção de elementos 

cursos.map((el,chave)=>{
     console.log(chave)
     const novoElemento=document.createElement("div")
     caixa1.appendChild(novoElemento)
     novoElemento.innerHTML=el
     novoElemento.setAttribute("id","c")
     novoElemento.setAttribute("class", "curso c1")
    
     const btn_lixeira=document.createElement("img")
     btn_lixeira.setAttribute("src","./Icon.trash.png")
     btn_lixeira.setAttribute("id","./Icon.trash.png")
     novoElemento.appendChild(btn_lixeira)

     novoElemento.addEventListener("click",(evt)=>{
        
        caixa1.removeChild(evt.target.parentNode)
     })
 })