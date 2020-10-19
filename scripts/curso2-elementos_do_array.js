var acessorio = {som: 'Pioneer', banco: 'Couro'};

var ligar = function () {
	console.log('Ligando o carro!');
}
var fox = ['Fox', 4, acessorio, ligar];

console.log(fox);

console.log(fox[2].som); // Pioneer

fox[3]();

// o array pode ter qualquer tipo de dado
// inclusive misturados como o exemplo do fox

