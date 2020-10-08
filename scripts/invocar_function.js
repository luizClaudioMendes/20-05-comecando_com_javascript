/*
existem 3 maneiras de se chamar uma funcao

-normal
-call
-apply

*/
function dizerOla(argumento) {
	console.log("TESTANDO " + argumento);
}


//normal
dizerOla("normal");

//call
// dizerOla.call(objeto do escopo, argumentos da funcao)

//{}  = objeto vazio
dizerOla.call({}, "call");


//apply
//dizerOla.apply(objeto do escopo, [argumentos da function]);


dizerOla.apply({}, ["apply"]);



//OBS: se o escopo passado for 'this' é o objeto global do script.
//pode tambem ser passado null.