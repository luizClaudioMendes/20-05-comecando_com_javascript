// o operador typeof retorna uma string com o tipo da variavel

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