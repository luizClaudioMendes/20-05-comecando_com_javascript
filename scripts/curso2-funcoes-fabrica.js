//nos exemplos que temos trabalhado, temos criado os
// objetos manualmente
var fox = {
	nome: 'fox',
	placa: 'aaa-1111',
	fabricante: 'vw'
}

console.log('fox', fox);
//fox { nome: 'fox', placa: 'aaa-1111', fabricante: 'vw' }

//ok
//e se precisamos de outro objeto criamos novamente
var gol = {
	nome: 'gol',
	plac: 'aaa-2222', //digitado errado intencionalmente
	fabricante: 'vw'
}

console.log('gol', gol);
//gol { nome: 'gol', plac: 'aaa-2222', fabricante: 'vw' }

// em um sistema, fazer assim nao é legal.
// repare que no objeto gol a propriedade 
// placa ficou mal escrita e isso acarretara
// em um erro, quando formos acessar a propriedade
console.log('placa do gol:', gol.placa );
//placa do gol: undefined

//entao devemos criar uma funcao fabrica para evitar
//que isso ocorra

function criarCarro(nome, placa) {
	return {
		nome: nome,
		placa: placa,
		fabricante: 'FABRICANTE TESTE'
	}
};

var fiesta = criarCarro('Fiesta', "aaa-3333");
console.log('fiesta', fiesta);
//fiesta { nome: 'Fiesta', placa: 'aaa-3333', fabricante: 'FABRICANTE TESTE' }

var ferrari = criarCarro('Ferrari', 'aaa-4444');
console.log('ferrari', ferrari);
//ferrari { nome: 'Ferrari', placa: 'aaa-4444', fabricante: 'FABRICANTE TESTE' }

//desta forma garantimos que nunca iremos ter objetos com propriedades com nomes 
// errados