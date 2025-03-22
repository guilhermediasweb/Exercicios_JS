const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btn_verificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[21,25,12,20,18,18,22]
p_array.innerHTML="["+elementos_array+"]"

// verifica se todos os elementos do array são maiores que 18
btnVerificar.addEventListener('click', (evt)=>{
    
    const ret=elementos_array.every((e,i)=>{
        if(e<18){
             resultado.innerHTML="Array não conforme na posição "+i
        }
        return e>=18
    })// o elementos_array.every() retorna true ou false
    if(ret){
        resultado.innerHTML="ok"
    }
    console.log(ret)
})