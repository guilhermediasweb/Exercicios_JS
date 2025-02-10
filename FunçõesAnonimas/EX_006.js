//  Função anônima em uma closure para contagem - Criar  uma função que retorna outra função (usando uma closure) para contar quantas vezes ela foi chamada. Use uma função anônima dentro da implementação.

function criarcontador(){
    let contagem = 0
    return function (){
        contagem++
        console.log(`chamado ${contagem} vez(ez)`)
    }
}

const contador = criarcontador()
contador()
contador()
contador()
contador()