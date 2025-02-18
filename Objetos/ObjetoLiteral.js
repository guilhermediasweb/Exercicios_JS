const Pessoa = {
    nome:"Bruno",
    getNome:function(){
        return this.nome
    },
    setNome:function(nome){
        this.nome=nome
    },
}
const p2=Pessoa
const p3=Pessoa

p3.nome="José"
p2["nome"]="Antônio"
Pessoa.setNome("Patrício")
console.log(Pessoa.nome)
console.log(p2.getNome())