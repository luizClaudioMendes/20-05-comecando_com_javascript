$(function () {
	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	atividade.on('keyup', function (e) {
		var keyCode = e.keyCode;

		if(keyCode === 13) {
			//disparar o evento
			//listaAtividades.prepend('<li>' + atividade.val() + '</li>');
			//atividade.val('');

			//da forma acima funciona
			//mas nao é o melhor jeito de se fazer
			//adicionarNaLista(atividade.val());
			//atividade.val('');

			//mas ainda nao esta bom. poderiamos quere chamar varias
			//funcoes. entao a solucao seria disparar o evento aqui

			atividade.trigger('algaworks', atividade.val());
			atividade.val('');
		}
	});

	/*function adicionarNaLista(texto) {
		listaAtividades.prepend('<li>' + texto + '</li>');
	}*/

	//definicao de evento customizados
	atividade.on('algaworks', function (evento, parametro) {
		listaAtividades.prepend('<li>' + parametro + '</li>');
	});
});

