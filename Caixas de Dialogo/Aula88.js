const btn_alert=document.getElementById("btn_alert")
const btn_confirm=document.getElementById("btn_confirm")
const btn_prompt=document.getElementById("btn_prompt")

btn_alert.addEventListener("click",(evt)=>{
    alert("Haverá sinais!")
})

btn_confirm.addEventListener("click",(evt)=>{
    //confirm("Haverá sinais?")
    const ret=confirm("Haverá sinais?")
    console.log(ret)
})

btn_prompt.addEventListener("click",(evt)=>{
   const nome=prompt("Digite algo")
   console.log(nome) 
})