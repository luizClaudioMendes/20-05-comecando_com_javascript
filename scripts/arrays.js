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

