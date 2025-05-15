let nome=new String("Guilherme Dias Machado 1987")
let email="Guilherme@Guilherme.com"
console.log(nome)
let num="1, 10, 100, 1000"

console.log(nome.search(/dias/i))//i=ignore case
console.log(nome.match(/I/ig))//g=global. i=ignore case
console.log(nome.replace(/a/ig,"Teste"))//replace=trocar
console.log(nome.match(/[a-g|h-z|1-9]/ig))//padrão de busca

//metacaracteres
console.log(nome.match(/\d/ig))//busca numeros
console.log(nome.match(/\s/ig))//busca espaço
console.log(nome.match(/\bd/ig))//dword

//Quantificadores
console.log(nome.match(/e+|s+/ig))//Ele entendendo que o e é da mesma palavra
console.log(nome.match(/mi*/ig))
console.log(num.match(/10+/ig))//+busca 10 e números que começam com 10
console.log(num.match(/10*/ig))//*busca 10 e o tudo.
console.log(num.match(/10/ig))//Somente 10
console.log(num.match(/10?/ig))//1 e 10 somente