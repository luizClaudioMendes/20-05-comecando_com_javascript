var s = "The winter is coming";
console.log(s);

//quantos caracteres tem na string?
console.log(s.length);

//em qual posicao a palavra coming esta?
console.log(s.indexOf("coming"));

//OBS: somente mostra a primeira vez que a palavra aparece. ignora outras aparicoes da mesma palavra

s = "The winter is coming. It´s really coming!";
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
console.log(s.replace("winter", "summer"));

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
