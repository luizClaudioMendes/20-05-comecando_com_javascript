/**
FUNCOES
sao blocos de codigo que podem ser executados mais de uma vez

existem 3 maneiras de se declarar uma funcao:
- tradicional
- anonima
- por string
*/

//tradicional
function dizerOi (nome) {
	console.log("Oi " + nome);
}

dizerOi("primeiro exemplo");
dizerOi("segundo exemplo");


//anonima
/* armazenar uma funcao dentro de uma variavel*/
var dizerOla = function (nome) {
	console.log("Olá " + nome);
}

dizerOla("terceiro exemplo");


//declaracao por construtor da funcao
//var nomeVariavelFuncao = new Function("nome_do_argumento", ...(n argumentos), "codigo_a_ser-executado_na_funcao"); 
var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);"); 

dizerTchau("quarto exemplo");




//HOISTING
/*o hoisting funciona tambem para as functions

a function tradicional sera executada em qualquer lugar do codigo
pois ela sera levada automaticamente para o topo do script.

a funcao anonima e a do construtor deve ser declarada primeiro
para depois ser chamada, senao nao executara a function.
*/

