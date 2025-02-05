//Calcular a soma dos preços de array de objetos, mas apenas para os itens em promoção. Array será usado para cada objeto em especifico, no qual representa um produto com propriedades nome, preço e emPromo. Usar Arrow Function para somar os preços apenas de produtos que estão em promoção.

const produtos = [
    {nome: "Livro", preço: 29.99, emPromocao: true},
    {nome: "Caneta", preço: 0.99, emPromocao: false},
    {nome: "PC", preço: 2000.00, emPromocao: true},
    {nome: "Mouse", preço: 24.99, emPromocao: false},
    {nome: "Mousepad", preço: 49.99, emPromocao: true}
]

const somaPromocao = produtos
.filter(produto => produto.emPromocao)
.reduce((soma, produto) => soma + produto.preço, 0)

console.log(somaPromocao)