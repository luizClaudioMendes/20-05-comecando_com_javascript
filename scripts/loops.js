//for , for in, do while, while

//while
var z = 0;

//o while checa primeiro a expressao para depois executar o codigo
while (z < 10) {
	console.log("while = " + z);
	z = z + 1;
}


//do while
var y = 10;

do {
	console.log("do while = " + y);
	y = y - 1;
} while (y > 0);


//for

for (var w = 0; w < 10; w ++) {
	console.log("for = " + w);
};


//for in

var obj = {
	nome: "Jon",
	sobrenome: "snow",
	idade: 30
};

for (var chave in obj){
	console.log("chave = " + chave);//mostra a chave
	console.log("valor = " + obj[chave]);//obtem o valor
}