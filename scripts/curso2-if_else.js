var pessoa = 'FISICA';

if(pessoa === 'FISICA') {
	//define mascara de CPF
	console.log('selecionado pessoa fisica');
} else if(pessoa === 'JURIDICA') {
	//define mascara de CNPJ
	console.log('selecionado pessoa juridica');
} else {
	console.log('tipo de pessoa invalido');
}

//estrutura de controle if else 2.0
var valor = 0;

if(valor === 0) {
	console.log('valor deve ser maior que zero');
}

//com o js nao precisamos comparar com zero
// o zero é sempre false
// entao podemos fazer assim 

if(!valor) {
	console.log('valor deve ser maior que zero');
}

//qualquer outro numero nao será falso

valor = 2;

//nao vai entrar
if(!valor) {
	console.log('valor deve ser maior que zero');
}

var idade = 10;
if(idade) {
	console.log('daqui a 5 anos voce tera ', + idade + 5);
}


