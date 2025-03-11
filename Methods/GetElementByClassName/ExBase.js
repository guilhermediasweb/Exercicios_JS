// HTMLCollection const cursosTodos=document.getElementsByClassName("curso")
// HTMLCollection console.log(cursosTodos)

const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursosC2=[...document.getElementsByClassName("c2")]//Possível modificar da forma que preferir
const cursoEspecial=document.getElementsByClassName("curso")[6]


console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)

cursosC2.map((e1)=> {
    e1.classList.add("destaque")
})


   

