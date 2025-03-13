const caixa1=document.querySelector("#caixa1")//querySelectorAll apenas aqui, já q são vários objetos para selecionar.
const caixa2=document.querySelector("#caixa2")
const btn_transferir=document.querySelector("#btn_transferir")
const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado")
    })
})

btn_transferir.addEventListener("click",()=>{
    const cursoSelecionados=[...document.querySelectorAll('.selecionado')]
    const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]
    cursoSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
    // console.log(cursoSelecionados)
})

// desafio - fazer retornar os elementos para a caixa1.
