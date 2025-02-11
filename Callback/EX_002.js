// callback com atraso - Criar uma função que simule uma operação assíncrona usando setTimeout e um callback. Escreva uma função chamada buscarDados que simule a busca de dados em um servidor. A função deve esperar 2 segundos (usando setTimeout) e, em seguida, chamar um callback com um array de nomes. Se não houver dados, o callback deve ser chamado com um erro.

function buscardados(callback){
    setTimeout(() =>{
        const dados = ["Alice", "Bob", "Carol"]
        if (dados.length > 0){
            callback(null, dados)
        }else{
            callback("Nenhum dado encontrado", null)
        }
    }, 2000)
}

buscardados((erro, dados) => {
    if(erro) {
        console.log("Erro:", erro)
    }else{
        console.log("Dados:", dados)
    }
}
)