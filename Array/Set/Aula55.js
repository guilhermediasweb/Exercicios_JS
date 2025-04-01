const caixa=document.querySelector("#caixa")

let musicas=new Set(["musica1","musica boa", "musica ruim"])

musicas.add("musica interessante")
musicas.add("musica tenebrosa")
musicas.add("musica 6")
musicas.add("musica 6")
musicas.add("musica 6")//adição de duplicado não irá funcionar.
console.log(musicas)


musicas.delete("musica tenebrosa")
musicas.clear()//Limpa a coleção
// Percorrendo o set
// musicas.forEach((el)=>{
//     caixa.innerHTML+=el + "<br>"
// })

// Percorrendo o set com for of
for(let m of musicas){
    //console.log(m)
    caixa.innerHTML+=m + "<br>"
}





