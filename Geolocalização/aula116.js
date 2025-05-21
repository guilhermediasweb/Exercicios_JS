const long=document.getElementById('long');
const lati=document.getElementById('lati');

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocal,erroLocalizar)
}else{
    console.log("Geoolocalização não suportada")
}

function mostrarLocal(pos){
    //console.log(pos)
    long.innerHTML=`Longitude: ${pos.coords.longitude}`
    lati.innerHTML=`Latitude: ${pos.coords.latitude}`;
}

function erroLocalizar(){
    console.log("Erro ao obter a localização")
}

