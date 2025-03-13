//const c1=document.getElementById("c1")

const cursos=[...document.querySelectorAll(".curso")]

 // const msg=()=>{
 //     alert("clicou")
 // } // Método sem arrow function

// c1.addEventListener("click",()=>{
//     alert("Clicou")
// }) Usando arrow function no lugar de 'msg'

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.add('destaque')
        console.log(el.innerHTML + " foi clicado")
    })
    
})

// c1.addEventListener("click",(evt)=>{
//     const el=evt.target
//     el.classList.add('destaque')
// }) Obtenção de Target.

