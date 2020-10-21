$(function () {
	//o plugin que vamos usar é o jquery maskmoney
	//podemos baixar o arquivo js ou usar CDN
	// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-maskmoney/3.0.2/jquery.maskMoney.min.js"></script>


	//esta é a forma de utilizar o javascript puro
	//nao vai servir para o jquery. vamos precisar alterar

	/*var valorElement = document.getElementById('valor');
	var valorTotal = document.getElementById('total');

	valorElement.addEventListener('keyup', function(e){
		console.log('valor', valorElement.value);
		var total = 0;
		var valor = parseFloat(valorElement.value ? valorElement.value : 0);

		if(valor > 0 && valor < 10) {
			total = valor + valor * 0.3 + 5;
		} else if(valor >= 10 && valor < 50) {
			total = valor + valor * 0.1 + 2;
		} else {
			total = valor;
		}

		valorTotal.innerHTML = total;
	});*/

	var valorElement = $('#valor');
	var valorTotal = document.getElementById('total');
	var totalMascara = $('#total-mascara');
	var mascaraConfig = {decimal: ',', 
		thousands: '.',
		prefix: 'R$'
	};

	valorElement.on('keyup', function(e){
		//console.log('valor', valorElement.val());
		var total = 0;
		var valor = valorElement.maskMoney('unmasked')[0];
		//var valor = parseFloat(valorElement.val() ? valorElement.val() : 0);

		if(valor > 0 && valor < 10) {
			total = valor + valor * 0.3 + 5;
		} else if(valor >= 10 && valor < 50) {
			total = valor + valor * 0.1 + 2;
		} else {
			total = valor;
		}

		totalMascara.maskMoney(mascaraConfig);
		totalMascara.maskMoney('mask', total);

		valorTotal.innerHTML = totalMascara.val();
	});

	//pronto
	//agora falta fazer funcionar o plugin do jquery
	//por exemplo alterar a virgula para os milhares e o ponto para os decimais
	valorElement.maskMoney(mascaraConfig);

	//passar o valor ja em float para evitar as virgulas e pontos
	//var valor = valorElement.maskMoney('unmasked')[0];





});


