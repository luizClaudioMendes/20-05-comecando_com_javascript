$(function () {//somente depois de a tela acabar de carregar
	var resposta = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp'//necessario somente porque nao estamos no mesmo dominio
	});

	resposta.done(function (estados) {
		var comboEstado = $('#combo-estado');
		//comboEstado.empty(); para limpar a lista do combo
		comboEstado.html('<option>Selecione o estado</option>');
		console.log('tude certo', estados);
		//a resposta foi um array com os estados
		estados.forEach(function(estado) {
			console.log('UF: ', estado.uf);
			console.log('nome: ', estado.nome);
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			console.log(optionEstado);
			comboEstado.append(optionEstado);//insere na ultima posicao
			//comboEstado.prepend(optionEstado);//insere no inicio


		});
	});
});