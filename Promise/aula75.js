const numero=document.getElementById("numero");
const btn_promessa=document.getElementById("btn_promessa");

btn_promessa.addEventListener("click",(evt)=>{
    numero.innerHTML="Processando..."
    promessa()
    .then((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.remove("erro")
        numero.classList.add("OK")
    })//deu certo
    
    .catch((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.add("erro")
        numero.classList.remove=("OK")
    })//deu errado
})//Promise dentro de uma função, aula 76

const promessa=()=>{
        //Código base da aula 75
let p=new Promise((resolve,reject)=>{
    let resultado=true
    let tempo=3000
    setTimeout(()=>{
        if(resultado){
            resolve("Deu tudo certo")
        }else{
            reject("Deu tudo errado")
        }
    },tempo)
    
})
return p 
// promise.then((retorno)=>{
//     numero.innerHTML=retorno
//     numero.classList.remove("erro")
//     numero.classList.add("OK")
// })//deu certo

// promise.catch((retorno)=>{
//     numero.innerHTML=retorno
//     numero.classList.add("erro")
//     numero.classList.remove=("OK")
// })//deu errado
}

numero.innerHTML="Em espera..." 




