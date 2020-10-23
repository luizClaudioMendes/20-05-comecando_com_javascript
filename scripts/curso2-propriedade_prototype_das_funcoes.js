//podemos criar uma funcao construtura deste jeito
var Carro = function (nome, placa) {
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'FABRICANTE TESTE';
}

var fox = new Carro('Fox', "aaa-1111");
console.log('fox', fox);

/*fox Carro {
  nome: 'Fox',
  placa: 'aaa-1111',
  fabricante: 'FABRICANTE TESTE'
}
*/

//ou deste Jeito
function Carro2(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'FABRICANTE TESTE';
}

var fusca = new Carro2('Fusca', "aaa-2222");
console.log('fusca', fusca);
/*
fusca Carro2 {
  nome: 'Fusca',
  placa: 'aaa-2222',
  fabricante: 'FABRICANTE TESTE'
}
*/

//agora agente cria outro objeto
var gol = new Carro2('gol', "aaa-3333");
console.log('gol', gol);

//quando agente usa a funcao contrutora, os prototipos 
//dos objetos ficou um pouco diferentes

//usando a palavra chave new
//ao criar os objetos fusca e gol, automaticamente eles
//ficaram com o prototype setado como Carro2

//o objeto Carro2 tem o prototype setado pra object

//mas Carro2 é uma funcao

//existe uma diferença muito grande entre 
//prototype do objeto e a propriedade prototype
//da funcao

// fusca esta herdando de carro2, que é um objeto do tipo function

//vamos confimar
console.log(Object.getPrototypeOf(fusca));//Carro2 {}
console.log(Object.getPrototypeOf(gol));//Carro2 {}
console.log(Object.getPrototypeOf(fusca) === Object.getPrototypeOf(gol));//true

//se eles estao baseados no mesmo prototipo,
//sera que existe alguma forma de eu chegar
//no prototipo carro2 e adicionar a propriedade
//fabricante e retira-la dos objetos fusca e gol?

//sim, deste jeito:
function Carro3(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	//this.fabricante = 'FABRICANTE TESTE';
}

//adicionar a propriedade fabricante no objeto carro3
Carro3.prototype.fabricante = 'Ford';

var fiesta = new Carro3('fiesta', "aaa-4444");
console.log('fiesta', fiesta);
//fiesta Carro3 { nome: 'fiesta', placa: 'aaa-4444' }

var ka = new Carro3('ka', "aaa-5555");
console.log('ka', ka);
//ka Carro3 { nome: 'ka', placa: 'aaa-5555' }

//agora tanto fiesta como ka possuem a propriedade fabricante
//herdada do prototypo carro3

console.log('fabricante do fiesta', fiesta.fabricante);
console.log('fabricante do ka', ka.fabricante);
//fabricante do fiesta Ford
//fabricante do ka Ford

//resumindo
//os objetos fiesta e ka tem como prototype
// o objeto function Carro3.prototype
// ou seja, nao é a funcao que é o prototipo dos objetos
// e sim a propriedade prototype do objeto function, que é um objeto vazio[]
// entao Carro3.prototype.fabricante = 'Ford';
//fez com que o objeto prototype que antes estava vazio
//agora tenha a propriedade fabricante


/*
pergunta:
Então deixa eu ver se entendi...

Toda function possui um prototype né isso?
Neste caso o prototype dos objetos gol e fox aponta para 
a function Carro, ok? e a function Carro até um certo 
momento o prototype dessa function estava apontando para 
o Object.prototype, ok? Depois que você fez 
isso -> Carro.prototype.fabricante = 'VW' , 
Acabou fazendo com que o prototype do Carro 
apontasse agora para um objeto desse 
tipo -> {fabricante: 'VW} , ok? Dessa forma os objetos 
fox e gol acabaram obtendo a propriedade fabricante, 
que é herdada pelo Carro e é passa para os objetos, 
é isso?

resposta:
Primeiramente o objeto Carro tem como 
prototype um objeto vazio {}, que é o padrão que vem 
do Object.prototype. Depois ele é alterado para um 
objeto com um parâmetro definido {fabricante: 'VW}.
*/

//ou seja, ate ao momento em que fizemos
//Carro3.prototype.fabricante = 'Ford';
//o prototype de Carro3 era um objeto vazio {}

//_______________________
// mas tambem podemos adicionar ao objeto prototype funcoes:

Carro3.prototype.ligar = function () {
	console.log('ligando o carro');
}

//e podemos chamar essa function normalmente agora
fiesta.ligar();//ligando o carro

