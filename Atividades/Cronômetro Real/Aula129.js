const timer=document.querySelector("#timer")
const btn_iniciar=document.querySelector("#btn_iniciar")
const btn_parar=document.querySelector("#btn_parar")
const btn_zerar=document.querySelector("#btn_zerar")
const btn_parcial=document.querySelector("#btn_parcial")
const parciaisRegistradas=document.querySelector("#parciaisRegistradas")
let tmpini=null//tempo inicial timestamp

let intervalo=null//8. receberá o valor do setInterval

//contador para o timestamp atual
const contador=()=>{
    const tmpatual=Date.now()
    let cont=tmpatual-tmpini//diferença entre o tempo inicial e o tempo atual
    let seg=(tmpatual-tmpini)/1000//conversão de milisegundos para segundos
    timer.innerHTML=converter(seg)//3. timer recebe o valor de segundos convertidos
}

//2. converter segundos em minutos
const converter=(seg)=>{
    const hora=Math.floor(seg/3600)//4. conversão de segundos para horas. 3600 segundos em 1 hora
    const resto=seg%3600//6. resto da divisão de segundos por 3600 !importante
    const minuto=Math.floor(resto/60)
    const segundo=Math.floor(resto%60)

    const tempoFormatado=(hora<10?"0"+hora:hora)+":"+(minuto<10?"0"+minuto:minuto)+":"+(segundo<10?"0"+segundo:segundo)//5. formatação da hora, minuto e segundo
    return tempoFormatado
}


//7 botões

btn_iniciar.addEventListener("click",(evt)=>{
    tmpini=Date.now()
    intervalo=setInterval(contador,1000)
})

btn_parar.addEventListener("click",(evt)=>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener("click",(evt)=>{
    tmpini=Date.now()
    timer.innerHTML="00:00:00"
    clearInterval(intervalo)
    parciaisRegistradas.innerHTML=""
})

//9. botão parcial

btn_parcial.addEventListener("click",(evt)=>{
    let parcial="<div>"+timer.innerHTML+"</div>"
    parciaisRegistradas.innerHTML+=parcial
})