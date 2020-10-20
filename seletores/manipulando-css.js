$(function () {
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuario'); 

	selecaoUsuarios.on('click', function(e) {
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked', checked);
	});

/*
	selecaoTodosUsuarios.on('click', function (e) {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
	});
*/

/*
	selecaoUsuarios.on('change', function(evento) {
		console.log('evento', evento);
		var selecaoUsuario = $(evento.target);//transforma o objeto html em objeto jquery
		console.log('selecao usuario', selecaoUsuario);
		
		//como a variavel selecaoUsuario é um objeto jquery
		//agente pode verificar se ela esta marcada com o checked
		if(selecaoUsuario.prop('checked'))  {
			//precisamos mudar o css do tr e nao do seletor
			//precisamos procurar nos pais dele ate chegar no primeiro tr
			selecaoUsuario.parents('tr').addClass('selecionado');
			//o parents no plural procura em todos os pais do elemento. o parent no singular
			//procura somente pai mais proximo
			// no parent, ao usar 'tr' estamos informando que queremos que ele procure
			// pelo elemento tr. tambem podemos procurar por classes (.nomeClasse) ou id (#id)
		}else {
			//para retirar o css
			selecaoUsuario.parents('tr').removeClass('selecionado');
		}
	});

	*/

		//mas com a nossa implementacao ate ao momento,
		//nao vai funcionar se clicarmos no selecionar todos.

		//entao adicionamos no evento do clique em todos o comportamento:
	/*
	selecaoTodosUsuarios.on('click', function (e) {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
		if(selecaoTodosUsuarios.prop('checked')) {
			selecaoUsuarios.parents('tr').addClass('selecionado');
		}else {
			selecaoUsuarios.parents('tr').removeClass('selecionado');
		}

	});
	*/


	//ok. funcionou.
	//mas agora temos trechos do codigo duplicado
	// entao vamos criar esta funcao
	function estilizarLinhaUsuarios() {
		selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
	}

	//e alterar nos eventos

	selecaoUsuarios.on('change', function(evento) {
		//var selecaoUsuario = $(evento.target);
		/*
		if(selecaoUsuario.prop('checked'))  {
			selecaoUsuario.parents('tr').addClass('selecionado');
		}else {
			selecaoUsuario.parents('tr').removeClass('selecionado');
		}*/
		estilizarLinhaUsuarios();
	});
	selecaoTodosUsuarios.on('click', function (e) {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
		/*if(selecaoTodosUsuarios.prop('checked')) {
			selecaoUsuarios.parents('tr').addClass('selecionado');
		}else {
			selecaoUsuarios.parents('tr').removeClass('selecionado');
		}*/
		estilizarLinhaUsuarios();
	});




});

