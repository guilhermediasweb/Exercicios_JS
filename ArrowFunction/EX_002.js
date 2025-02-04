const produtos = [
    { nome: "Camisa", preço: 15, emEstoque: true},
    { nome: "Calça", preço: 25, emEstoque: false},
    { nome: "Sapato", preço: 50, emEstoque: true},
    { nome: "Meia", preço: 5, emEstoque: true}
]

const total = produtos
.filter(produto => produto.preço > 10 && produto.emEstoque)
.map(produto => produto.preço)
.reduce((acumulador, preço) => acumulador+preço, 0)
console.log(total)