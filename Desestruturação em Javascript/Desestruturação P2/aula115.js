//let numeros=[10,20,30,40,50,60,70,80,90]

//let [a,b,c,...d]=numeros//uso de Spread.
//console.log(a)
//console.log(b)
//console.log(c)
//console.log(d)

//Desestruturação de objetos
//let obj={nome: "Guilherme", canal: "Guilhermizmo"}

//let{nome, canal}=obj
//console.log(nome)
//console.log(canal)

//Desestruturação de funções
const cores=()=>{
    return ["vermelho", "azul", "verde", "branco"]
}

let [c1,c2,,c3]=cores()//,,c3=branco
console.log(c1)
console.log(c2)
console.log(c3)

//Desestruturação de Strings
let texto="Curso de JavaScript"

let[p1,p2,p3]=texto.split(" ")//retorna a primeira posição
console.log(p1)
console.log(p2)
console.log(p3)



