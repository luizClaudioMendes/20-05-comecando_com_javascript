$(function () {

//associar o click do botao
	$('#botao1').on('click', function (evento) {
		console.log(arguments);
		console.log(evento);
		console.log('botao 1 clicado');
	});

	$('#link1').on('click', function (e) {
		console.log('link 1 clicado');

		//impedir que ao clicar no link o redirecionamento
		//para o google seja executado
		e.preventDefault();


	});

	$('#input1').on('keyup', function (e) {
		console.log(e.keyCode);

		if(e.keyCode === 13) {
			alert('enter pressionado');
		}

	});





});

//embora seja tecnicamente viavel, nao é recomendada
//esta abordagem.  o comportamento nao deve estar misturado com
//a apresentacao.

//o javascript direto no html tambem nao é recomendado.
//cada linguagem deve ficar separada (html no html e javascript no javascript)
function botao3Clicado () {
		console.log('botao 3 clicado');	
}