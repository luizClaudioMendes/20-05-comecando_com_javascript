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




