const caixa=document.querySelector("#caixa")

let mapa=new Map()

mapa.set("curso","Javascript")
mapa.set(10,"Subsonic")
mapa.set(1,100)
mapa.set("canal",100)

mapa.delete(1)
console.log(mapa)



//Verificar se existe uma chave
//let pes=1
//if(mapa.has(pes)){
  //  caixa.innerHTML="A chave existe com o valor: "+mapa.get(pes)
//}else{
    caixa.innerHTML="A chave não existe"
//}
//verificação mais elegante 
let pes=1
let res=""
if(mapa.has(pes)){
    res="A chave existe com o valor: "+mapa.get(pes)
    
}else{
    res="A chave não existe"
}
res+="<br> O tamanho da coleção é: "+mapa.size
caixa.innerHTML=res

mapa.forEach((el)=>{
    console.log(el)
})


//caixa.innerHTML=mapa.get("curso")//chamando o valor da chave curso

