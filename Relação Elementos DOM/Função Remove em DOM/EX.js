const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoverCurso=document.getElementById("btnRemoverCurso")

cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")

    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})
const radioSelecionado=()=>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado=todosRadios.filter((ele,ind,arr)=>{
        return ele.checked
    })
    
    return radioSelecionado[0]
} // a função radioSelecionado irá retornar o curso selecionado.

btnCursoSelecionado.addEventListener("click",(evt)=>{
    const rs=radioSelecionado()
    if(rs !==undefined){ // Checks if rs is different from undefined
     const cursoSelecionado=rs.parentNode.previousSibling.textContent
    
     alert("Curso selecionado: " + cursoSelecionado) 
    }else{
        alert("Selecione um curso")
    }
    
})

// remover curso

// btnRemoverCurso.addEventListener("click",()=>{
 //    const rs=radioSelecionado()
 //    if(!rs){
 //        alert("Selecione um curso para remover")
 //        return
 //    }
 //    const cursoSelecionado=rs.closest(".curso")
 //    if(cursoSelecionado){
 //        cursoSelecionado.remove()
//     }else{
//         alert("Não foi possível remover o curso")
//     }
// }) Remover curso selecionado avançado


btnRemoverCurso.addEventListener("click",(evt)=>{
    const rs=radioSelecionado()
    const cursoSelecionado=rs.parentNode.parentNode
   cursoSelecionado.remove()
})//Remover curso selecionado iniciante
