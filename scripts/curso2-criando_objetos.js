
//primeira forma de criar objeto
var fox = {cor: 'prata', modelo: 'Fox', fabricante: 'VW'};

console.log('fox', fox);
console.log(typeof fox);

// acessar as propriedades do objeto
console.log('cor do fox:', fox.cor);

//alterando as propriedades do objeto
fox.cor = 'Branco';
console.log('Fox depois de pintado', fox);

//outra forma de acessar as propriedades
console.log('Modelo:', fox['modelo']);


//adicionar outra propriedade em um objeto ja criado
fox.peso = 1100;

console.log(fox);

// ler uma propriedade que nao existe
console.log(fox.potencia);//undefined


//definir uma funcao dentro do objeto
fox.ligar = function () {
	console.log('ligando o carro');
};

console.log(fox);

fox.ligar();

//criar um objeto  ja colocando uma funcao nele

var celta = {
	cor: 'branco',
	modelo: 'Celta',
	fabricante: 'GM',
	ligar: function() {
		console.log('ligando o carro');
	}
};

console.log('celta', celta);