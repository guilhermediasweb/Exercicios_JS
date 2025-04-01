const caixa=document.querySelector("#caixa")

// Método antigo

//const curso="JavaScript"
//const canal="CFB Cursos"
//const frase="Este é o curso de " +curso+ //" do canal " +canal


//Template Strings
//const curso="JavaScript"
//const canal="CFB Cursos"
//const frase=`Este é o <br/> curso de $//{curso} do canal ${canal}.`
//caixa.innerHTML=frase

//Mini Lista

const carros=["Fusca","Gol","Uno","Celta"]

let ol=`<ul>`
carros.map((el)=>{
    ol+=`<li>${el}</li>`
})
ol+`</ul>`
caixa.innerHTML=ol






