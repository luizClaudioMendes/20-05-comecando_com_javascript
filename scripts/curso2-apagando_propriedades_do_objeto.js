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

console.log(pedro);

//para apagar uma propriedade de um objeto

delete pedro.idade;
console.log(pedro);

// tambem é possivel apagar as propriedades de um objeto dentro de outro objeto
delete pedro.endereco.logradouro;
console.log(pedro);