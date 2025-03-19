// const filterMaior18=(valor)=>{
//     if(valor >= 18){
//         return valor
//     }
// } Método 1


const idades=[15,21,30,17,44,12,50]
// const maior=idades.filter(filterMaior18) Método 1
const maior=idades.filter((valor)=>{
    if(valor >= 18){
        return valor
    }
}) // Método 2 com uso de arrow function

const menor=idades.filter((valor)=>{
    if(valor <= 18){
        return valor
    }
})
console.log(idades) //idades
console.log(maior) //impressão de valores maiores que 18
console.log(menor) //Impressão dos valores menores que 18
