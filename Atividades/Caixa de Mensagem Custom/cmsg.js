class CxMsg{
    titulo=null
    texto=null
    cor=null
    destino=null
    divmsg=null
    constructor(config){
         this.titulo=config.titulo
         this.texto=config.texto
         this.cor=config.cor
         this.destino=document.body
         
    }
    mostrar=()=>{
        this.divmsg=document.createElement("div")//div principal
        const estilo_divmsg=
            "display: flex;"+
            "justify-content:center;"+
            "align-items:center;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0, 0, 0, 0.7);"
        this.divmsg.setAttribute("id","divmsg")    
        this.divmsg.setAttribute("style",estilo_divmsg)
        this.destino.prepend(this.divmsg)
        
        const areaCxmsg=document.createElement("div")//div secundária
        const estilo_areaCxmsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items:center;"+
            "flex-direction: column;"+
            "width: 300px;"
        areaCxmsg.setAttribute("style",estilo_areaCxmsg)  
        this.divmsg.appendChild(areaCxmsg)

        const estilo_tituloCxmsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items:center;"+
            "width: 100%;"+
            "background-color:"+this.cor+";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px;"

        const tituloCxmsg=document.createElement("div")//título da caixa de mensagem
        tituloCxmsg.setAttribute("style",estilo_tituloCxmsg)
        tituloCxmsg.innerHTML=this.titulo
        areaCxmsg.appendChild(tituloCxmsg)

        const corpoCxmsg=document.createElement("div")//corpo da caixa de mensagem
        const estilo_corpoCxmsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items:center;"+
            "background-color: #eee;"+
            "width: 100%;"+
            "color: #000;"+
            "padding: 30px 5px;"
        corpoCxmsg.setAttribute("style",estilo_corpoCxmsg)
        corpoCxmsg.innerHTML=this.texto
        areaCxmsg.appendChild(corpoCxmsg)
        
        const rodapeCxmsg=document.createElement("div")//rodapé da caixa de mensagem
        const estilo_rodapeCxmsg=
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items:center;"+
            "background-color: #ccc;"+
            "width: 100%;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px;"
        
        rodapeCxmsg.setAttribute("style",estilo_rodapeCxmsg)
        corpoCxmsg.innerHTML=this.texto
        areaCxmsg.appendChild(rodapeCxmsg)    

        const btn_ok=document.createElement("button")//botão ok
        const estilo_btnCxmsg=
            "display: flex;"+
            "background-color:"+this.cor+";"+
            "color: #fff;"+
            "cursor: pointer;"+
            "padding: 10px 50px;"+
            "border-radius: 5px;"+
            "text-transform: uppercase;"
        
        btn_ok.setAttribute("style",estilo_btnCxmsg)
        btn_ok.innerHTML="OK"
        rodapeCxmsg.appendChild(btn_ok)

        //evento de clique do botão ok
        btn_ok.addEventListener("click",(evt)=>{
            this.ocultar()
        })
    }
    ocultar=()=>{
        this.divmsg.remove()
    }
}