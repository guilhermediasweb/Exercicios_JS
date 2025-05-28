const config={
    titulo:"Teste",
    texto:"Estudando JavaScript",
    cor:"#48f"
}

const cxmsg=new CxMsg(config)

const btn_mostrarMsg=document.querySelector("#btn_mostrarMsg")

btn_mostrarMsg.addEventListener("click",()=>{
    cxmsg.mostrar()
})