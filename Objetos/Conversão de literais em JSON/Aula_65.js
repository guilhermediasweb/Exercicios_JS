const pessoa = {
    nome:"Guilherme",
    canal:"Subsonic TV",
    curso:"JavaScript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicionais"
    }
}



const string_pessoa=`{"nome":"Guilherme","canal":"Subsonic TV","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicionais"}}`//String retirada do console.logo

const s_json_pessoa=JSON.stringify(pessoa)//conversão de objeto para string
const o_json_pessoa=JSON.parse(string_pessoa)//conversão de string para objeto

console.log(pessoa)
console.log(s_json_pessoa)//impressão do Stringify
console.log(o_json_pessoa)//impressão do Parse






