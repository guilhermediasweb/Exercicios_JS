// callback com encadeamento -  Criar um sistema de encadeamento de callbacks para processar uma sequência de operações assíncronas. Escreva três funções assíncronas que simulem etapas de um processo: Escreva três funções assíncronas que simulem etapas de um processo:  
//pegarUsuario (retorna um ID de usuário após 1 segundo).  
//pegarPerfil (recebe o ID do usuário e retorna o perfil após 1 segundo).  
//pegarPosts (recebe o perfil e retorna os posts após 1 segundo). 

function pegarUsuario(callback) {
    setTimeout(() => {
        const usuarioId = 123;
        callback(null, usuarioId);
    }, 1000);
}

function pegarPerfil(usuarioId, callback) {
    setTimeout(() => {
        const perfil = { id: usuarioId, nome: "Alice" };
        callback(null, perfil);
    }, 1000);
}

function pegarPosts(perfil, callback) {
    setTimeout(() => {
        const posts = ["Post 1", "Post 2", "Post 3"];
        callback(null, posts);
    }, 1000);
}

// Exemplo de uso:
pegarUsuario((erro, usuarioId) => {
    if (erro) return console.log("Erro:", erro);
    pegarPerfil(usuarioId, (erro, perfil) => {
        if (erro) return console.log("Erro:", erro);
        pegarPosts(perfil, (erro, posts) => {
            if (erro) return console.log("Erro:", erro);
            console.log("Posts:", posts);
        });
    });
});
