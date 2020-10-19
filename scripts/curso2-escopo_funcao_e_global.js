//toda variavel declarada fora de uma funcao é global

var nome = 'Algaworks';// variavel global

var capitalizar = function () {
	var nome = 'Algaworks'.toUpperCase();//variavel local
}

var capitalizar2 = function () {
	nome = 'Algaworks'.toUpperCase();//variavel global
}

capitalizar();
console.log('nome global:', nome);

capitalizar2();
console.log('nome global:', nome);


// tente ao maximo nao declarar variaveis em escopo global