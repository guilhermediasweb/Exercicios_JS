const div_data=document.getElementById("div_data")
const div_relogio=document.getElementById("div_relogio")

const data=new Date() 

//console.log(Date.now())//Timestamp

//adicionando 0 em datas menores que 10
let dia=data.getDate()
dia=dia<10?"0"+dia:dia

let mes=data.getMonth()
mes=mes<10?"0"+mes:mes

const data_r=dia+"/"+mes+"/"+data.getFullYear()

div_data.innerHTML=data_r

//Relógio

const relogio=()=>{
    const data=new Date()
    let hora=data.getHours()
    hora=hora<10?"0"+hora:hora

    let minuto=data.getMinutes()
    minuto=minuto<10?"0"+minuto:minuto

    let segundos=data.getSeconds()
    segundos=segundos<10?"0"+segundos:segundos

    const hora_completa=hora+":"+minuto+":"+segundos

    div_relogio.innerHTML=hora_completa
}

const intervalo=setInterval(relogio,1000)
