/*var fox = {
	nome: 'fox',
	placa: 'aaa1111',
	fabricante: 'vw'
}

var gol = {
	nome: 'gol',
	placa: 'aaa2222',
	fabricante: 'vw'
}

console.log(fox);
console.log(gol);
*/
//estes objeto apontam para um objeto comum a eles, a object.prototype

//tem como recuperar esses objetos?
//console.log(Object.getPrototypeOf(fox));
//console.log(Object.getPrototypeOf(gol));

//repare que no nosso exemplo a propriedade fabricante
//é a mesma. entao podemos criar um outro objeto para receber isso
var volks = {
	fabricante:'vw'
}

var fox = {
	nome: 'fox',
	placa: 'aaa1111'
}

var gol = {
	nome: 'gol',
	placa: 'aaa2222'
}

console.log(Object.getPrototypeOf(fox));
console.log(Object.getPrototypeOf(gol));

//neste momento nada mudou. todos os tres objetos 
//estao apontando pro prototipo do object

//entao agente deve trocar o prototype de gol e fox para
//para o prototype volks

console.log(fox.fabricante);//undefined
console.log(gol.fabricante);//undefined

//entao agora vamos trocar essa propriedade
Object.setPrototypeOf(fox, volks);
//Object.setPrototypeOf(gol, volks);

console.log(fox.fabricante);//vw
console.log(gol.fabricante);//undefined

//mas existe outra forma de se fazer isso ao criar o objeto
var fusca = Object.create(volks);
fusca.nome = 'fusca';
fusca.placa = 'aaa3333';

console.log(fusca.nome);//fusca
console.log(fusca.fabricante);//vw

// outra forma de fazer isso é definir a propriedade
// ao criar o objeto

var jetta = {
	nome: 'jetta',
	placa: 'aaa4444',
	__proto__: volks
}

console.log(jetta.nome);//jetta
console.log(jetta.fabricante);//vw

//mas esta ultima nao é tao recomendada por causa dos browsers
//embora hoje em dia a maioria ja aceita o __proto__

console.log('tostring do jetta:', jetta);
//tostring do jetta: { nome: 'jetta', placa: 'aaa4444' }
//no tostring nao é exibida as propriedades herdadas, somente as do objeto
//mesmo que ele tenha a propriedade la como no exemplo o fabricante
