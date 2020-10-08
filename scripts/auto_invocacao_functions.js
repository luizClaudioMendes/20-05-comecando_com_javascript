/*
AUTO INVOCACAO DE FUNCTIONS.

é uma maneira de fazer escopo dentro do javascript.

para isso usamos uma funcao anonima e na hora que ele for executada
ela ira separar o escopo

*/

//ex:1
/* a declaracao da function entre parentesis () da a oportunidade de 
já executa-la.
*/
(function() {
	console.log("executando a function");
});

/*
somente isso não faz nada.
*/


//para executa-la é preciso abrir e fechar parentesis no final ().
//isto ira invoca-la imediatamente

(function() {
	console.log("executando a function 2");
}) ();

/*
isto permite que seja criado um escopo dentro da function,
isolado do exterior.
*/

var a = "variavel externa";
console.log(a);

(function() {
	var a = "variavel interna"; //variavel isolada
	console.log(a);
}) ();


console.log(a);
