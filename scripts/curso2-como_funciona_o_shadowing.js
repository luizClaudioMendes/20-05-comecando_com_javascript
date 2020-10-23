var volks = {
	fabricante: 'vw'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111'
}

console.log('fox.fabricante', fox.fabricante);
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante', fox.fabricante);

//na primeira execucao do fox.fabricante, sera exibido
// undefined, porque o objeto nao tem a propriedade
// fabricante e nao tem o objeto volks setado como prototype

//na segunda execucao do fox.fabricante, sera exibido
// vw pois ja foi definido o prototype do objeto que tem
// a propriedade fabricante nele

//____________________________

var ford = {
	fabricante: 'ford'
}

var fiesta = {
	nome: 'Fiesta',
	placa: 'AAA-2222',
	fabricante: 'ferrari'
}

console.log('fiesta.fabricante', fiesta.fabricante);
Object.setPrototypeOf(fiesta, ford);
console.log('fiesta.fabricante', fiesta.fabricante);

//shadowing
//neste exemplo, adicionamos a propriedade fabricante
// no objeto fiesta. entao agora, ele possui uma 
// propriedade fabricante e tem um objeto de prototipo
// com uma propriedade fabricante tambem.
// o shadowing atua e exibe a propriedade mais proxima
// ou seja, a do objeto fiesta
//____________________________

//toString
// o toString somente exibe propriedades do objeto.
// ele nao exibe proprieadades do prototipo nem do 
// o prototipo
console.log('Fiesta', fiesta);
//Fiesta { nome: 'Fiesta', placa: 'AAA-2222', fabricante: 'ferrari' }

//e se nos apagarmos a propriedade?
delete fiesta.fabricante;
console.log('fiesta.fabricante ->', fiesta.fabricante);
//agora o shadowing nao vai existir, pois apagamos a propriedade
//do objeto mais proximo, entao ele vai procurar no prototipo
//se existe a propriedade
//fiesta.fabricante -> ford

console.log('Fiesta', fiesta);
//e o toString volta a exibir somente as propriedades do objeto
//Fiesta { nome: 'Fiesta', placa: 'AAA-2222' }
//____________________________

//mas existe alguma forma de exibir todas as propriedades,
// inclusive as dos prototipos?

//basta usar o for in
for(prop in fiesta) {
	console.log(prop);
}
//nome - objeto
//placa - objeto
//fabricante - prototipo

//legal. e agora, tem como agente saber se a propriedade
// é do objeto ou do prototipo?

for(prop in fiesta) {
	console.log('propriedade -> ' + prop + '/' + fiesta.hasOwnProperty(prop));
}

//propriedade -> nome/true -- do obejto
//propriedade -> placa/true -- do objeto
//propriedade -> fabricante/false -- do prototipo