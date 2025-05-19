//let a,b,c,d

//[a,b,c,d]=[10,20,30,40]//1-qualquer valorr pode ser atribuido a essas variaveis

//({a,b,c,d}={a:"verde",b:"amarelo",c:"azul",d:"vermelho"})//2- valores sendo atribuidos dentro de um objeto

//let numeros=[10,20,30,40]
//let [a,b,c,d]=numeros//3-valores sendo atribuidos dentro de um array

//let a,b,c,d
//[a,b=0,c=0,d=1]=[10]//4- possível atribuir dentro das variaveis valores padrões

//let a=10;
//let b=20;

//[a,b]=[b,a]

let numeros=()=>{
    return [10,20,30,40]
}
//console.log(numeros())//5-possível extrair em funções
let [a,b,c,d]=numeros()
console.log(a)
console.log(b)
console.log(c)
console.log(d)


