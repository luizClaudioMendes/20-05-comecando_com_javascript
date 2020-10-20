//fazer um ajax no servidor
//localhost:8080/estados
//para preencher o combo

//como fazer uma requisicao ajax com o jquery?


$(function () {//somente depois de a tela acabar de carregar
	/*$.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET'
	});*/

	//ao acessar desta forma no browser, como estamos usando o html em um file, ocorre um erro de segurança
	/*Access to XMLHttpRequest at 'http://localhost:8080/estados' from origin 'null' has been blocked by CORS policy: 
	No 'Access-Control-Allow-Origin' header is present on the requested resource.*/
	//o javascript tentou acessar o localhost, mas no browser estou em um file
	//nisso o browser percebe e bloqueia
	//como resolver?
	//na documentacao do Jquery, basta procurar por dataType
	//e dar uma lida na parte dos paramentros
	// ao encontrar o "jsonp" 
	// no caso o problema ocorre porque o html esta em um dominio (file) e o js esta em outro (localhost)
	// entao o ajax fica:
	/*$.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp'
	});*/
	//o servidor tambem precisa estar configurado para receber o jasonp

	//pronto agora esta funcionando

	//o ajax é isso. ele foi no servidor e retornou os dados
	//como fazemos para pegar os resultados?

	//existem alguns callbacks no jquery (callbacks sao funcoes que posso chamar apos o retorno dos dados)

	/*$.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp',
		success: function(data) {
			console.log('voltou com sucesso', data);
		},
		error: function() {

		}
	});*/

	//mas nao é legal fazer assim, e sim usar as promises

	// o objeto retornado pelo ajax implementa as promises
	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp'//necessario somente porque nao estamos no mesmo dominio
	});

	//como é uma chamada externa, para o programa nao travar
	// agente pode utilizar
	//ex. de promise
	resposta.done(function (estados) {
		console.log('tude certo', estados);
		//a resposta foi um array com os estados
		estados.forEach(function(estado) {
			console.log(estado);

		});
	});

	//é possivel registra mais de uma promise
	/*resposta.done(function (estados) {
		console.log('tude certo', estados);
	});/*

	//é possivel registra uma promise fail
	resposta.fail(function () {
		alert('erro carregando');
	});
});