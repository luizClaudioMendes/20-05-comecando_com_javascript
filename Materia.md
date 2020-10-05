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

