// let i=null
// for(i=0; i<10; i++);
//    console.log(i)//caso 1 onde possui várias instruções em For e sem um bloco de código

// caso 2 - mais de uma instrução na mesma linha
// let i=10; i=0
// console.log(i)

// caso 3 - Ponto e vírgula obrigatório após o uso de ],{ na próxima linha.

// let canal="Subsonic Gameplays";
// ["J","a","v","a","S","c","r","i","p","t"].forEach(i => console.log(i));

// let n1=[1,2]
// let n2=[3,4];
// [n1,n2].map(v=>console.log(v))

// caso 4 - uso obrigatório antes de ()
// let n=null;
// (n=10)
// console.log(n)

// caso 5 - uso obrigatório antes de [] e optando sem criar uma nova variável antes do array que receba números, uma desestruturação em array
let numeros=[10,20,30];
[n1,n2,n3]=numeros
console.log(n1)
console.log(n2)
console.log(n3)