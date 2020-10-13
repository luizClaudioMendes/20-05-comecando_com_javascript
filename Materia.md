# começando com Javascript
## iniciado em 05/10/2020
## terminado em EM ANDAMENTO

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
se criarmos uma variavel no arquivo js, essa variavel terá escopo global dentro do arquivo.

se criarmos uma variavel dentro de uma funçao essa variavel terá o escopo da funcao e logo apos a sua execuçao, esta sera destruida.

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



