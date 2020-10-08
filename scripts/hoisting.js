/*
HOISTING

o javascript sempre passa todas as declaracoes de variaveis e funcoes
para o topo do script.

*/

//ex:

/*
se eu pego uma variavel e coloco x = 5 e depois eu declaro ela var x,
vai funcionar, pois estou fazendo uma declaracao.

o var x sera levado para o topo e depois sera atribuido o valor.


MAS

se atribuo o valor logo na declaracao como por exemplo,

var y = 8, ela nao sera levada para o topo do script, logo 
ela tera valor de undefined.


*/

console.log("x = " + x); //o javascript levou a declaracao para o topo (undefined)

x = 5;

console.log("x = " + x); // ja tem valor

var x;

console.log("x = " + x); // continua com o valor anterior

console.log("##########");

console.log("y = " + y); //o javascript NAO levou a declaracao para o topo 

y = 10;

console.log("y = " + y); // ja tem valor

var y = 20;

console.log("y = " + y); // continua com o valor anterior