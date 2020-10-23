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

### 2.4. Tipo String

=> ver ### Aula 5.1 funcoes uteis -- manipulando strings


#### comparar duas strings:
var a = 'Algaworks';
var b = 'Algaworks';

console.log(a === b);//melhor usar este aqui. será abordado em outra aula
console.log(a == b);

#### indexOf --- quando nao encontra retorna -1
console.log(a.indexOf('z'));//-1
console.log(a.lastIndexOf('z'));//-1

#### substring -- semelhante ao slice
var frase = 'A arte de programar';

pegar um pedaço da frase em uma nova string
console.log(frase.substring(2, 6));//arte

pegar um pedaço da frase em uma nova string, do ponto inicial ate ao fim

console.log(frase.substring(2));//arte de programar

o slice tambem tem essa capacidade
console.log(frase.slice(2));//arte de programar


a diferença entre o substring e o slice é que o slice
permite que seja contado o index de tras pra frente

console.log(frase.slice(-17, -13));//arte

#### localizacao de um caractere
qual caractere esta na posicao X?
console.log(frase.charAt(4));//t

### 2.5. Tipo Boolean
	var ativo = true;

	console.log(ativo);
	console.log(typeof ativo);

#### o que da false e o que da true no JS?
	=> 0 é false
	ex: if(0) {.....}, nunca entrara aqui porque 0 sempre é false

	=> '' é false (string vazia)

	=> NaN é false

	=> null é false

	=> undefined é false

	=> false é false

	 console.log(!!1);//true
	 console.log(!!0);//false
	 console.log(!!'');//false
	 console.log(!!NaN);//false
	 console.log(!!null);//false
	 console.log(!!undefined);//false
	 console.log(!!false);//false

### 2.6. O operador typeof

o operador typeof retorna uma string com o tipo da variavel

var m = 'algaworks';
console.log(typeof m);//string

m = true;
console.log(typeof m);//boolean

m = {};
console.log(typeof m);//object

m = 10;
console.log(typeof m);//number

m = null;
console.log(typeof m);//object

m = undefined;
console.log(typeof m);//undefined

m = [];
console.log(typeof m);//object

m = function() {};
console.log(typeof m);//function

### 2.7. Operadores aritméticos

=> ver ### Aula 2.1 sintaxe basica

#### resto da divisao
var x = 7 % 2;
console.log(x);//1

x = 8 % 3;
console.log(x);//2

### 2.8. Operadores de comparação
// >
console.log(10 > 4);//true

// <
console.log(10 < 4);//false

// >=
console.log(10 >= 10);//true

// <=
console.log(10 <= 10);//true

// == (nao compara o tipo somente os valores)
console.log(10 == 10);//true
console.log('Algaworks' == 'Algaworks');//true
var x = 10;
var y = '10';
console.log(x == y);//true --- comparacao do tipo number com string

// === (compara tambem o tipo)
console.log(x === y);//false --- comparacao do tipo number com string

// !=
console.log(x != y);//false

// !==
console.log(x !== y);//true

### 2.9. Operadores lógicos

#### || e && 

var ativo = true;
var admin = false;

//&& - independe da ordem
console.log(ativo && admin);//false - os dois tem que ser true para ser verdadeiro
console.log(admin && ativo);//false -  os dois tem que ser true para ser verdadeiro

//|| - independe da ordem
console.log(ativo || admin);//true - um dos dois tem que ser true para ser verdadeiro
console.log(admin || ativo);//true - um dos dois tem que ser true para ser verdadeiro

#### | e &
//& - independe da ordem
console.log(ativo & admin);//0 
console.log(admin & ativo);//0

//| - independe da ordem
console.log(ativo | admin);//1
console.log(admin | ativo);//1

/* os operadores logicos simples (& e |) utiliza valores binarios
ex:
10 		= 	1010 (binario)
1 		=	0001
------------------------
10 | 1 	= 	1011 -> 11	 
*/
console.log(10 | 1);//11

/* --- no & os dois tem que ser 1 para resultar 1
10 		= 	1010 (binario)
1 		=	0001
------------------------
10 & 1 	= 	0000 -> 0
*/
console.log(10 & 1);//0

### 2.10. Estrutura de controle if, else if, else

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


### 2.11. Operador ternário

/* vamos imaginar que vamos buscar um objeto */

//nesse objeto existe uma propriedade chamada: tem foto

var temFoto = true;

//se tiver a foto vai buscar perfil.jpeg
//se nao tem foto busca mock-perfil.jpeg

//<img src="pathFoto"> 

var pathFoto = '';
if(temFoto) {
	pathFoto = 'maria-perfil.jpeg';
}else {
	pathFoto = 'mock-perfil.jpeg';
}

console.log('path da foto', pathFoto);


//como é um simples if else, agente pode colocar em um 
//operador ternario

var pathFoto = temFoto ? 'maria-perfil.jpeg' : 'mock-perfil.jpeg';
console.log('path da foto', pathFoto);

// o operador ternario serve para reduzir as linhas de codigo



### 2.12. Estrutura de controle for

=> ver ### Aula 2.4 loops

//modo convencional
for (var i = 0; i < 5; i++) {
	console.log(i);
} 


// modo alternativo - o for tem mais uma inicializacao
var s = 'Algaworks';

for(var k = 0, tamanho = s.length; k < tamanho ; k++){
	console.log(k);
}

//modo alternativo - inicializar as variaveis fora do for

var j = 5;
for(; j < 9; j++) {
	console.log('j', j);
}

//ou incrementar a variavel sem o ++ 
var z = 0;
for(;z < 4;) {
	console.log('z', z);
	z++;
}

var l = 0;
// e tambem é possivel nao colocar nada --- loop infinito
for(;;) {
	console.log('->', l++);

	if(l === 100) {
		break;
	}
}

### 2.13. Estrutura de controle while
=> ver ### Aula 2.4 loops


### 2.14. Valores null e undefined

//null sera visto em mais detalhes no capitulo de objetos

var x;
console.log(x);//undefined

//comparar null e undefined pode ser util em algumas ocasioes
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(null === undefined);//false os tipos sao diferentes


//se usarmos o operador curto (==)
console.log(null == undefined);//true

//o javascript no comparador == 
//converte os valores e nesse caso
//o null e o undefined sao iguais

//entao podemos utilizar x != null mesmo x sendo undefined
//ex:
if(x != null) {
	console.log('Existe valor em x', x);
}else {
	console.log('x nao tem valor util');
}

### 3.1. Introdução a funções

metodo convencional de declaracao de funcao
function nome(args) {
	return;
}

porque criamos funcoes? para reaproveitar codigo. inclusive parametrizando, passando argumentos. tambem criamos encapsulamento.

os nomes das funcoes sao em camelcase.

### 3.2. Alert e console.log
o javascript ja fornece varias funcoes que agente pode usar. 

duas delas sao o alert e o console.log

usando o developer tools do chroem, na aba console podemos usar o javascript em browser.

vamos usar ele para testar as duas functions

se digitarmos:

alert('Algaworks');

ira exibir a janela no browser com a mensagem 'Algaworks'.

se digitarmos:

console.log('Algaworks');

na aba console ira aparecer 'Algaworks'.

### 3.3. Funções matemáticas

//existe no javascript um objeto chamado de math que
//possui varias funcoes matematicas que podemos utilizar

//Math.min(valores)
//retorna o menor valor de uma lista
var menorNota = Math.min(3,5,1,6,10);
console.log('Menor nota', menorNota);

//Math.max(valores)
//retorna o maior valor de uma lista
var maiorNota = Math.max(3,5,1,6,10);
console.log('Maior nota', maiorNota);

//Math.round(valor decimal)
var temperatura = Math.round(22.3);
console.log(temperatura);//22

temperatura = Math.round(22.7);
console.log(temperatura);//23

var valorAleatorio = Math.random();
console.log(valorAleatorio);//sempre diferente

//exemplo de utilizacao numeros da megasena
var numero = valorAleatorio * 60;
console.log(numero);


var numeroMega = Math.floor(numero) + 1;
console.log(numeroMega);


### 3.4. Criando funções

//existem duas formas de se criar funcoes

#### function declaration
function somar(a, b) {
	return a + b;
}

#### function expression
var subtrair = function (a,b) {
	return a - b;
}

// no javascript o hoisting atua tambem nas funcoes
// na function declaration a funcao é toda levada para cima
// na function expression a variavel é levada para cima
// a funcao é declarada no momento em que o codigo passa pela linha
// entao nao se deve utilizar a function antes da linha em que se 
//declara a function sob o risco de nao funcionar.

// uma boa pratica é declarar no topo do arquivo js, de forma a mitigar 
//  a possibilidade de se tentar usar uma funcao sem ela ter sido declarada

console.log('somar: ',somar(10, 5));
console.log('subtrair: ', subtrair(10, 5));

// nas funcoes nao é obrigatorio ter o return.
// mas todas as funcoes retornam algo.
//se nao for mencionado o retorno a funcao retornara
// undefined

#### parametro implicito das functions
//dentro de todas as funcoes existe um parametro implicito chamada arguments
function verArguments(a,b) {
	console.log('arguments -> ',arguments );
	return a * b;
}

console.log('chamado arguments ', verArguments(1,2));

//esse argument é um objeto do javascript. nele vem chaves e valores
// { '0': 1, '1': 2 } na posicao 0 foi passado o valor 1 e assim por diante
//ele exibe os argumentos de chamada passado para a function

//no javascript, uma funcao tambem é um tipo de dado
console.log(typeof subtrair);//function


### 3.5. Escopo de função e global

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



### 3.6. Closures

=> ver ### Aula 3.4 closures

// como exemplo, queremos criar um contador

function incrementar() {
	var valor = 0;

	return ++valor;
}

console.log(incrementar());//1
console.log(incrementar());//1
console.log(incrementar());//1


//desta forma sempre retorna 1, o que nao serve para o contador

//entao podemos transformar a variavel em uma variavel global

var valor1 = 0;

function incrementar1() {
	
	return ++valor1;
}

console.log(incrementar1());//1
console.log(incrementar1());//2
console.log(incrementar1());//3

//funcionou mas nao é o que procuramos, pois qualquer um pode mudar a variavel

//qual a solucao? 

//usar o conceito closure

//no retorno da funcao devemos retornar outra funcao



function incrementar2() {
	var valor2 = 0;//variavel local protegida
	return function() {
		return ++valor2;
	}
}

var fn = incrementar2();//necessario para executar pela primeira vez
//pode ser substituida pela funcao autoexecutada

console.log(fn());//1
console.log(fn());//2
console.log(fn());//3


### 4.1. Introdução a objetos

=> ver ### Aula 4.1 objetos -- definicao

### 4.2. Criando objetos

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

### 4.3. Objetos dentro de objetos
var joao = {
	nome: 'joao',
	idade: 25,
	logradouro: 'Av brasil',
	numero: 100,
	complemento: 'apto 202',
	cidade: 'Rio de janeiro',
	estado: 'RJ'
};

console.log(joao);

//para se organizar melhor o objeto joao os dados 
//do endereco pode ser um outro objeto

var pedro = {
	nome: 'pedro',
	idade: 25,
	endereco: {
		logradouro: 'Av brasil',
		numero: 100,
		complemento: 'apto 202',
		cidade: 'Rio de janeiro',
		estado: 'RJ'
	}
};

console.log(pedro);

//acessar o atributo dentro do objeto do objeto
console.log(pedro.endereco.cidade);

//alterar atributos dentro de obhetos do objeto
pedro.endereco.numero = 404;

console.log(pedro);

//acessar atributo dentro de um objeto que nao existe
console.log(joao.endereco);//undefined

//acessar atributo de um objeto de um objeto que nao existe
//console.log(joao.endereco.cidade);// erro : TypeError: Cannot read property 'cidade' of undefined

//acesso dinamico do objeto dentro do objeto
console.log('Estado:', pedro['endereco']['estado']);

### 4.4. Apagando propriedades do objeto
var pedro = {
	nome: 'pedro',
	idade: 25,
	endereco: {
		logradouro: 'Av brasil',
		numero: 100,
		complemento: 'apto 202',
		cidade: 'Rio de janeiro',
		estado: 'RJ'
	}
};

console.log(pedro);

//para apagar uma propriedade de um objeto

delete pedro.idade;
console.log(pedro);

// tambem é possivel apagar as propriedades de um objeto dentro de outro objeto
delete pedro.endereco.logradouro;
console.log(pedro);

### 4.5. Iterando sobre propriedades do objeto
var pedro = {
	nome: 'pedro',
	idade: 25,
	endereco: {
		logradouro: 'Av brasil',
		numero: 100,
		complemento: 'apto 202',
		cidade: 'Rio de janeiro',
		estado: 'RJ'
	}
};

//para iterar pelas propriedades do objeto
//utilizamos o for in

for (var prop in pedro) {
	console.log(prop);
}

/*
nome
idade
endereco
*/

//para ver os valores devemos usar as propriedades dinamicas

for (var prop in pedro) {
	console.log('prop -> ', pedro[prop]);
}

//forma mais visivel
for (var prop in pedro) {
	console.log(prop, '-> ', pedro[prop]);
}


### 4.6. Comparando objetos

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


### 5.1. Introdução a arrays
=> ver ### Aula 5.3 funcoes uteis -- manipulando arrays
=> ver ### Aula 4.3 objetos -- arrays

### 5.2. Criando arrays
//criar email
var emails = [];

//adicionar itens no email
emails[0] = 'joao@email.com';
emails[1] = 'maria@email.com';

console.log(emails);//[ 'joao@email.com', 'maria@email.com' ]
console.log(emails[0]);//joao@email.com
console.log(emails[5]);//undefined

//criar e declarar o array ao mesmo tempo
var nomes = ['joao', 'maria'];

console.log('Quantos nomes? ', nomes.length);

//adicionar posicoes ao criar arrays
//ira colocar vazios nas posivoes puladas

nomes[4] = 'Jose';
console.log('Quantos nomes depois do jose? ', nomes.length);
console.log(nomes);//[ 'joao', 'maria', <2 empty items>, 'Jose' ]
console.log(nomes[3]);//undefined

### 5.3. Array vs Object
var foxArray = ['Fox', 'Prata', 'VW'];
console.log(typeof foxArray);//object

//acessar dados do array
console.log(foxArray[0]);

var foxObj = {modelo:'fox', cor:'Prata', fabricante:'VW'};
console.log(typeof foxObj);//object

//acesar os dados do obj
console.log(foxObj.modelo);

//no array acessamos os dados pelo index numerico
//no objeto acessamos pelo nome da propriedade


### 5.4. Adicionando e removendo elementos do array

=> ver ### Aula 5.3 funcoes uteis -- manipulando arrays


### 5.5. Iterando nos elementos com forEach

var nomes = ['joao', 'pedro', 'maria', 'jose'];

//for normal
for(var i = 0; i < nomes.length; i++) {
	console.log('nomes [',i,']=', nomes[i]);
}

//forEach
nomes.forEach(function(e){
	console.log(e);
});

//o forEach é uma funçao. dentro dela recebe uma nova funcao.
//essa funcao é que vai receber o elemento do array


### 5.6. Funções toString() e join()
=> ver ### Aula 5.3 funcoes uteis -- manipulando arrays


### 5.7. Elementos do array

var acessorio = {som: 'Pioneer', banco: 'Couro'};

var ligar = function () {
	console.log('Ligando o carro!');
}
var fox = ['Fox', 4, acessorio, ligar];

console.log(fox);

console.log(fox[2].som); // Pioneer

fox[3]();

// o array pode ter qualquer tipo de dado
// inclusive misturados como o exemplo do fox

### 5.8. Mais da API de arrays
para conhecer mais functios da api de arrays
voce pode acessar:

https://www.w3schools.com/js/js_array_methods.asp


### 6.1. Conhecendo o Developer Tools
no browser, se voce apertar F12 

as abas:

#### elements
ele mostra os elementos na tela. se voce passar o mouse ele mostra qual é o elemento.

na parte da direita mostra as classes e as imagens usadas na tela.

da tambem para alterar os componentes da tela diretamente na tela.

#### console
o console mostra o logs do sistema de front end.

os console.log tambem aparecem aqui

#### network 
mostra as requisicoes realizadas pela tela

estas sao as principais abas do developer tools

### 6.2. Debug com o Developer Tools

index.html
<!DOCTYPE html>
<html>
<head>
	<title>Debug com Developer Tools</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<style>
		body {
			padding: 20px;
		}
	</style>
</head>
<body>
<div class="panel panel-default">
	<div class="panel-heading">Cálculo valor total</div>
	<div class="panel-body">
		<div class="row">
			<div class="col-xs-3">
				<div class="form-group">
					<label for="">Valor</label>
					<input type="text" class="form-control" id="valor">
				</div>
			</div>
			<div class="col-xs-3">
				<div class="form-group">
					<label for="">Valor total</label>
					<p class="form-control-static" id="total">0</p>
				</div>
			</div>
		</div>
	</div>
</div>
<script src='total.js'></script>
</body>
</html>


total.js
console.log('iniciando o js');

//pegar o elemento que tem o input do valor
var valorElement = document.getElementById('valor');
var valorTotal = document.getElementById('total');

//adicionar um event listner

//event listener com problemas para testar o debug
/*
valorElement.addEventListener('keyup', function(e){
	console.log('valor', valorElement.value);
	var total = 0;
	var valor = valorElement.value;

	if(valor < 10) {
		total = valor + valor * 0.3 + 5;
	}

	valorTotal.innerHTML = total;
});
*/
//para fazer o debug va no developer tools
//na aba sources
//selecione o arquivo js
//clicando no numero da linha é adicionado um breakpoint

//ao executar o codigo podemos clicar em:
// => botao com pipe e play - avança ate ao proximo brakpoint ou fim do arquivo
// => botao com arco iris e um ponto - avança pra proxima linha

//verificamos que na event listener anterior, estava acontecendo uma concatenacao
//o numero 1 digitado esta sendo enviado como string
//e assim ele fazia a seguinte conta:

//ex: digitado 1
/*
total = valor + valor * 0.3 + 5;
total = '1' + 1*0.3 + 5
total = '1' + 0.3 + 5
total = '10.3' + 5
total = '10.35'
*/

//event listener corrigido 
valorElement.addEventListener('keyup', function(e){
	console.log('valor', valorElement.value);
	var total = 0;
	var valor = parseFloat(valorElement.value ? valorElement.value : 0);

	if(valor > 0 && valor < 10) {
		total = valor + valor * 0.3 + 5;
	} else if(valor >= 10 && valor < 50) {
		total = valor + valor * 0.1 + 2;
	} else {
		total = valor;
	}

	valorTotal.innerHTML = total;
});

//com essa correçao, o numero inserido vira realmente um numero
// e a conta é realizada corretamente
// mais outras alteracoes foram realizadas para 
// sanar as situacoes:
// digitar 1
//digitar 10
//digitar 100
//apagar todos os digitos

### 6.3. Boas práticas

#### no aquivo html, porque foi declarado o arquivo js no final do arquivo html, antes de fechar o body?
isso é legal porque o browser começa a carregar de cima pra baixo, entao é recomendado carregar no topo o css e no final o javascript.

#### no javascript sempre use var para declarar as variaveis. nunca use o escopo global  para declarar as variaveis. a nao ser que voce tenha um motivo muito forte para usar a variavel global

#### declare todas as variaveis no topo do arquivo

#### inicialize sempre as variaveis

#### nao use o new para criar variaveis. use a declaracao literal. ao usar o new ele cria um object  em vez o do tipo do javascript. assim se voce comparar vai dar sempre falso

#### use sempre o comparador === para comparar valores de variaveis

### 6.4. Objeto window

quando agente carrega a pagina, o browser fornece um objeto window.

dentro deste objeto é que existem varias funcoes, como o parseFloat().

quando agente cria uma variavel solta como o valorElement, ou seja, nao esta dentro de uma funcao, mesmo com o var, essa variavel vai pra dentro de window.

entao se digitarmos:

window.valorElement 

ele é acessivel e isso nao é legal.

porque? 

porque numa pagina agente pode carregar varios arquivos js.

e ai imagina que no primeiro é definido a variavel e ele fica disponivel para os outros arquivos js.

quando agente declara deste jeito agente esta declarando que essa variavel é global.

ao contrario de quando declaramos a variavel dentro de uma function.

entao é uma boa pratica nao adicionar nada como variavel global, a nao ser que seja realmente necessario.

### 6.5. CDN vs local hosting

quando importamos o css do bootstrap, pegamos ele da CDN.

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

assim a pagina ficou bonita porque aplicou o css do bootstrap.

desta forma nao foi necessario baixar nada para o nosso servidor. quando a tela carregou ela foi la no CDN tambem e baixou o css.

podemos ver isso na aba network do developer tools.

mas o que é melhor ? usara a CDN ou baixar os arquivos para o nosso servidor?

o CDN é bom para: 
* o browser tem uma limitacao de quantas requisicoes simultaneas ele faz para um mesmo dominio (umas 4 ou 5 requisicoes). ele so fara a 6 se uma das 5 ja estiver liberada.
ao colocar na CDN o arquivo esta em um dominio diferente e é carregado em simultaneo.
outra coisa é que o browser coloca em cache e dessa forma ele nao fica baixando constantemente o arquivo.

* a infraestrutura da CDN tem uma escalabilidade muito boa, de forma que eles conseguem manter a capacidade de requisicoes simultaneas e é pouco provavel que a infra da CDN fique fora por muito tempo.

* voce economiza trafego no seu servidor. vc paga pelo tanto de arquivos e pela quantidade de dados que saem do servidor. se ele estiver vindo do CDN voce nao é cobrado pelos dados do arquivo.

é melhor usar arquivos locais por:
* possibilidade de trabalhar offline
* podem existir bloqueios de internet no cliente que bloqueiam a CDN
* segurança. voce controla o arquivo, impedindo que alguem coloque arquivos maliciosos no lugar

### 7.1. Introdução ao jQuery

jquery é uma biblioteca javascript que facilita a vida no trabalho com html, eventos, etc.

ele tambem facilita com problemas de javascript e browsers.

jquery.com

o que importante neste site? a API Documentation

como nao vamos nos aprofundar muito na utilizacao do Jquery, vamos usar a versar do CDN.

### 7.2. Seletores

no arquivo HTML a chamada para o Jquery tem que ser a primeira dos javascripts.

 a busca por id (#) é mais rapida mas ela tem o problema de que, se outro componente tiver o mesmo id, o jquery pega somente o primeiro.

 é recomendado que se use a tecnica de classes css nomeadas.

index.html
<!DOCTYPE html>
<html>
<head>
	<title>Seletores</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<style>
		body {
			padding: 20px;
		}
	</style>
</head>
<body>
<table class="table">
	<thead>
		<tr>
			<th><input type="checkbox" id="selecao-todos-usuarios"></th>
			<th>Nome</th>
			<th>E-mail</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><input type="checkbox" class="js-selecao-usuario"></td>
			<td>Ricardo</td>
			<td>ricardo@email.com</td>
		</tr>
		<tr>
			<td><input type="checkbox" class="js-selecao-usuario"></td>
			<td>Sarah</td>
			<td>sarah@email.com</td>
		</tr>
		<tr>
			<td><input type="checkbox" class="js-selecao-usuario"></td>
			<td>Manoel</td>
			<td>manoel@email.com</td>
		</tr>
	</tbody>
</table>

<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
<script src="seletores.js"></script>
</body>
</html>

seletores.js
//precisamos que o javascript somente execute
//somente quando o html estiver totalmente carregado
//$();
//se colocarmos uma funcao no parametro acima, ela sera executada 
$(function () {
	//marcar o checkbox de selecionado todos
	//pelo id
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	//o # informa que estamos usando o id

	//selecionar todas as outras checkboxes
	// pelo hook, de uma classe css, mesmo que ela nao existe
	// no caso a classe é js-selecao-usuario
	// por convençao, quando usamos uma classe css
	// que nao existe para fazer esse hook
	// agente coloca o js- antes do nome da classe css
	var selecaoUsuarios = $('.js-selecao-usuario'); //o ponto indica que é uma classe css

	//evento
	/*selecaoUsuarios.on('click', function(e) {
		console.log('clicou');
		//pegar todos os componentes da classe .js-selecao-usuario que estao com o check marcado
		var totalUsuariosSelecionados = $('.js-selecao-usuario:checked').length;

		console.log(totalUsuariosSelecionados);

		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked', checked);
	});*/

	//da forma acima, o evento ja funciona.
	//mas vamos dar uma melhorada nele

	selecaoUsuarios.on('click', function(e) {
		console.log('clicou');
		//pegar todos os componentes da classe .js-selecao-usuario que estao com o check marcado
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length; //aplicando o .filter do jquery

		console.log(totalUsuariosSelecionados);

		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked', checked);
	});

	//agora vamos tratar o botao de selecionar todos
	selecaoTodosUsuarios.on('click', function (e) {
		//queremos que, se o botao de selecionar todos for true
		//todos os outros botoes fiquem true
		//se for false, todos os outros fiquem false
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
	});

});

### 7.3. CSS

manipular o css atraves do jquery.

continuando com o exemplo anterior:

quando selecionarmos uma linha a linha inteira deve mudar de cor. ao deselecionar a linha volta a cor normal.

style.css
body {
	padding: 20px;
}

.selecionado {
	color:blue;
}


index.html
<!DOCTYPE html>
<html>
<head>
	<title>Seletores</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<table class="table">
	<thead>
		<tr>
			<th><input type="checkbox" id="selecao-todos-usuarios"></th>
			<th>Nome</th>
			<th>E-mail</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><input type="checkbox" class="js-selecao-usuario"></td>
			<td>Ricardo</td>
			<td>ricardo@email.com</td>
		</tr>
		<tr>
			<td><input type="checkbox" class="js-selecao-usuario"></td>
			<td>Sarah</td>
			<td>sarah@email.com</td>
		</tr>
		<tr>
			<td><input type="checkbox" class="js-selecao-usuario"></td>
			<td>Manoel</td>
			<td>manoel@email.com</td>
		</tr>
	</tbody>
</table>

<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
<script src="manipulando-css.js"></script>
</body>
</html>

manipulando-css.js
$(function () {
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuario'); 

	selecaoUsuarios.on('click', function(e) {
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked', checked);
	});

/*
	selecaoTodosUsuarios.on('click', function (e) {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
	});
*/

/*
	selecaoUsuarios.on('change', function(evento) {
		console.log('evento', evento);
		var selecaoUsuario = $(evento.target);//transforma o objeto html em objeto jquery
		console.log('selecao usuario', selecaoUsuario);
		
		//como a variavel selecaoUsuario é um objeto jquery
		//agente pode verificar se ela esta marcada com o checked
		if(selecaoUsuario.prop('checked'))  {
			//precisamos mudar o css do tr e nao do seletor
			//precisamos procurar nos pais dele ate chegar no primeiro tr
			selecaoUsuario.parents('tr').addClass('selecionado');
			//o parents no plural procura em todos os pais do elemento. o parent no singular
			//procura somente pai mais proximo
			// no parent, ao usar 'tr' estamos informando que queremos que ele procure
			// pelo elemento tr. tambem podemos procurar por classes (.nomeClasse) ou id (#id)
		}else {
			//para retirar o css
			selecaoUsuario.parents('tr').removeClass('selecionado');
		}
	});

	*/

		//mas com a nossa implementacao ate ao momento,
		//nao vai funcionar se clicarmos no selecionar todos.

		//entao adicionamos no evento do clique em todos o comportamento:
	/*
	selecaoTodosUsuarios.on('click', function (e) {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
		if(selecaoTodosUsuarios.prop('checked')) {
			selecaoUsuarios.parents('tr').addClass('selecionado');
		}else {
			selecaoUsuarios.parents('tr').removeClass('selecionado');
		}

	});
	*/


	//ok. funcionou.
	//mas agora temos trechos do codigo duplicado
	// entao vamos criar esta funcao
	function estilizarLinhaUsuarios() {
		selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
	}

	//e alterar nos eventos

	selecaoUsuarios.on('change', function(evento) {
		//var selecaoUsuario = $(evento.target);
		/*
		if(selecaoUsuario.prop('checked'))  {
			selecaoUsuario.parents('tr').addClass('selecionado');
		}else {
			selecaoUsuario.parents('tr').removeClass('selecionado');
		}*/
		estilizarLinhaUsuarios();
	});
	selecaoTodosUsuarios.on('click', function (e) {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
		/*if(selecaoTodosUsuarios.prop('checked')) {
			selecaoUsuarios.parents('tr').addClass('selecionado');
		}else {
			selecaoUsuarios.parents('tr').removeClass('selecionado');
		}*/
		estilizarLinhaUsuarios();
	});
});

### 7.4. Introdução ao HTTP

o portocolo HTTP já é bem antigo e facilmente entendivel.

entao, como funciona?

ao acessar um site, tipo o google, o browser envia uma requisicao para o servidor e recebe uma resposta.

esse envio e recebimento é feito atraves do protocolo HTTP.

(HTTP request e HTTP response)

desta forma funciona toda a internet.

dentro do request tem:
* verbo (GET, POST, PUT, DELETE)
cada um tem um objetivo
** o GET é para recuperar coisas
** o POST é para inserir coisas
** 0 PUT é para atualizar
** o DELETE apaga
* URL (http://google.com?uf=MG)
* HEADERS
* PARAMETROS (query String, Payload, etc)

dentro da response:
* code (200 OK, 404, 500, etc)
* headers
* resposta (que tras os dados por exemplo)

o que é ajax?
o javascript tambem tem acesso ao http request, de forma programatica, da mesma forma que o browser faz, so que sem a interçao humana.

ou seja, o javascript consegue fazer essa requisicao e trabalhar a resposta e assim alterar o html.

### 7.5. Ajax e promises
para esta atividade precisaremos de um sistema spring para retornar as respostas dos estados e cidades.

este sistema pode ser obtido em:
alga.works/ws-js-localidades

ao clicar no link, sera baixado um jar

esse jar é uma aplicacao spring boot que tem basicamente implementado as endpoints rest que retornaram os estados e municipios (somente alguns, esta implementado hardcode).

apos baixar o jar, para executa-lo basta executar no cmd:

java -jar localidades-1.0.0.jar

uma aplicacao spring sera levantada no localhost:8080

como acessar essa aplicacao?

localhost:8080/estados

ele vai trazer os estados teste.

localhost:8080/cidades?uf=SP

ele vai trazer algumas cidades do estado passado

essa aplicacao tambem esta no github em:
www.github.com/algaworks/workshop-javascript-localidades


index.html
<!DOCTYPE html>
<html>
<head>
	<title>Ajax e Promises</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<style>
		body {
			padding: 20px;
		}
	</style>
</head>
<body>
<div class="panel panel-default">
	<div class="panel-heading">Estado e cidade</div>
	<div class="panel-body">
		<div class="row">
			<div class="col-xs-3">
				<div class="form-group">
					<label for="">Estado</label>
					<select id="combo-estado" class="form-control">
						<option value="MG">Minas Gerais</option>
					</select>
				</div>
			</div>
			<div class="col-xs-3">
				<div class="form-group">
					<label for="">Cidade</label>
					<select id="combo-cidade" class="form-control" disabled="disabled">
					</select>
				</div>
			</div>
		</div>
	</div>
</div>

<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
<script src="ajax-e-promises.js"></script>
</body>
</html>

ajax-e-promises.js
//fazer um ajax no servidor
//localhost:8080/estados
//para preencher o combo

//como fazer uma requisicao ajax com o jquery?


$(function () {//somente depois de a tela acabar de carregar
	/*$.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET'
	});*/

	//ao acessar desta forma no browser, como estamos usando o html em um file, ocorre um erro de segurança
	/*Access to XMLHttpRequest at 'http://localhost:8080/estados' from origin 'null' has been blocked by CORS policy: 
	No 'Access-Control-Allow-Origin' header is present on the requested resource.*/
	//o javascript tentou acessar o localhost, mas no browser estou em um file
	//nisso o browser percebe e bloqueia
	//como resolver?
	//na documentacao do Jquery, basta procurar por dataType
	//e dar uma lida na parte dos paramentros
	// ao encontrar o "jsonp" 
	// no caso o problema ocorre porque o html esta em um dominio (file) e o js esta em outro (localhost)
	// entao o ajax fica:
	/*$.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp'
	});*/
	//o servidor tambem precisa estar configurado para receber o jasonp

	//pronto agora esta funcionando

	//o ajax é isso. ele foi no servidor e retornou os dados
	//como fazemos para pegar os resultados?

	//existem alguns callbacks no jquery (callbacks sao funcoes que posso chamar apos o retorno dos dados)

	/*$.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp',
		success: function(data) {
			console.log('voltou com sucesso', data);
		},
		error: function() {

		}
	});*/

	//mas nao é legal fazer assim, e sim usar as promises

	// o objeto retornado pelo ajax implementa as promises
	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp'//necessario somente porque nao estamos no mesmo dominio
	});

	//como é uma chamada externa, para o programa nao travar
	// agente pode utilizar
	//ex. de promise
	resposta.done(function (estados) {
		console.log('tude certo', estados);
		//a resposta foi um array com os estados
		estados.forEach(function(estado) {
			console.log(estado);

		});
	});

	//é possivel registra mais de uma promise
	/*resposta.done(function (estados) {
		console.log('tude certo', estados);
	});/*

	//é possivel registra uma promise fail
	resposta.fail(function () {
		alert('erro carregando');
	});
});


### 7.6. Manipulação do DOM
esta atividade é uma continuacao da anterior, tendo somente o codigo limpo para exemplificar a aula atual.

index_manipulando_dom.html
<!DOCTYPE html>
<html>
<head>
	<title>Ajax e Promises</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<style>
		body {
			padding: 20px;
		}
	</style>
</head>
<body>
<div class="panel panel-default">
	<div class="panel-heading">Estado e cidade</div>
	<div class="panel-body">
		<div class="row">
			<div class="col-xs-3">
				<div class="form-group">
					<label for="">Estado</label>
					<select id="combo-estado" class="form-control">
						<option value="MG">Minas Gerais</option>
					</select>
				</div>
			</div>
			<div class="col-xs-3">
				<div class="form-group">
					<label for="">Cidade</label>
					<select id="combo-cidade" class="form-control" disabled="disabled">
					</select>
				</div>
			</div>
		</div>
	</div>
</div>

<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
<script src="manipulando_DOM.js"></script>
</body>
</html>

manipulando_DOM.js
$(function () {//somente depois de a tela acabar de carregar
	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp'//necessario somente porque nao estamos no mesmo dominio
	});

	resposta.done(function (estados) {
		var comboEstado = $('#combo-estado');
		//comboEstado.empty(); para limpar a lista do combo
		comboEstado.html('<option>Selecione o estado</option>');
		console.log('tude certo', estados);
		//a resposta foi um array com os estados
		estados.forEach(function(estado) {
			console.log('UF: ', estado.uf);
			console.log('nome: ', estado.nome);
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			console.log(optionEstado);
			comboEstado.append(optionEstado);//insere na ultima posicao
			//comboEstado.prepend(optionEstado);//insere no inicio


		});
	});
});

### 7.7. Plugins jQuery

index.html
<!DOCTYPE html>
<html>
<head>
	<title>Debug com Developer Tools</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<style>
		body {
			padding: 20px;
		}
	</style>
</head>
<body>
<div class="panel panel-default">
	<div class="panel-heading">Cálculo valor total</div>
	<div class="panel-body">
		<div class="row">
			<div class="col-xs-3">
				<div class="form-group">
					<label for="">Valor</label>
					<input type="text" class="form-control" id="valor">
				</div>
			</div>
			<div class="col-xs-3">
				<div class="form-group">
					<label for="">Valor total</label>
					<input type="hidden" id="total-mascara">
					<p class="form-control-static" id="total">0</p>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-maskmoney/3.0.2/jquery.maskMoney.min.js"></script>
<script src='total.js'></script>
</body>
</html>



total.js
$(function () {
	//o plugin que vamos usar é o jquery maskmoney
	//podemos baixar o arquivo js ou usar CDN
	// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-maskmoney/3.0.2/jquery.maskMoney.min.js"></script>


	//esta é a forma de utilizar o javascript puro
	//nao vai servir para o jquery. vamos precisar alterar

	/*var valorElement = document.getElementById('valor');
	var valorTotal = document.getElementById('total');

	valorElement.addEventListener('keyup', function(e){
		console.log('valor', valorElement.value);
		var total = 0;
		var valor = parseFloat(valorElement.value ? valorElement.value : 0);

		if(valor > 0 && valor < 10) {
			total = valor + valor * 0.3 + 5;
		} else if(valor >= 10 && valor < 50) {
			total = valor + valor * 0.1 + 2;
		} else {
			total = valor;
		}

		valorTotal.innerHTML = total;
	});*/

	var valorElement = $('#valor');
	var valorTotal = document.getElementById('total');
	var totalMascara = $('#total-mascara');
	var mascaraConfig = {decimal: ',', 
		thousands: '.',
		prefix: 'R$'
	};

	valorElement.on('keyup', function(e){
		//console.log('valor', valorElement.val());
		var total = 0;
		var valor = valorElement.maskMoney('unmasked')[0];
		//var valor = parseFloat(valorElement.val() ? valorElement.val() : 0);

		if(valor > 0 && valor < 10) {
			total = valor + valor * 0.3 + 5;
		} else if(valor >= 10 && valor < 50) {
			total = valor + valor * 0.1 + 2;
		} else {
			total = valor;
		}

		totalMascara.maskMoney(mascaraConfig);
		totalMascara.maskMoney('mask', total);

		valorTotal.innerHTML = totalMascara.val();
	});

	//pronto
	//agora falta fazer funcionar o plugin do jquery
	//por exemplo alterar a virgula para os milhares e o ponto para os decimais
	valorElement.maskMoney(mascaraConfig);

	//passar o valor ja em float para evitar as virgulas e pontos
	//var valor = valorElement.maskMoney('unmasked')[0];
});



### 8.1. Introdução a eventos
eventos sao muito importantes no javascript.
os eventos sao reacoes quando algo acontece, ou seja, o codigo nao segue linha por linha e sim porque algo aconteceu.

o codigo fica mais organizado e limpo.

temos os eventos que o DOM dispara,
ex: 
addEventListener('keyup', ..... //javascript puro

e 
on('click', .... //jquery
on('keyup', .... //jquery

esses sao exemplos de eventos do DOM

existem varios, como keydown, mouseup, mousedown, dblclick, 

cada um desses eventos tem um objeto com informaçoes especificas como por exemplo a tecla que foi pressionada.

mas tambem podemos criar nossos proprios eventos

### 8.2. Eventos de manipulação do DOM

index.html
<!DOCTYPE html>
<html>
<head>
	<title>Eventos de manipulaçao do DOM</title>
</head>
<body>

	<button id="botao1">botao 1</button>

	<button id="botao2" onclick="console.log('OK');">botao 2</button>

	<button id="botao3" onclick="botao3Clicado()">botao 3</button>

	<a href="http://www.google.com" id="link1">clique aqui</a>

	<input type="text" id="input1">

	<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
	<script src='eventos-manipulacao-do-dom.js'></script>
</body>
</html>

eventos-manipulacao_do_dom.js
$(function () {

//associar o click do botao
	$('#botao1').on('click', function (evento) {
		console.log(arguments);
		console.log(evento);
		console.log('botao 1 clicado');
	});

	$('#link1').on('click', function (e) {
		console.log('link 1 clicado');

		//impedir que ao clicar no link o redirecionamento
		//para o google seja executado
		e.preventDefault();


	});

	$('#input1').on('keyup', function (e) {
		console.log(e.keyCode);

		if(e.keyCode === 13) {
			alert('enter pressionado');
		}

	});





});

//embora seja tecnicamente viavel, nao é recomendada
//esta abordagem.  o comportamento nao deve estar misturado com
//a apresentacao.

//o javascript direto no html tambem nao é recomendado.
//cada linguagem deve ficar separada (html no html e javascript no javascript)
function botao3Clicado () {
		console.log('botao 3 clicado');	
}



### 8.3. Disparando eventos

usar eventos customizados

index.html
<!DOCTYPE html>
<html>
<head>
	<title>Disparando eventos</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<style>
		body {
			padding: 20px;
		}
	</style>
</head>
<body>
<div class="row">
	<div class="col-xs-2">
		<div class="form-group">
			<input type="text" id="atividade">
		</div>
	</div>
	<div class="col-xs-3">
		<div class="form-group">
			<ul id="lista-atividades">
			</ul>
		</div>
	</div>
</div>
<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
<script src="disparando-eventos.js"></script>
</body>
</html>

disparando-eventos.js
$(function () {
	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	atividade.on('keyup', function (e) {
		var keyCode = e.keyCode;

		if(keyCode === 13) {
			//disparar o evento
			//listaAtividades.prepend('<li>' + atividade.val() + '</li>');
			//atividade.val('');

			//da forma acima funciona
			//mas nao é o melhor jeito de se fazer
			//adicionarNaLista(atividade.val());
			//atividade.val('');

			//mas ainda nao esta bom. poderiamos quere chamar varias
			//funcoes. entao a solucao seria disparar o evento aqui

			atividade.trigger('algaworks', atividade.val());
			atividade.val('');
		}
	});

	/*function adicionarNaLista(texto) {
		listaAtividades.prepend('<li>' + texto + '</li>');
	}*/

	//definicao de evento customizados
	atividade.on('algaworks', function (evento, parametro) {
		listaAtividades.prepend('<li>' + parametro + '</li>');
	});
});


### 8.4. Temporizadores

index.html
<!DOCTYPE html>
<html>
<head>
	<title>Temporizadores</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<style>
		body {
			padding: 20px;
		}

		.esconde {
			display: none;
		}
	</style>
</head>
<body>
<div class="text-center">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/MsUhkKopZO4?autoplay=1" frameborder="0" allowfullscreen></iframe>
</div>
<div class="text-center">
	<button id="botao-clique-aqui" type="button" class="btn btn-success btn-lg esconde">Clique aqui</button>
</div>
<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
<script src='temporizadores.js'></script>
</body>
</html>

temporizadores.js
$(function () {

	//temporizadores sao eventos que vao esperar algum 
	//tempo antes de serem executados
	//neste exemplo vamos exibir um video e
	//apos 5 segundos ele exibe um botao

	//setTimeout(function(){},tempo_em_milis);

	setTimeout(function(){
		$('#botao-clique-aqui').show();
	},5000);

});


### 9.1. Entendendo o protótipo do objeto
herança no javascript

todo objeto em javascript tem um prototipo. esse prototipo seria uma propriedade que aponta pra outro objeto.

ao contrario do java, que tem uma classe que herda de uma outra classe, no javascript nao existe esse conceito de classe. no javascript os objetos herdam de outros objetos

/*var fox = {
	nome: 'fox',
	placa: 'aaa1111',
	fabricante: 'vw'
}

var gol = {
	nome: 'gol',
	placa: 'aaa2222',
	fabricante: 'vw'
}

console.log(fox);
console.log(gol);
*/
//estes objeto apontam para um objeto comum a eles, a object.prototype

//tem como recuperar esses objetos?
//console.log(Object.getPrototypeOf(fox));
//console.log(Object.getPrototypeOf(gol));

//repare que no nosso exemplo a propriedade fabricante
//é a mesma. entao podemos criar um outro objeto para receber isso
var volks = {
	fabricante:'vw'
}

var fox = {
	nome: 'fox',
	placa: 'aaa1111'
}

var gol = {
	nome: 'gol',
	placa: 'aaa2222'
}

console.log(Object.getPrototypeOf(fox));
console.log(Object.getPrototypeOf(gol));

//neste momento nada mudou. todos os tres objetos 
//estao apontando pro prototipo do object

//entao agente deve trocar o prototype de gol e fox para
//para o prototype volks

console.log(fox.fabricante);//undefined
console.log(gol.fabricante);//undefined

//entao agora vamos trocar essa propriedade
Object.setPrototypeOf(fox, volks);
//Object.setPrototypeOf(gol, volks);

console.log(fox.fabricante);//vw
console.log(gol.fabricante);//undefined

//mas existe outra forma de se fazer isso ao criar o objeto
var fusca = Object.create(volks);
fusca.nome = 'fusca';
fusca.placa = 'aaa3333';

console.log(fusca.nome);//fusca
console.log(fusca.fabricante);//vw

// outra forma de fazer isso é definir a propriedade
// ao criar o objeto

var jetta = {
	nome: 'jetta',
	placa: 'aaa4444',
	__proto__: volks
}

console.log(jetta.nome);//jetta
console.log(jetta.fabricante);//vw

//mas esta ultima nao é tao recomendada por causa dos browsers
//embora hoje em dia a maioria ja aceita o __proto__

console.log('tostring do jetta:', jetta);
//tostring do jetta: { nome: 'jetta', placa: 'aaa4444' }
//no tostring nao é exibida as propriedades herdadas, somente as do objeto
//mesmo que ele tenha a propriedade la como no exemplo o fabricante

### 9.2. Como funciona o shadowing
o shadowing funciona da seguinte maneira:

imagina que um objeto tem um outro objeto como prototype. esses dois objetos tem uma propriedade com o mesmo nome.

o shadowing atua no objeto filho e exibe a propriedade do filho, pois entende que é a mais proxima.

var volks = {
	fabricante: 'vw'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111'
}

console.log('fox.fabricante', fox.fabricante);
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante', fox.fabricante);

//na primeira execucao do fox.fabricante, sera exibido
// undefined, porque o objeto nao tem a propriedade
// fabricante e nao tem o objeto volks setado como prototype

//na segunda execucao do fox.fabricante, sera exibido
// vw pois ja foi definido o prototype do objeto que tem
// a propriedade fabricante nele

//____________________________

var ford = {
	fabricante: 'ford'
}

var fiesta = {
	nome: 'Fiesta',
	placa: 'AAA-2222',
	fabricante: 'ferrari'
}

console.log('fiesta.fabricante', fiesta.fabricante);
Object.setPrototypeOf(fiesta, ford);
console.log('fiesta.fabricante', fiesta.fabricante);

//shadowing
//neste exemplo, adicionamos a propriedade fabricante
// no objeto fiesta. entao agora, ele possui uma 
// propriedade fabricante e tem um objeto de prototipo
// com uma propriedade fabricante tambem.
// o shadowing atua e exibe a propriedade mais proxima
// ou seja, a do objeto fiesta
//____________________________

//toString
// o toString somente exibe propriedades do objeto.
// ele nao exibe proprieadades do prototipo nem do 
// o prototipo
console.log('Fiesta', fiesta);
//Fiesta { nome: 'Fiesta', placa: 'AAA-2222', fabricante: 'ferrari' }

//e se nos apagarmos a propriedade?
delete fiesta.fabricante;
console.log('fiesta.fabricante ->', fiesta.fabricante);
//agora o shadowing nao vai existir, pois apagamos a propriedade
//do objeto mais proximo, entao ele vai procurar no prototipo
//se existe a propriedade
//fiesta.fabricante -> ford

console.log('Fiesta', fiesta);
//e o toString volta a exibir somente as propriedades do objeto
//Fiesta { nome: 'Fiesta', placa: 'AAA-2222' }
//____________________________

//mas existe alguma forma de exibir todas as propriedades,
// inclusive as dos prototipos?

//basta usar o for in
for(prop in fiesta) {
	console.log(prop);
}
//nome - objeto
//placa - objeto
//fabricante - prototipo

//legal. e agora, tem como agente saber se a propriedade
// é do objeto ou do prototipo?

for(prop in fiesta) {
	console.log('propriedade -> ' + prop + '/' + fiesta.hasOwnProperty(prop));
}

//propriedade -> nome/true -- do obejto
//propriedade -> placa/true -- do objeto
//propriedade -> fabricante/false -- do prototipo


### 9.3. Funções fábrica
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

### 9.4. Funções construtoras

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


### 9.5. Module Pattern
//o module pattern é um padrao que utilizamos
//para encapsular coisas no javascript

// um exemplo bom para exemplificar o padrao
// e um contador
var contador = {
	valor: 0,
	incrementar: function() {
		this.valor++;
	},
	reset: function () {
		console.log('valor do contator agora:', this.valor);
		this.valor = 0;
	}
}


contador.incrementar();
contador.incrementar();

contador.reset();

contador.incrementar();

contador.reset();

//embora esta forma de implementar funcione,
// ela NAO é uma boa forma de se fazer isso

//porque eu tenho acesso direto a propriedade valor
//do objeto contador

//entao eu poderia facilmente colocar isto aqui
//contador.valor = 'algaworks';
//contador.incrementar();
//contador.reset();
//valor do contator agora: NaN

//_______________________________

//APLICANDO O MODULE PATTERN

/*var contadorModule = function() {
	var valor = 0;
}*/

//a variavel valor deste jeito esta encapsulada
//nao é possivel acessa-la de fora da funcao

//entao qual foi a sacada do pessoal que inventou o pattern?
//eu posso entao adicionar dentro da funcao as variaveis que 
//eu quero que sejam privadas e vou retornar apenas as variaveis que quero que sejam publicas
/*
var contadorModule = function() {
	var valor = 0;//privado

	return {
		incrementar: function() {
			valor++;
		},
		reset: function() {
			console.log('valor do contador do pattern:', valor);
			valor = 0;
		}
	}
}*/

//se executarmos desta forma:
//contadorModule.incrementar();
//TypeError: contadorModule.incrementar is not a function

//entao precisamos executar assim:
//contadorModule().incrementar();
//contadorModule().incrementar();
//contadorModule().reset();
//valor do contador do pattern: 0

//opa ainda nao funcionou direito

//precisamos aplicar a tecnica da funcao auto executada,
//que mantem o escopo das variaveis privadas ativas, mesmo depois 
//do termino da execucao

//entao fazemos assim:
var contadorModule = (function() {
	var valor = 0;//privado

	return {
		incrementar: function() {
			valor++;
		},
		reset: function() {
			console.log('valor do contador do pattern:', valor);
			valor = 0;
		}
	}
})();

contadorModule.incrementar();
contadorModule.incrementar();
contadorModule.reset();

//valor do contador do pattern: 2

### 9.6. Propriedade prototype das funções

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








