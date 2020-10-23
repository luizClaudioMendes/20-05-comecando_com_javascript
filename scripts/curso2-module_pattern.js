//o module pattern é um padrao que utilizamos
//para encapsular coisas no javascript

// um exemplo bom para exemplificar o padrao
// e um contador
var contador = {
	valor: 0,
	incrementar: function() {
		this.valor++;
	},
	reset: function () {
		console.log('valor do contator agora:', this.valor);
		this.valor = 0;
	}
}


contador.incrementar();
contador.incrementar();

contador.reset();

contador.incrementar();

contador.reset();

//embora esta forma de implementar funcione,
// ela NAO é uma boa forma de se fazer isso

//porque eu tenho acesso direto a propriedade valor
//do objeto contador

//entao eu poderia facilmente colocar isto aqui
//contador.valor = 'algaworks';
//contador.incrementar();
//contador.reset();
//valor do contator agora: NaN

//_______________________________

//APLICANDO O MODULE PATTERN

/*var contadorModule = function() {
	var valor = 0;
}*/

//a variavel valor deste jeito esta encapsulada
//nao é possivel acessa-la de fora da funcao

//entao qual foi a sacada do pessoal que inventou o pattern?
//eu posso entao adicionar dentro da funcao as variaveis que 
//eu quero que sejam privadas e vou retornar apenas as variaveis que quero que sejam publicas
/*
var contadorModule = function() {
	var valor = 0;//privado

	return {
		incrementar: function() {
			valor++;
		},
		reset: function() {
			console.log('valor do contador do pattern:', valor);
			valor = 0;
		}
	}
}*/

//se executarmos desta forma:
//contadorModule.incrementar();
//TypeError: contadorModule.incrementar is not a function

//entao precisamos executar assim:
//contadorModule().incrementar();
//contadorModule().incrementar();
//contadorModule().reset();
//valor do contador do pattern: 0

//opa ainda nao funcionou direito

//precisamos aplicar a tecnica da funcao auto executada,
//que mantem o escopo das variaveis privadas ativas, mesmo depois 
//do termino da execucao

//entao fazemos assim:
var contadorModule = (function() {
	var valor = 0;//privado

	return {
		incrementar: function() {
			valor++;
		},
		reset: function() {
			console.log('valor do contador do pattern:', valor);
			valor = 0;
		}
	}
})();

contadorModule.incrementar();
contadorModule.incrementar();
contadorModule.reset();

//valor do contador do pattern: 2