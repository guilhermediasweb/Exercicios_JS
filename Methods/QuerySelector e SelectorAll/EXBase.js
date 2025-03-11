const divTodas=[...document.getElementsByTagName("div")]
const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursosC2=[...document.getElementsByClassName("c2")]
const cursoEspecial=document.getElementById("c1")

// Uso dos QuerySelector
const query_divTodas=[...document.querySelectorAll("div,p")]
console.log(query_divTodas)

const query_cursosTodos=[...document.querySelectorAll(".curso")]
const query_cursosC1=[...document.querySelectorAll(".c1,p")]
const query_cursosc2=[...document.querySelectorAll(".c2")]
//const query_cursoEspecial=document.querySelector("#c1")
const query_cursoEspecial=document.querySelectorAll("#c1")[0]

//console.log(query_cursoEspecial)
console.log(query_cursosC1)
//console.log(query_cursosc2)

//console.log(divTodas)
//console.log(cursosTodos)
//console.log(cursosC1)
//console.log(cursosC2)
//console.log(cursoEspecial)

//cursosC2.map((e1)=> {
//    e1.classList.add("destaque")
//})
