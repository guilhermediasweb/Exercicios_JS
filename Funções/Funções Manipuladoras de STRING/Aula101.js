//let nome="Guilheerme"

//console.log(nome)
//console.log(typeof(nome))

//nome o método mais simples para manipular strings

//Método com indicação de objeto e  classe String

let nome=new String("Guilherm")
let nome2=new String("Guilherme")
let nome3=new String("GUILHERME")
let nome4=new String("guilherme")
let canal=new String(" Subsonic Gameplays")
let curso=["Curso","de","JavaScript"]

console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(0))//Retorna o caractere na posição indicada
console.log(nome.charCodeAt(0))//Retorna o código do caractere na posição indicada

console.log(nome.concat(curso+canal))//Concatena duas strings

//nome=nome.concat(canal)//Concatena duas strings
console.log(nome.indexOf("i"))//Retorna a posição do caractere indicado 

console.log(nome.lastIndexOf("l"))//Retorna a posição do primeiro caractere que ele encontrar

console.log(nome==nome2)//A comparação entre dois objetos string será falsa, só em var q funciona

//let n1="Yo"
//let n2="Yo"
//console.log(n1==n2)//Comparação entre VAR funcionando
//console.log(nome.localeCompare(nome2))//0 é o retorno para Strings equivalentes. O retorno de 1 será se a primeira string for maior que a segunda, já o -1 será se a segunda for maior que a primeira String.

//console.log(nome.replace("i","o"))//Substitui caracteres e possível adicionar sentenças.
console.log(nome.search("e"))//Pesquisar dentro da String.
console.log(nome.slice(0,7))//Retorna a string cortada, indicando o inicio e o fim

let arr_nome=nome.split("i")
console.log(arr_nome)//Retorna um recorte indicado em um array.

let parte=nome.substring(0,7)//Retorna a String sem a indicação desejada.
console.log(parte)

console.log(nome4.toUpperCase())//Retorna a String em maiúsculo. tolacaleUpperCase() faz o mesmo
console.log(nome3.toLowerCase())//Retorna a String em minúsculo. toLocaleLowerCase() faz o mesmo
console.log(nome.valueOf())//Retorna o valor da String)

let num=10
console.log(typeof(num.toString()))//Retorna o valor do number em string









