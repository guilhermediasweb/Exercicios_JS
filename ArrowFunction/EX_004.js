//Manipular uma lista de strings para extrair palavras que comecem com uma letra em especifico. Usar Arrow Function dentro de filter e map para criar uma nova lista contendo palavras que comecem com a letra 'a'.

const palavras = ["Ação", "Aventura", "Diversão", "adorar", "moto", "Abate" ]
const palavraComA = palavras.filter(palavra => palavra.toLowerCase().startsWith('a')).map(palavra => palavra.toLowerCase())
console.log(palavraComA)