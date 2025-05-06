const url=document.getElementById('url')
const btn_url=document.getElementById('btn_url')

btn_url.addEventListener("click",(evt)=>{
    //window.location="https://x.com/Subsonic_Zy"
    //window.location.replace("https://www.google.com.br") Deleta a url do histórico
    //window.location.assign("https://www.google.com.br")//Não deleta a url do histórico
    //window.location.reload()//carrega a pagina novamente
    //window.history.back()//volta uma pagina
    //window.history.forward()//avança uma pagina
    //window.history.go(-1)//Navegar mais de uma página
    //console.log(window.history.length)//quantidade de paginas no histórico
   // console.log(url.value)
   window.location=url.value
})