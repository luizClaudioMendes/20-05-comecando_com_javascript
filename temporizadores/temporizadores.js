$(function () {

	//temporizadores sao eventos que vao esperar algum 
	//tempo antes de serem executados
	//neste exemplo vamos exibir um video e
	//apos 5 segundos ele exibe um botao

	//setTimeout(function(){},tempo_em_milis);

	setTimeout(function(){
		$('#botao-clique-aqui').show();
	},5000);

});