/* vamos imaginar que vamos buscar um objeto */

//nesse objeto existe uma propriedade chamada: tem foto

var temFoto = true;

//se tiver a foto vai buscar perfil.jpeg
//se nao tem foto busca mock-perfil.jpeg

//<img src="pathFoto"> 

var pathFoto = '';
if(temFoto) {
	pathFoto = 'maria-perfil.jpeg';
}else {
	pathFoto = 'mock-perfil.jpeg';
}

console.log('path da foto', pathFoto);


//como é um simples if else, agente pode colocar em um 
//operador ternario

var pathFoto = temFoto ? 'maria-perfil.jpeg' : 'mock-perfil.jpeg';
console.log('path da foto', pathFoto);

// o operador ternario serve para reduzir as linhas de codigo
