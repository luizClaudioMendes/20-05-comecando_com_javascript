//null sera visto em mais detalhes no capitulo de objetos

var x;
console.log(x);//undefined

//comparar null e undefined pode ser util em algumas ocasioes
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(null === undefined);//false os tipos sao diferentes


//se usarmos o operador curto (==)
console.log(null == undefined);//true

//o javascript no comparador == 
//converte os valores e nesse caso
//o null e o undefined sao iguais

//entao podemos utilizar x != null mesmo x sendo undefined
//ex:
if(x != null) {
	console.log('Existe valor em x', x);
}else {
	console.log('x nao tem valor util');
}




