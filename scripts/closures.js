//closures

//closures sao controles de acesso as variaveis da funcao

//ex:1

function teste1() {
	var a = 1; //variavel local
	console.log(a);
}

teste1(); //ate aqui funciona corrtamente

//console.log(a); // aqui vai dar erro. o acesso a variavel local
//por elementos globais ocorre erro.

//ex:2

var b = 2; //variavel global

function teste2 ()  {
	var c = 1;
	console.log(b); //acesso a variavel global de dentro da function OK
}

teste2();
console.log(b); //nao ocorre erro pois a variavel é global


//ex:3

var contador = 0; //variavel global
function tick1() {
	contador ++;
	console.log(contador);
}

tick1();//a cada chamada ele ira incrementar o contador
tick1();//a cada chamada ele ira incrementar o contador
tick1();//a cada chamada ele ira incrementar o contador

//so que a variavel pode ser alterada no escopo global
contador = 10;
tick1();
tick1();
tick1();

//essa alteracao estragou o contador!
//o certo é somente a function tick acessar o contador.

//ex:4 entao a solucao é colocar a variavel dentro da function?


function tick2() {
	var contador2 = 100; //variavel global
	contador2 ++;
	console.log(contador2);
}

tick2();// OK
tick2();// ops! a variavel ficou na mesma
tick2();// realmente parou de contar, repetindo sempre 101

//ex:5 a solucao
/* o closures entram aqui.

os closures sao uma funcao que tem acesso ao escopo pai mesmo
depois desse escopo ter sido destruido*/

var tickCorreto = (function () {
	var contadorCorreto = 200;

	return function() {
		contadorCorreto ++;
		console.log(contadorCorreto);
	}
})();

tickCorreto(); //OK
tickCorreto(); //INCREMENTOU
tickCorreto(); //INCREMENTOU DE NOVO

//isto faz com que agente tenha acesso ao contador, mas somente 
//pela function correta, nao podendo ser acessada por codigo global.