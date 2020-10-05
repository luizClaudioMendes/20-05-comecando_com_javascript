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



### Aula 2.2



