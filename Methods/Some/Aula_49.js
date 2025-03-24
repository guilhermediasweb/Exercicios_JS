const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btn_verificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[16,12,10,17,15,13,11,19]
p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener('click', (evt)=>{
    
    const ret=elementos_array.some((e,i)=>{
        if(e<18){
             resultado.innerHTML="Array não conforme na posição "+i
        }
        return e>=18
    })
    if(ret){
        resultado.innerHTML="ok"
    }
    console.log(ret)
})