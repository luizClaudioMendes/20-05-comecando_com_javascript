// como exemplo, queremos criar um contador

function incrementar() {
	var valor = 0;

	return ++valor;
}

console.log(incrementar());//1
console.log(incrementar());//1
console.log(incrementar());//1


//desta forma sempre retorna 1, o que nao serve para o contador

//entao podemos transformar a variavel em uma variavel global

var valor1 = 0;

function incrementar1() {
	
	return ++valor1;
}

console.log(incrementar1());//1
console.log(incrementar1());//2
console.log(incrementar1());//3

//funcionou mas nao é o que procuramos, pois qualquer um pode mudar a variavel

//qual a solucao? 

//usar o conceito closure

//no retorno da funcao devemos retornar outra funcao



function incrementar2() {
	var valor2 = 0;//variavel local protegida
	return function() {
		return ++valor2;
	}
}

var fn = incrementar2();//necessario para executar pela primeira vez
//pode ser substituida pela funcao autoexecutada

console.log(fn());//1
console.log(fn());//2
console.log(fn());//3
