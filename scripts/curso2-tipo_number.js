/*	
	=> ver ### Aula 5.2 funcoes uteis -- manipulando numeros

	os decimais do javascritp sao de 64 bits, iguais aos 
	doubles primitivos do java.

	#### problemas de precisao nos decimais
	
	os decimais no javascript tem o problema de precisao, 
	igual ao primitivo do java tambem.

	entao devemos prestar atençao para a correta maneira de 
	fetuar contas no javascript
	*/
	var x = 0.3 - 0.2;
	console.log(x);//0.09999999999999998

	/*para resolver esse problema podemos multiplicar o 
	numero de forma a tira-lo de decimal e ficar como um 
	inteiro. depois dividimos todos os numeros pelo mesmo 
	numero que multiplicamos

	ex: 
	0.3 	podemos multiplicar por 10 para ficar como 3
	0.03 	podemos multiplicar por 100 para ficar como 3
	0.003	podemos multiplicar por 1000 para ficar como 3

	assim a conta 0.3 - 0.2 ficaria:
	*/
	var x = (0.3 * 10 - 0.2 * 10) / 10;
	console.log(x);//0.1

	/*
	#### problemas de infinito

	um numero dividido por zero resultara em infinito.

	o infinito ainda é do tipo number.

	*/
	var i = 10 / 0; //Infinity
	console.log(i);

	i = -10 / 0; //-Infinity
	console.log(i);

	/* 
	#### problemas de NaN not a number

	Nan é do tipo number
	*/

	i = 10 / 'teste string';//NaN
	console.log(i);

	/*
		o javascript tenta converter a string para um numero.
		caso a string seja '2', ele conseguira converter para 2.

		para validar se um numero é NaN, existem algumas 
		funcoes para isso.

		ex:
		if(isNaN(i)) {
			....
		}

	*/

	console.log(isNaN(i));


