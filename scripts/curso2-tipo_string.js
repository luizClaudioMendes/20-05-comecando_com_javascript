/*
=> ver ### Aula 5.1 funcoes uteis -- manipulando strings
*/

//comparar duas strings
var a = 'Algaworks';
var b = 'Algaworks';

console.log(a === b);//melhor usar este aqui. será abordado em outra aula
console.log(a == b);

//indexOf --- quando nao encontra retorna -1
console.log(a.indexOf('z'));//-1
console.log(a.lastIndexOf('z'));//-1

//substring -- semelhante ao slice
var frase = 'A arte de programar';
//pegar um pedaço da frase em uma nova string
console.log(frase.substring(2, 6));//arte

//pegar um pedaço da frase em uma nova string, do ponto
//inicial ate ao fim

console.log(frase.substring(2));//arte de programar

// o slice tambem tem essa capacidade
console.log(frase.slice(2));//arte de programar


//a diferença entre o substring e o slice é que o slice
//permite que seja contado o index de tras pra frente

console.log(frase.slice(-17, -13));//arte

//localizacao de um caractere
//qual caractere esta na posicao X?
console.log(frase.charAt(4));//t