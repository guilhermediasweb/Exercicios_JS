function exibir(num){
    console.log("A operação resultou em: " + num);
}


function soma (a, b, callback){
    var op = a + b
    callback(op);
}

function multi (a, b, callback){
    var op = a * b
    callback(op);
}

soma(2,2, exibir);
multi(2,4, exibir);