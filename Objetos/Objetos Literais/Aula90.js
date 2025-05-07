const objetos=document.getElementById('objetos');

let computador ={
    cpu:"",
    ram:"",
    hd:"",
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.hd}`)
    }
}//isso é considerado um objeto apenas por usar chaves
computador["monitor"]="27pol"
computador["monitor"]="24pol"
//delete(computador.hd)

const c1=Object.assign({},computador)//clonagem de objetos
console.log(computador)
c1.info()

//criando objetos a partir de objetos
const c2=Object.create(computador)
c2.cpu="i7"
c2.ram="16gb"
c2.hd="1tb"
c2.info()

const o1={obj:"1"}
const o2={obj:"2"}
const o3={obj:"3"}
const o4=Object.assign({},o1,o2,o3)
console.log(o4) //mesclagem de objetos

let computadores=[
    {
        cpu:"9800x3d",
        ram:"65gb",
        hd:"1tb"  
    },
    {
        cpu:"7800x",
        ram:"65gb",
        hd:"1tb",
        gpu:"RTX5070"  
    },
    {
        cpu:"5700X3D",
        ram:"65gb",
        hd:"1tb",
        gpu:"RTX4060ti"  
    }
]
computadores.forEach((c)=>{
    console.log(c);
    const div=document.createElement("div")
    div.innerHTML=c.cpu+"<br/>"+c.ram+"<br/>"+c.hd
    div.setAttribute("class","computador")
    objetos.appendChild(div)
})

//computador.info();
//console.log(computador);
//objetos.innerHTML=JSON.stringify(computador);