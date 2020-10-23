/*$(function () {
	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp'
	});

	resposta.done(function (estados) {
		var comboEstado = $('#combo-estado');
		comboEstado.html('<option>Selecione o estado</option>');

		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);

			comboEstado.append(optionEstado);//insere na ultima posicao
		});
	});
});
*/

//o exemplo anterior era um exemplo ja utilizado nas aulas.
//ele basicamente, apos o carregamento completo da tela,
//consultava o servico e buscava os nomes dos estados.
// após isso, ele montava o combo de estados da tela

//nesta nova abordagem, vamos alterar e terminar a tela
//usando module pattern, funcao bind e a funcao contrutora

/*
var estado = (function () {
	var comboEstado = $('#combo-estado');

	function iniciar () {
		console.log('iniciando o estado...');
		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			success: onEstadosRetornados,
			error: onError
		});
	}

	function onEstadosRetornados(estados) {
		comboEstado.html('<option>Selecione o estado</option>');

		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);

			comboEstado.append(optionEstado);
		});
	}

	function onError() {
		alert('erro carregando os estados do servidor');
	}
	return {
		iniciar: iniciar
	}


})();

estado.iniciar();
*/
// a forma utilizada acima esta correta e em comparacao com a primeira
// ja possui bastante elegancia, com a utilizacao do module pattern

//mas ainda nao é o que queremos

//____________________________

var Estado = (function () {
	function Estado() {
		this.comboEstado = $('#combo-estado');

	}

	Estado.prototype.iniciar = function() {
		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			success: onEstadosRetornados.bind(this),//trocando o objeto. neste momento o this representa o obj do jquery e queremos que o this represente o obj estado
			error: onError
		});
	}






	/*

	function iniciar () {
		console.log('iniciando o estado...');
		
	}*/

	function onEstadosRetornados(estados) {
		this.comboEstado.html('<option>Selecione o estado</option>');

		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);

			this.comboEstado.append(optionEstado);
		}.bind(this));//trocar o obj this. neste momento o obj this representa a window e queremos que o obj this seja o obj estado
	}

	function onError() {
		alert('erro carregando os estados do servidor');
	}

	return Estado;


})();

$(function() {
	var estado = new Estado();
	estado.iniciar();
});

// a troca do this usando o bind é para alterar o objeto de contexto
// na hora da execucao.