var joao = {
	nome: 'joao',
	idade: 25,
	logradouro: 'Av brasil',
	numero: 100,
	complemento: 'apto 202',
	cidade: 'Rio de janeiro',
	estado: 'RJ'
};

console.log(joao);

//para se organizar melhor o objeto joao os dados 
//do endereco pode ser um outro objeto

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

//acessar o atributo dentro do objeto do objeto
console.log(pedro.endereco.cidade);

//alterar atributos dentro de obhetos do objeto
pedro.endereco.numero = 404;

console.log(pedro);

//acessar atributo dentro de um objeto que nao existe
console.log(joao.endereco);//undefined

//acessar atributo de um objeto de um objeto que nao existe
//console.log(joao.endereco.cidade);// erro : TypeError: Cannot read property 'cidade' of undefined

//acesso dinamico do objeto dentro do objeto
console.log('Estado:', pedro['endereco']['estado']);

