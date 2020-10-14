//o js aceita tanto numeros decimais quanto inteiros, usando o ponto

//inteiros
var n1 = 34;
console.log(n1); 

//decimais
var n2 = 34.76;
console.log(n2); 

//numeros grandes (exponenciais)
var n3 = 456e5;//4600000
console.log(n3); 

var n4 = 123e-6;//0.000123
console.log(n4); 

//a capacidade de armazenamento do js é de 15 digitos
//a partir disso ocorre overflow ou underflow
var n5 = 999999999999999;//15 digitos
console.log(n5); 

var n6 = 9999999999999999;//16 digitos (overflow) 
console.log(n6); //10000000000000000


var n7 = 0.9999999999999999;//16 digitos
console.log(n7); 

var n8 = 0.99999999999999999;//17 digitos (underflow) 
console.log(n8); //1


//decimal
var decimal = 256;
console.log(decimal);//256

//hexadecimal
var hexa = 0x100;
console.log(hexa);//256

var hexa1 = 0xFFF;
console.log(hexa1);//4095

//octadecimal
var octal = 07777;
console.log(octal);//4095

// o toString sempre converte o numero para decimal
//para escolher qual a base:

var convert = 07777;//4095
console.log(convert.toString());//decimal
console.log(convert.toString(16));//hexa
console.log(convert.toString(8));// octal
console.log(convert.toString(2));//binario


//exponencial
console.log(convert.toExponential());//4.095e+3

//quantas casas no exponencial
console.log(convert.toExponential(4)); //4.0950e+3
console.log(convert.toExponential(2)); //4.10e+3 --- arredondado

//exibir um numero especifico de decimais com numeros pequenos
var smallNumber = 0.000000783;
console.log(smallNumber);//7.83e-7

console.log(smallNumber.toFixed(2));//0.00 -- arrendondou para baixo

//exemplo preco da gasolina
var gasolina = 3.357;
console.log(gasolina.toFixed(2));//3.36 -- arredondou para cima

gasolina = 3.324;
console.log(gasolina.toFixed(2));//3.32 -- arredondou para baixo

//o toFixed somente opera nos decimais (casas apos a virgula)

//o toPrecision opera no numero como um todo
console.log(gasolina.toPrecision(2));//3.3
console.log(gasolina.toPrecision(4));//3.324
console.log(gasolina.toPrecision(6));//3.32400
console.log(gasolina.toPrecision(10));//3.324000000

