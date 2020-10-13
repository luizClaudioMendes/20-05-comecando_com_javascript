//definicao de objetos
//quase tudo no javascript sao objetos dentro do js

//objetos sao variaveis que contem variaveis dentro dela

//como declarar um objeto
var obj = {};

//so nisso ja temos um objeto criado.

//dentro do objeto podemos guardar valores nas propriedades
var obj = {
	nome: "Jon",
	sobrenome: "Snow",
	idade: 16
};

// as variaveis que ficam dentro dos objetos sao chamadas de
//propriedades

console.log(obj);


//como acessar os valores dentro da propriedade?
console.log(obj.nome);
console.log(obj.idade);

// dentro de uma propriedade podemos colocar funcoes

//funcao anonima
var obj = {
	nome: "Jon",
	sobrenome: "Snow",
	idade: 16,
	apresentar: function() {
		console.log("Olá eu sou o " + this.nome + ' ' + this.sobrenome);
	}
};

console.log(obj.apresentar());

// funcao nomeada

var obj = {
	nome: "Jon",
	sobrenome: "Snow",
	idade: 16,
	apresentar: apresentacao
};

function apresentacao () {
	console.log("Olá eu sou o " + this.nome + ' ' + this.sobrenome);
}

console.log(obj.apresentar());


