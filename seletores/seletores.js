//precisamos que o javascript somente execute
//somente quando o html estiver totalmente carregado
//$();
//se colocarmos uma funcao no parametro acima, ela sera executada 
$(function () {
	//marcar o checkbox de selecionado todos
	//pelo id
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	//o # informa que estamos usando o id

	//selecionar todas as outras checkboxes
	// pelo hook, de uma classe css, mesmo que ela nao existe
	// no caso a classe é js-selecao-usuario
	// por convençao, quando usamos uma classe css
	// que nao existe para fazer esse hook
	// agente coloca o js- antes do nome da classe css
	var selecaoUsuarios = $('.js-selecao-usuario'); //o ponto indica que é uma classe css

	//evento
	/*selecaoUsuarios.on('click', function(e) {
		console.log('clicou');
		//pegar todos os componentes da classe .js-selecao-usuario que estao com o check marcado
		var totalUsuariosSelecionados = $('.js-selecao-usuario:checked').length;

		console.log(totalUsuariosSelecionados);

		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked', checked);
	});*/

	//da forma acima, o evento ja funciona.
	//mas vamos dar uma melhorada nele

	selecaoUsuarios.on('click', function(e) {
		console.log('clicou');
		//pegar todos os componentes da classe .js-selecao-usuario que estao com o check marcado
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length; //aplicando o .filter do jquery

		console.log(totalUsuariosSelecionados);

		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked', checked);
	});

	//agora vamos tratar o botao de selecionar todos
	selecaoTodosUsuarios.on('click', function (e) {
		//queremos que, se o botao de selecionar todos for true
		//todos os outros botoes fiquem true
		//se for false, todos os outros fiquem false
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
	});

});

