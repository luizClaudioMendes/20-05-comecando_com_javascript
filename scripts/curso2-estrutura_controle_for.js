//modo convencional
for (var i = 0; i < 5; i++) {
	console.log(i);
} 


// modo alternativo - o for tem mais uma inicializacao
var s = 'Algaworks';

for(var k = 0, tamanho = s.length; k < tamanho ; k++){
	console.log(k);
}

//modo alternativo - inicializar as variaveis fora do for

var j = 5;
for(; j < 9; j++) {
	console.log('j', j);
}

//ou incrementar a variavel sem o ++ 
var z = 0;
for(;z < 4;) {
	console.log('z', z);
	z++;
}

var l = 0;
// e tambem é possivel nao colocar nada --- loop infinito
for(;;) {
	console.log('->', l++);

	if(l === 100) {
		break;
	}
}