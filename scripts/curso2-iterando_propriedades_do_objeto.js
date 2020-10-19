var pedro = {
	nome: 'pedro',
	idade: 25,
	endereco: {
		logradouro: 'Av brasil',
		numero: 100,
		complemento: 'apto 202',
		cidade: 'Rio de janeiro',
		estado: 'RJ'
	}
};

//para iterar pelas propriedades do objeto
//utilizamos o for in

for (var prop in pedro) {
	console.log(prop);
}

/*
nome
idade
endereco
*/

//para ver os valores devemos usar as propriedades dinamicas

for (var prop in pedro) {
	console.log('prop -> ', pedro[prop]);
}

//forma mais visivel
for (var prop in pedro) {
	console.log(prop, '-> ', pedro[prop]);
}
