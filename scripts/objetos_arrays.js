//os arrays sao parecidos com objetos mas tem indice numerico

//array em branco
var arrayBranco = [];

//array personagens
var personagens = [
	"ned", "jon", "robb"
];

//para acessar o array basta colocar o nome_do_array[indice]
console.log(personagens[0]);

// o indice sempre começa com 0

//o javascript nao é tipado, logo podemos ter no mesmo array um monte 
//de outros objetos

var objs = ["teste", 1, function() {console.log("teste function")}];

console.log(objs[0]);
console.log(objs[1]);
console.log(objs[2]());

// para o array o numero do indice é muito mais importante
//do que o indice nominal. essa é a diferença do array para
//o objeto

var pers = {nome: "frodo", idade: 500};

console.log(pers["nome"]);
console.log(pers["idade"]);