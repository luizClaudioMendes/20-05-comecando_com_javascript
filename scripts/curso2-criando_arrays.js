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













