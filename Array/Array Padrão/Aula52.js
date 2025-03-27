
const caixa=document.querySelector("#caixa")

let cores=["Azul", "Verde", "Vermelho",["claro","escuro","médio"]]//adicionando array dentro de array
let cursos=["HTML","CSS","Javascript",cores]//adicionando por,.

//cursos[1]="Python"//alteração do elemento na posição indicada.

//console.log(cursos[4])// percorrer elemento por elemento pelo indice

//adicionando novos elementos com push
//cursos.push("C++")

//retirando elementos com pop
//cursos.pop("Python")

//Adicionando ao inicio
//cursos.unshift("Unreal")

//Tira do inicio
//cursos.shift()

// Verficando o posicionamento pelo indice
console.log(cursos[3][3][2])

cursos.map((el)=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})
