let nome=new String("Guilherme Dias Machado")

console.log(nome.startsWith("g"))//Retorna oq inicia a string, em true ou false.
console.log(nome.endsWith("o"))//Retorna oq termina a string, em true ou false

console.log(nome.includes("Di"))

console.log(nome.repeat(2))//Repete a string o numero de vezes que quiser

console.log(nome.charCodeAt(0))
console.log(String.fromCodePoint(71))//retorna o caractere da tabela unicode

let nome_ts="Guilherme"
console.log(`Nome: ${nome_ts}`)//Template String também entra nessa categoria de novos métodos para manipular strings.