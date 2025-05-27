//const head=document.head
const body=document.body

//Aula144- Formatando sem precisar do css

const estiloTopo=
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: blue;"

//definindo estilo css
//const estilo="<link rel='stylesheet' type='text/css' href='topo.css'></link>"
//head.innerHTML+=estiloTopo
const topo=document.createElement("div")
topo.setAttribute("id","topo")
topo.setAttribute("style","estiloTopo")
body.prepend(topo)

//Aula134 - Formatando a logo
const estilo_img_logo=
    "width: 200px;"
//criando a div logo
const logo=
"<div id='logo' class='logo'>" +
  "<img src='logo_caveira.png' title='logo caveira' style="+estilo_img_logo+"></img>"+
"</div>"

topo.innerHTML+=logo

//criando a div login
const login=
"<div id='login' class='login'>" +
  "<p id='matricula'>Matrícula:<span></span></p>" +
  "<p id='nome'>Nome:<span></span></p>" +
"</div>"
topo.innerHTML+=login

