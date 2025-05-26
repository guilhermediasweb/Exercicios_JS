const f_texto=document.querySelector("#f_texto");
const p_texto=document.querySelector("#p_texto");
const btn_texto=document.querySelector("#btn_texto");

btn_texto.addEventListener("click",(evt)=>{

})

let num=10
const canal="Pensamentos Intrusivos"
//window.localStorage.setItem("numero",num)
//localStorage.setItem("numero",num)//como é de chamado a partir do window, não precisa colocar o window.

//localStorage.setItem("numero",33)//possível mudar o value da key

//alert(localStorage.getItem("numero"))//retorna o valor da key
//localStorage.setItem("canal",canal)
//alert(localStorage.getItem("canal"))
//localStorage.clear()//limpa o local storage
//alert(localStorage.getItem(localStorage.key(0)))//retorna o nome da key e o valor da key

//alert(localStorage.length)//retorna a quantidade de keys
//localStorage.clear()

sessionStorage.setItem("numero",num)
sessionStorage.setItem("canal",canal)

