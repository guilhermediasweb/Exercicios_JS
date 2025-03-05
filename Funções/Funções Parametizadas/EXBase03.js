let valor=0
console.log(valor)
function add(v){
    return valor+v
}
valor=add(10)
console.log(valor)
valor=add(10)
console.log(valor)


let ValorPadrao=0 //Valor Padrão definido

function soma(n1=ValorPadrao,n2=ValorPadrao){
    let res
    res=n1+n2
    return res
}
let resultado=soma(5,5)
//console.log(resultado)