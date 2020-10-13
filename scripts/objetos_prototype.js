// o javascript nao tem todos os conceitos de POO implementados

//o prototype é tipo uma classe

//os prototypes tem construtores e sao declarados por functions:
function objetos_prototype(parametro1, parametron) {
	this.parametro1 = parametro1;
	this.parametron = parametron;
	this.apresentar = function () {
		console.log("TESTE DE PROTOTYPE " + this.parametro1 + ' ' + this.parametron);
	}
}

var obj1 = new objetos_prototype("teste", 16);
var obj2 = new objetos_prototype("teste2", 30);

console.log(obj1);
console.log(obj2);

obj1.apresentar();
obj2.apresentar();

// adicionar propriedades ao objeto nao adiciona propriedades no
//prototype

obj1.darTchau = function() {
	console.log("tchau");
};

//esta propriedade foi adicionada somente ao obj1
obj1.darTchau();

//se tentarmos usar no obj2 nao ira funcionar
//obj2.darTchau();

//TypeError: obj2.darTchau is not a function

// para alterar objetos js em tempo de execucao temos que 
//alterar o prototype

// como exemplo vamos usar a classe String
String.prototype.apagar = function () {
	return "APAGADO";
}

console.log("TESTE 1".apagar());
console.log("TESTE 2".apagar());
