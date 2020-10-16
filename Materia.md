# começando com Javascript e explorando a linguagem javascript
## começando com Javascript
### iniciado em 05/10/2020
### terminado em 15/10/2020

## explorando a linguagem javascript
### iniciado em 15/10/2020
### terminado em EXECUCAO


## começando com Javascript

### Aula 1.1 Introducao ao Javascript
o javascript é uma linguagem de programaçao interpretada, que significa que o codigo passa por um interpretador para depois seguir para a maquina para executar suas funcionalidades.

o javascript é baseado no padrao ECMAScript.

### Aula 1.2 introdução ao workshop
objetivo: introduçao generica sobre javascript

- conceitos basicos
- funçoes
- objetos
- metodos uteis

### Aula 1.3 preparando o ambiente
requisitos:

- nodejs.org
(para verificar se o nodejs ficou instalado corretamente, abra o cmd e digite: node -v)

- sublime

- para rodar o js no sublime precisamos salvar o arquivo como .js.

- configurar o sublime para ele compilar o js. para isso:
-- tools > build system > new build system
--- retirar o que existir por lá e colocar:
{
	"cmd":["node", "$file"],
	"selector": "source.js"
}

isso esta dizendo que o node que ira fazer a compilacao do codigo.

--- salvar como javascript.sublime-build

- para executar um arquivo js no sublime basta salvar e ir em tools > build

### Aula 2.1 sintaxe basica
no javascript todas as statements terminam em ;

ex. var x = 15;

podemos colocar duas statements seguidas:

ex. var x = 15; var y = 10;

tipos de valores que existem no js:
- literais 
- variaveis

os literais sao os que sao fixos e os variaveis sao mudados de acordo com a necessidade.

ex.
literais:
10;
10.5;
"Ola mundo"
'ola mundo'

no js as strings podem usar aspas duplas ou simples

variaveis:
usamos a palavra chave var

ex:
var x;

operadores no js
operadores sao sinais que agregam açoes aos valores

ex.
= atribui o valor à variavel

operadores aritimeticos
+ soma
- subtraçao
* multiplicacao
/ divisao

quando juntamos operadores e valores temos expressoes.

expressoes podem ter valores literais como variaveis

y + 10;

20 *  30;

x * y;

comentarios 
os comentarios no js sao as // ou /**/ para blocos


identificadores
sao os nomes possiveis para uma variavel no js

os identificadores no js sao camelCase

ex:
sintaxeBasica

nao devemos usar acentos nos identificadores

todos os identificadores no js devem começar com letras, underscore(_) ou com dollar ($)

var $1;
var _1;
var ola;
var olaMundo;



### Aula 2.2 tipos de dados
- numeros
10; 
10.5;

- strings
"ola";
'Ola';

no js os diferentes tipos de numeros como int, float, etc sao tratados todos como somente numeros;

- booleanos
true;
false;

- arrays
sao containers de dados
[];
[10, "oi", true];

- objetos
{};
{
	nome: 'luiz',
	sobrenome: 'das neves'
};

as propriedades do objeto podem estar na mesma linha ou cada um em uma linha

- tipagem dinamica
o js armazena seus valores em tipagem dinamica, ou seja, podemos declarar uma variavel e dar um numero para ela e logo depois designar um valor de string que irá funcionar.

- outros valores

undefined;
ex:
var z;

null;
ex.
var pessoa = null;


### Aula 2.3 condicionais
- == significa a pergunta, ex x == 5 é a pergunta x é igual a 5?

- a sintaxe basica do if é 
if(bool) {codigo a ser executado}

if(x == 5){
	
}


- a sintaxe basica do else é
if(bool) {codigo a ser executado caso verdadeiro} else {codigo a ser executado caso falso}

if(X >= 5) {
	codigo
}else {
	codigo
}

- a sintaxe do else if é

if(bool) {codigo a ser executado caso verdadeiro} else if(outra condicao bool) {codigo a ser executado caso verdadeiro} else {codigo a ser executado caso falso}

if(x > 0) {
	codigo
}else if(x > -10) {
	codigo
}else {
	codigo
}


- a sintaxe do switch é
switch (x) {
	case 1: codigo
	break;
	case 2: codigo
	break;
	default: codigo
	...
}



x = 18;

switch (x) {
	case 18:
		console.log('teste');
		break;
}

### Aula 2.4 loops
// while

while (expressao) {
	codigo a ser executado se a expressao for verdadeira
}

// do while
do {
	codigo a ser executado
} while (expressao)

//for
for (var y = 0; y < 10; y++) {
	codigo a ser executado
}

// for in
var obj = {
	nome: 'Jon',
	sobrenome: 'Snow'
};

for (var prop in obj) {
	console.log(prop); /// prop é a chave
	console.log(obj[prop]); // imprimira o valor
}

### Aula 2.5 hoisting
hoisting siginifica que o javascript sempre passa todas as declaraçoes de variaveis e funçoes para o topo do script.

se colocarmos em um arquivo:

x = 5;

var x;

isto ira funcionar pois o hoisting convertera desta forma:
var x;
x = 5;

isso ocorre tanto para variaveis quanto para funcoes.

mas se designarmos um valor, a designacao nao é levada para o topo:

console.log(x);
x = 5;
console.log(x);
var x = 10;
console.log(x);

ira imprimir:
undefined;
5
10


### Aula 3.1 declaracao

funçoes sao blocos de codigo que podem ser utilizados mais de uma vez.

function nomeDaFuncao (argumentos) {
	codigo a ser executado;
}

para chamar a funcao:
nomeDaFuncao(argumentos);

outra maneira de fazer uma funçao é usando uma expressao de funçao. para isso armazenamos a funcao dentro de uma variavel. para isso usamos uma funçao anonima

var nomeDaVariavelDaFuncao = function (argumentos) {
	codigo a ser executado;
}

nomeDaVariavelDaFuncao(argumentos);

existe uma 3 maneira de declarar uma funcao, com o construtor da funcao.

var nomeFuncao = new Function("argumento", "codigo a ser executado (em formato de String);");

nomeFuncao(argumentos);

#### hoisting com funçoes

o hoisting tambem é aplicado as funcoes.

se usarmos a primeira forma, o hoisting leva tudo para o topo do script.

se usarmos a 2 ou terceira forma, o hoisting é feito com a variavel. logo se tentarmos chamar a funcao antes de declara-la nao ira funcionar pois somente a variavel foi levada para cima.


### Aula 3.2 invocaçao

invocacao de funcoes.

function dizerOi(nome) {
	console.log(nome);
}

maneira tradicional:
dizerOi("Arya");

metodo call:
dizerOi.call({}, "Robb");

o metodo call permite algumas outras possibilidades,
como por exemplo, passar um objeto que sera o escopo da funcao.

metodo apply:
dizerOi.apply({}, ["brant"]);

se em vez de passarmos um objeto vazio {}, passarmos null
ele interpretara e tera como escopo o objeto global

### Aula 3.3 auto invocacao

podemos fazer uma funcao ser executada ao ser criada.
isso se chama funcao auto invocada
para isso vamos utilizar uma funcao anonima e no mesmo momento que a declararmos ela sera executada.

(function () {
	console.log('Ola');
})

somente isso nao faz ela ser executada.

mas se colocarmos parentesis ela sera invocada automaticamente:

(function () {
	console.log('Ola');
})();

### Aula 3.4 closures
se criarmos uma variavel var no arquivo js, essa variavel terá escopo global dentro do arquivo.

se criarmos uma variavel var dentro de uma funçao essa variavel terá o escopo da funcao e logo apos a sua execuçao, esta sera destruida.

os closures sao funcoes que acessao o escopo da funcao pai mesmo depois de ele ter sido destruido.

entao, como usar?

exemplo: queremos implementar um contador. se criarmos no arquivo js, qualquer funcao pode altera-lo. se criarmos dentro de uma funcao ele reseta sempre que a funcao é executada.

entao neste exemplo, precisamos utilizar uma closure.

ex:

//declaramos o contador dentro de uma funcao autoexecutada
var tick = (function () {
	var contador = 0;

	return function() {
		contador = contador + 1;
	}
})(); 


desta forma, ao chamarmos tick(), o contador sera sempre incrementado e a variavel contador nao podera ser alterada por ninguem exeto o tick()


### Aula 4.1 objetos -- definicao
os objetos sao tudo no javascript.
ele trata quase tudo como objeto, booleanos, dados primitivos, arrays, funcoes, expressoes regulares, etc.

mas o que sao objetos?
objetos sao variaveis que possuem variaveis dentro dela.

como declarar um objeto?
o metodo mais facil e simples é usar {}

ex:
var obj = {
	
};

dentro do objeto podemos ter propriedades:
ex:
var obj = {
	nome: "Jon",
	sobrenome: "snow",
	idade: 16
};

as propriedades sao as variaveis contidas dentro do objeto.

como acessar os valores dentro dos objetos?

basta colocar o nome_do_objeto.nome_propriedade

ex:
obj.nome

tambem podemos colocar funcoes nas propriedades do objeto

ex com funcao anonima:
var obj = {
	nome: "Jon",
	sobrenome: "snow",
	idade: 16,
	apresentar: function(){
		console.log("Ola eu sou " + this.nome);
	}
};

para acessar a variavel com funcao, basta usar:

obj.apresentar();

ex com funcao nominada:
var obj = {
	nome: "Jon",
	sobrenome: "snow",
	idade: 16,
	apresentar: apresentacao
};

function apresentacao () {
	console.log("Ola eu sou " + this.nome);
}

### Aula 4.2 objetos -- prototype
o que é o prototype?
o js nao tem a orientacao a objeto plenamente implementada, somente alguns conceitos.

o prototype tem o conceito parecido com uma classe.

todo objeto tem um prototype.

nos criamos um prototype atravez de uma funcao, que é como se fosse o construtur da classe.

entao imaginemos um arquivo js chamado Personagem.js
nele colocariamos a funcao:

ex:
function Personagem(nome, idade, corDoCabelo) {
	this.nome = nome;
	this.idade = idade;
	this.corDoCabelo = corDoCabelo;
	this.especie = "Humano";
	this.apresentar = function () {
		console.log("Olá");
	}
}


para criar este objeto basta usar a keyeword new

ex:

var ned = new Personagem("ned", 40, "Preto");
var sansa = new Personagem("sansa", 18, "Cobre");


ned.apresentar();
sansa.apresentar();

desta forma criamos um prototype.

agora, depois disso se adicionarmos uma propriedade ao objeto, nao significa que adicionamos ao prototype.

ex:
ned.darTchau = function() {
	console.log("tchau");
}

o darTchau foi adicionao ao ned. se tentarmos usar isso na sansa, nao ira funcionar.

agora se adicionarmos ao prototype funciona.

ex:

Personagem.prototype.darTchau = function () {
	console.log("tchau");
}

agora tanto para o ned quanto para a sansa é possivel utilizar a funcao darTchau().


em todos os objetos do javascript é possivel adicionar novas functions.

ex:

var teste = "teste";

teste é uma String.

entao podemos adicionar uma nova function no prototype String.

ex:
String.prototype.apagar = function () {
	return "";
}

console.log("teste".apagar());

isso é alterar a classe em tempo de execuçao.

### Aula 4.3 objetos -- arrays
os objetos de js sao variaveis que guardam variaveis.

var obj - {
	foo: "foo",
	bar: "bar"
}


os arrays sao bem parecidos, mas em vez de ter nomes nos indices, eles tem valores numericos.

para declarar um array basta usar []

var arrayEmBranco = [];

var personagens = ["ned", "robb", "jon"];

para acessar o array, basta colocar a posicao do array

ex:
personagens[0];

o array sempre começa com 0;

o array no javascript nao é tipado, logo pode colocar qualquer tipo de dados misturados.

ex:
var objs = ["ned", 2, function() {}, []];

se por exemplo quisermos ter uma especie de tabela

ex:
var personagens = [
	["ned", 40],
	["jon", 16],
	["sansa", 18]
]

desta forma podemos armazenar dados desde que nao nos interesse o nome do indice.

um objeto pode ser acessado pelo nome do indice

ex:

var pers1 = {
	nome: "ned",
	idade: 40
};

para acessar basta colocar

console.log(pers1["nome"]);
console.log(pers1["idade"]);

no array somente com o index

console.log(personagens[1]);

### Aula 4.4 objetos -- Date
o js disponibiliza o objeto Date para manipular datas.

a utilizacao basica dele é:

ex:
var d = new Date();

isso vai fazer ele colocar a data e hora atual no objeto, no fuso horario do browser.

mas tambem existem outros formatos.

ex:

var d = new Date("07/01/2016");

isso faz ele criar um objeto com a data passada em parametro com o horario de meia noite no fuso horario do browser

isso vale tambem para as horas

ex:
var d = new Date("07/01/2016 05:00:30");

isso faz ele criar o objeto com a data e o horario passado em parametro no fuso horario do browser

ele tambem aceita o formato ano/mes/dia
var d = new Date("2016-01-01");

esse dia é o dia passado em parametro no horario de meia noite do meridiano de greenwich (GMT).

nisso, se voce imprimir o horario ele convertera para o fuso horario do browser.

CUIDADO com essa utilizacao.
nesse caso ele imprimiu o dia 31/12/2015 às 22:00 na conversao para o fuso horario do browser.

outra forma de se criar o objeto date é passando o tempo UNIX

var d = new Date(1467827595397);


### Aula 5.1 funcoes uteis -- manipulando strings
var s = "the winter is coming";
console.log(s);

//quantos caracteres tem na string?
console.log(s.length);

//em qual posicao a palavra coming esta?
console.log(s.indexOf("coming"));

//OBS: somente mostra a primeira vez que a palavra aparece. ignora outras aparicoes da mesma palavra

//em qual posicao a ultima aparicao da palavra esta?
console.log(s.lastIndexOf("coming"));

//var s = "the winter is coming";
//posicoes 12345678901234567890


//pegar um pedaço da string (ex a palavra winter)
console.log(s.slice(4,10));

//var s = "the winter is coming. it´s really coming!";
//posicoes 12345678901234567890123456789012345678901

//agora de inicio de winter ate o inicio de comming
//mas para nao ficar contando as posiçoes desde o inicio agente pode contar as posicoes a partir do final e colocar um numero negativo

//var s = "the winter is coming. it´s really coming!";
//posicoes 12345678901234567890123456789012345678901
//inv pos  10987654321098765432109876543210987654321

console.log(s.slice(4,-8));

//usando a substr que usa a primeira posicao e no segundo parametro a qtd de caracteres agente quer

console.log(s.substr(4, 6)); //para obter a palavra winter

//para altera um caractere ou palavra
console.log(s.replace("winter", "summer");

//upercase
console.log(s.toUpperCase());

//lowercase
console.log(s.toLowerCase());

//juntar mais de uma string

console.log(s + " Ahhhh!");

//ou
//metodo concat. a quantidade de parametros é infinita
console.log(s.concat("teste1", "teste2", "testen"));

//converter uma string em array
var pers = "Ned, John, Robb, Sansa";

console.log(pers.split(', '));

### Aula 5.2 funcoes uteis -- manipulando numeros

//o js aceita tanto numeros decimais quanto inteiros, usando o ponto

//inteiros
var n1 = 34;
console.log(n1); 

//decimais
var n2 = 34.76;
console.log(n2); 

//numeros grandes (exponenciais)
var n3 = 456e5;//4600000
console.log(n3); 

var n4 = 123e-6;//0.000123
console.log(n4); 

//a capacidade de armazenamento do js é de 15 digitos
//a partir disso ocorre overflow ou underflow
var n5 = 999999999999999;//15 digitos
console.log(n5); 

var n6 = 9999999999999999;//16 digitos (overflow) 
console.log(n6); //10000000000000000


var n7 = 0.9999999999999999;//16 digitos
console.log(n7); 

var n8 = 0.99999999999999999;//17 digitos (underflow) 
console.log(n8); //1


//decimal
var decimal = 256;
console.log(decimal);//256

//hexadecimal
var hexa = 0x100;
console.log(hexa);//256

var hexa1 = 0xFFF;
console.log(hexa1);//4095

//octadecimal
var octal = 07777;
console.log(octal);//4095

// o toString sempre converte o numero para decimal
//para escolher qual a base:

var convert = 07777;//4095
console.log(convert.toString());//decimal
console.log(convert.toString(16));//hexa
console.log(convert.toString(8));// octal
console.log(convert.toString(2));//binario


//exponencial
console.log(convert.toExponential());//4.095e+3

//quantas casas no exponencial
console.log(convert.toExponential(4)); //4.0950e+3
console.log(convert.toExponential(2)); //4.10e+3 --- arredondado

//exibir um numero especifico de decimais com numeros pequenos
var smallNumber = 0.000000783;
console.log(smallNumber);//7.83e-7

console.log(smallNumber.toFixed(2));//0.00 -- arrendondou para baixo

//exemplo preco da gasolina
var gasolina = 3.357;
console.log(gasolina.toFixed(2));//3.36 -- arredondou para cima

gasolina = 3.324;
console.log(gasolina.toFixed(2));//3.32 -- arredondou para baixo

//o toFixed somente opera nos decimais (casas apos a virgula)

//o toPrecision opera no numero como um todo
console.log(gasolina.toPrecision(2));//3.3
console.log(gasolina.toPrecision(4));//3.324
console.log(gasolina.toPrecision(6));//3.32400
console.log(gasolina.toPrecision(10));//3.324000000

### Aula 5.3 funcoes uteis -- manipulando arrays
//transformar uma string em array
var arrayClubes = "barcelona betis santos sporting benfica".split(' '); //separador com espaço
console.log(arrayClubes);//[ 'barcelona', 'betis', 'santos', 'sporting', 'benfica' ]

//maneiras de transformar array em string
console.log(arrayClubes.toString());//barcelona,betis,santos,sporting,benfica
console.log(arrayClubes.join(' '));//barcelona betis santos sporting benfica
console.log(arrayClubes.join(', '));//barcelona, betis, santos, sporting, benfica
console.log(arrayClubes.join('/'));//barcelona/betis/santos/sporting/benfica
console.log(arrayClubes.join('|'));//barcelona|betis|santos|sporting|benfica


//colocar um novo elemento no array (no final)
arrayClubes.push("Man Utd");
console.log(arrayClubes);//[ 'barcelona', 'betis', 'santos', 'sporting', 'benfica', 'Man Utd' ]

//colocar um novo elemento no array (no inicio)
arrayClubes.unshift("chelsea");
console.log(arrayClubes);

//tirar um elemento do array (no final)
var elemento1 = arrayClubes.pop();
console.log(elemento1);
console.log(arrayClubes);

//tirar um elemento do array (no inicio)
var elemento2 = arrayClubes.shift();
console.log(elemento2);
console.log(arrayClubes);


//alterar um elemento
// array antes da alteracao [ 'barcelona', 'betis', 'santos', 'sporting', 'benfica' ]
arrayClubes[2] = "juventus"; // [ 'barcelona', 'betis', 'juventus', 'sporting', 'benfica' ]
console.log(arrayClubes);

//pegar uma parte do array
//o slice nao altera o array original
//posicoes no slice (index incluso, index nao incluso)
var slice = arrayClubes.slice(3,4);[ 'sporting' ]
console.log(slice);
console.log(arrayClubes);

//o splice altera o array original
// ele permite retirar e inserir elementos nas posicoes do array
//arrayClubes.splice();// splice(posicao inicial inclusa, qtd de items a serem retirados)
arrayClubes.splice(1,2);// retirar 'betis', 'juventus'
console.log(arrayClubes);

// para inserir junto com a retirada // splice(posicao inicial inclusa, qtd de items a serem retirados, N items a serem inseridos nas posicoes retiradas)
var splice = arrayClubes.splice(2,1, "roma", "man city");// retirar 'benfica' e inserir roma man city
console.log(splice);//[ 'benfica' ]
console.log(arrayClubes);//[ 'barcelona', 'sporting', 'roma', 'man city' ]

//juntar 2 arrays ou mais arrays
var arrayClubesBrasileiros = ["santos", "palmeiras", "flamento"];
var arrayClubesInventados = ["Nunca vence FC"];
arrayClubes = arrayClubes.concat(arrayClubesBrasileiros, arrayClubesInventados);
console.log(arrayClubes);


### Aula 6.1 boas praticas
algumas boas praticas para trabalhar com js.

#### evitar colocar variaveis no escopo global, pois na hora que incluir o arquivo no codigo ela vai poder ser acessado em outros arquivos. o ideal é colocar ela dentro de um escopo, que pode ser a funcao autoexecutada.

ex:
(function() {
	var escopoLocal;
})();

#### na hora de declarar variaveis, o hoisting sempre leva elas para o inicio. se ele ja faz isso, é melhor agente colocar as variaveis logo no inicio, de forma a facilitar a leitura do codigo. evita confusao e fica mais claro o codigo.

ex:
(function() {
	var escopoLocal;

	escopoLocal = "foo";
	console.log(escopoLocal);
})();

#### podemos ter varias variaveis a serem declaradas, entao nao precisamos usar a palavra chave var, let ou const repetitivamente. podemos usar somente uma vez a palavra chave e usar virgulas.

ex:
(function() {
	var escopoLocal,
		variavel1,
		variavel2;

	escopoLocal = "foo";
	console.log(escopoLocal);
})();

#### usar sempre string com aspas duplas em vez de aspas simples, pois a maioria das linguagens de programacao usam aspas duplas e no js o JSON, que é o modo de escrever objetos no js, alguns compiladores nao entendem a string com aspas simples.

ex:
(function() {
	var escopoLocal,
		variavel1,
		variavel2,
		obj = {
			foo: "bar"
		};


	escopoLocal = "foo";
	console.log(escopoLocal);
})();


#### declaracao de arrays e objetos. o ideal é que se sao poucas propriedades deve-se deixar em uma linha. se houverem mais propriedades ai sim colocar cada uma em uma linha. cuidados ao quebrar em varias linhas, para se eliminar os espaços em branco no final das propriedades, pois ajuda a reduzir o tamanho do codigo.

ex:
(function() {
	var escopoLocal,
		variavel1,
		variavel2,
		obj = {foo: "bar"},
		obj1 = {
			prop1: 1,
			prop2: 2,
			prop3: 3,
			prop4: 4,
			prop5: 5
		},
		array [1,2,3],
		array2[
			1,
			2,
			3,
			4,
			5
		];


	escopoLocal = "foo";
	console.log(escopoLocal);
})();

#### assuntos. se voce esta mexendo com o mesmo assunto, nao precisa dar espaçamento de uma linha. se o assunto for alterado, deve-se separar com uma linha em branco.

ex:
(function() {

	//mesmo assunto, sem linha em branco
	var escopoLocal,
		variavel1,
		variavel2,
		obj = {foo: "bar"},
		obj1 = {
			prop1: 1,
			prop2: 2,
			prop3: 3,
			prop4: 4,
			prop5: 5
		},
		array [1,2,3],
		array2[
			1,
			2,
			3,
			4,
			5
		];

	//mudou de assunto, linha em branco
	escopoLocal = "foo";
	console.log(escopoLocal);
})();


## explorando a linguagem javascript
o intiuito de colocar as materias seguidas é a reaproveitar a materia que for identica. entao so sera lançado aqui coisas que complementem ou acrescentem a materia que ja foi mencionada acima.

### instalando o node.js no MAC
para instalar o node.js basta ir no site nodejs.org e baixar a versao recomendada.

o node roda a mesma engine usada pelo chrome.

ao baixar o package basta somente instalar como um software normal.

será demonstrado aqui a instalacao pelo homebrew.

acessar brew.sh

para instalar o homebrew basta seguir as instrucoes no site,
mas basicamente basta copiar a linha e executar no cmd.

#### no homebrew -- instalar o nodejs
na linha de comando, 

=> brew info node
da informaçoes sobre os pacotes existentes no brew. 

=> brew install node
instalara a versao mais atual no brew.

mas nao queremos a versao mais atual do brew. queremos a 4.4.4 LTS

entao devemos fazer:

=> brew search node

ai vai aparecer as versoes do node existentes no brew

caso nao apareça a lista:

=> brew tap homebrew/versions

ai vai atualizar a lista de versoes. basta executar o comando => brew search nodes

identificamos na lista a versao que queremos, que neste caso é a 4.4.4 e copiamos da lista a coluna do meio.
ex:
homebrew/versions/node4-lts

na linha de comando executar:

=> brew install homebrew/versions/node4-lts


para testar:
no cmd, digite:
=> node

para entrar no console do node.

pronto. agora podemos usar o javascript no cmd.

para testar digite:

=> console.log('Ola');

sera exibido a palavra ola

para sair do console do node

ctrl + c
ctrl + c

### instalando o node.js no Windows
 a instalacao do node no windows é bem simples.

 no site nodejs.org, basta baixar a versao recomendada, que neste caso é a 4.4.4LTS.

 após baixar, clicar no instalador para abrir.

 como a intençao não é estudar nodejs e sim javascript, basta seguir com a instalacao padrao.

 após a instalacao, no cmd, basta executar os seguintes comandos:

 para exibir a versao
 => node -v

 para entrar no console do node:
 => node

 a partir de agora podemos digitar codigos javascript que serao executados

 ex:

 => console.log('teste');

 para sair do console do node:

ctrl + c
ctrl + c

### Rodando JavaScript no Sublime Text no Mac
- para rodar o js no sublime precisamos salvar o arquivo como .js.

- configurar o sublime para ele compilar o js. para isso:
-- tools > build system > new build system
--- retirar o que existir por lá e colocar:
{
	"cmd":["node", "$file"],
	"selector": "source.js",
	"working_dir": "${project_path:${folder}}",
	"path": "/usr/local/bin"
}

isso esta dizendo que o node que ira fazer a compilacao do codigo.

--- salvar como javascript.sublime-build

- para executar um arquivo js no sublime basta salvar e ir em tools > build

### Rodando JavaScript no Sublime Text no Windows
	=> usar config ### Aula 1.3 preparando o ambiente


### 2.1. Variáveis e hoisting

	=> ver ### Aula 2.1 sintaxe basica
	=> ver ### Aula 2.5 hoisting
	
### 2.2. Tipagem dinâmica

	=> ver ### Aula 2.2 tipos de dados

	var idade = 25;
	console.log(typeof idade); // exibe qual o tipo da variavel idade
	console.log(idade);

	idade += " anos";
	console.log(typeof idade); // exibe qual o tipo da variavel idade
	console.log(idade);

	idade = false;
	console.log(typeof idade); // exibe qual o tipo da variavel idade
	console.log(idade);

### 2.3. Tipo Number

	=> ver ### Aula 5.2 funcoes uteis -- manipulando numeros

	os decimais do javascritp sao de 64 bits, iguais aos 
	doubles primitivos do java.


#### problemas de precisao nos decimais
	
	os decimais no javascript tem o problema de precisao, 
	igual ao primitivo do java tambem.

	entao devemos prestar atençao para a correta maneira de 
	efetuar contas no javascript
	
	var x = 0.3 - 0.2;
	console.log(x);//0.09999999999999998

	para resolver esse problema podemos multiplicar o 
	numero de forma a tira-lo de decimal e ficar como um 
	inteiro. depois dividimos todos os numeros pelo mesmo 
	numero que multiplicamos

	ex: 
	0.3 	podemos multiplicar por 10 para ficar como 3
	0.03 	podemos multiplicar por 100 para ficar como 3
	0.003	podemos multiplicar por 1000 para ficar como 3

	assim a conta 0.3 - 0.2 ficaria:
	
	var x = (0.3 * 10 - 0.2 * 10) / 10;
	console.log(x);//0.1
	
#### problemas de infinito

	um numero dividido por zero resultara em infinito.

	o infinito ainda é do tipo number.

	
	var i = 10 / 0; //Infinity
	console.log(i);

	i = -10 / 0; //-Infinity
	console.log(i);

	
	#### problemas de NaN not a number

	Nan é do tipo number


	i = 10 / 'teste string';//NaN
	console.log(i);

	
	o javascript tenta converter a string para um numero.
	caso a string seja '2', ele conseguira converter para 2.

	para validar se um numero é NaN, existem algumas 
	funcoes para isso.

	ex:
	if(isNaN(i)) {
		....
	}
	
	console.log(isNaN(i));
