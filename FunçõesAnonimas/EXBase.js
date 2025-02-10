//let f=function(v1,v2){return v1+v2} //#1
//console.log(f(10,5))

const f=new Function("v1,v2","return v1+v2")
console.log(f(10,5))