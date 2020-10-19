var joao = {
	nome: 'Joao',
	idade: 25,
	email: ''
};

var maria = {
	nome: 'Maria',
	idade: 27,
	email: ''
};

//compara os dois objeto

//no javascript nao existe o equals igual ao java

//a comparacao direta nao ira funcionar pois sempre
//retornara falso pois sao dois objetos diferentes

console.log('os objetos sao iguais diretamente? ', joao === maria);

//entao precisamos adicionar uma funcao para comparar
var pedro = {
	nome: 'Pedro',
	idade: 25,
	email: 'pedro@teste.com',
	igualA: function (obj) {
		return this.email === obj.email;
	}
};

var julia = {
	nome: 'Julia',
	idade: 27,
	email: 'julia@teste.com',
	igualA: function (obj) {
		return this.email === obj.email;
	}
};

console.log('Pedro e Julia tem o mesmo email?', pedro.igualA(julia));
console.log('Pedro e Pedro tem o mesmo email?', pedro.igualA(pedro));