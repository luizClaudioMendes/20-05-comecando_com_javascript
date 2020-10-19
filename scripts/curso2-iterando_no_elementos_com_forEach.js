var nomes = ['joao', 'pedro', 'maria', 'jose'];

//for normal
for(var i = 0; i < nomes.length; i++) {
	console.log('nomes [',i,']=', nomes[i]);
}

//forEach
nomes.forEach(function(e){
	console.log(e);
});

//o forEach é uma funçao. dentro dela recebe uma nova funcao.
//essa funcao é que vai receber o elemento do array