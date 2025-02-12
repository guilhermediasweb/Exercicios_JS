// Callback com tratamento de erros assíncronos -  Criar um sistema de validação assíncrona para uma lista de tarefas, com callbacks para sucesso e erro. Escreva uma função chamada validarTarefas que receba uma lista de tarefas (cada uma com um id e um status) e valide assincronamente cada tarefa. Use setTimeout para simular o tempo de validação. Cada tarefa deve ser validada com um callback de sucesso (se o status for "concluída") ou um callback de erro (se o status for "pendente" ou "falha"). No final, retorne um relatório com os resultados.

function validarTarefas(tarefas, sucessoCallback, erroCallback) {
    tarefas.forEach((tarefa) => {
        setTimeout(() => {
            if(tarefa.status === "Concluída"){
                sucessoCallback(tarefa)
            }else{
                const erro = tarefa.status === "pendente"
                ?"Tarefa ainda não concluída"
                :"Tarefa falhou"
                erroCallback(tarefa, erro)
            } 
        }, Math.random() * 2000)
    })
}

const tarefas = [
    { id: 1, status: "concluída"},
    { id: 2, status: "pendente"},
    { id: 3, status: "concluída"},
    { id: 4, status: "falha"}
]

validarTarefas(tarefas, 
    (tarefa) => console.log(`Tarefa ${tarefa.id} validada com sucesso!`),
    (tarefa, erro) => console.log(`Erro na tarefa ${tarefa.id}: ${erro}`)
)