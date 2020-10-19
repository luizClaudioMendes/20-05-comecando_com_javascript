//existem duas formas de se criar funcoes

//function declaration
function somar(a, b) {
	return a + b;
}

//function expression
var subtrair = function (a,b) {
	return a - b;
}

// no javascript o hoisting atua tambem nas funcoes
// na function declaration a funcao é toda levada para cima
// na function expression a variavel é levada para cima
// a funcao é declarada no momento em que o codigo passa pela linha
// entao nao se deve utilizar a function antes da linha em que se 
//declara a function sob o risco de nao funcionar.

// uma boa pratica é declarar no topo do arquivo js, de forma a mitigar 
//  a possibilidade de se tentar usar uma funcao sem ela ter sido declarada

console.log('somar: ',somar(10, 5));
console.log('subtrair: ', subtrair(10, 5));

// nas funcoes nao é obrigatorio ter o return.
// mas todas as funcoes retornam algo.
//se nao for mencionado o retorno a funcao retornara
// undefined

//dentro de todas as funcoes existe um parametro implicito chamada arguments
function verArguments(a,b) {
	console.log('arguments -> ',arguments );
	return a * b;
}

console.log('chamado arguments ', verArguments(1,2));

//esse argument é um objeto do javascript. nele vem chaves e valores
// { '0': 1, '1': 2 } na posicao 0 foi passado o valor 1 e assim por diante
//ele exibe os argumentos de chamada passado para a function

//no javascript, uma funcao tambem é um tipo de dado
console.log(typeof subtrair);//function

