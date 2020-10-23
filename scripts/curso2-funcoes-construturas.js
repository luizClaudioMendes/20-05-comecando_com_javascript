//as funcoes construtoras sao pararecidas com os construtures
// dos objetos do java

//por convencao, o nome da variavel começa com 
//letra maiuscula

var Carro = function(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'FABRICANTE TESTE';
}

//pronto. temos uma funcao contrutora de carros

//para usar esta funcao temos alguns detalhes,
// e nesses detalhes é que estao as semelhanças 
//com os objetos do java

var fox = new Carro('fox', 'aaa-1111');
console.log('fox', fox);

/*
fox Carro {
  nome: 'fox',
  placa: 'aaa-1111',
  fabricante: 'FABRICANTE TESTE'
}
*/

var fusca = new Carro('fusca', 'aaa-2222');
console.log('fusca', fusca);
/*
fusca Carro {
  nome: 'fusca',
  placa: 'aaa-2222',
  fabricante: 'FABRICANTE TESTE'
}
*/

//o uso da palavra new cria um novo objeto
// no construtor, o this referencia o objeto 
// criado no new
// no fim do construtor é retornado o objeto criado


// este jeito de criar objetos tem a mesma funcionalidade 
// que a funcao fabrica ou que criar o objeto diretamente

// a escolha depende da preferencia de cada um