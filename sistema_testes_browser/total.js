console.log('iniciando o js');

//pegar o elemento que tem o input do valor
var valorElement = document.getElementById('valor');
var valorTotal = document.getElementById('total');

//adicionar um event listner

//event listener com problemas para testar o debug
/*
valorElement.addEventListener('keyup', function(e){
	console.log('valor', valorElement.value);
	var total = 0;
	var valor = valorElement.value;

	if(valor < 10) {
		total = valor + valor * 0.3 + 5;
	}

	valorTotal.innerHTML = total;
});
*/
//para fazer o debug va no developer tools
//na aba sources
//selecione o arquivo js
//clicando no numero da linha é adicionado um breakpoint

//ao executar o codigo podemos clicar em:
// => botao com pipe e play - avança ate ao proximo brakpoint ou fim do arquivo
// => botao com arco iris e um ponto - avança pra proxima linha

//verificamos que na event listener anterior, estava acontecendo uma concatenacao
//o numero 1 digitado esta sendo enviado como string
//e assim ele fazia a seguinte conta:

//ex: digitado 1
/*
total = valor + valor * 0.3 + 5;
total = '1' + 1*0.3 + 5
total = '1' + 0.3 + 5
total = '10.3' + 5
total = '10.35'
*/

//event listener corrigido 
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
});

//com essa correçao, o numero inserido vira realmente um numero
// e a conta é realizada corretamente
// mais outras alteracoes foram realizadas para 
// sanar as situacoes:
// digitar 1
//digitar 10
//digitar 100
//apagar todos os digitos