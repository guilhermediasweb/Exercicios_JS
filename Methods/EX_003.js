function somarprecos(produtos) {
    return produtos.filter(produto => produto.nome.startsWith('A'))
    .reduce((total, produto) => total + produto.preco, 0);
}

const produtos = [
    { nome: "Arroz", preco: 5},
    { nome: "Feijão", preco: 7},
    { nome: "Açucar", preco: 3},
    { nome: "Abacate", preco: 4}
]

console.log(somarprecos(produtos))