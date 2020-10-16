//operadores logicos
// #### || e && 

var ativo = true;
var admin = false;

//&& - independe da ordem
console.log(ativo && admin);//false - os dois tem que ser true para ser verdadeiro
console.log(admin && ativo);//false -  os dois tem que ser true para ser verdadeiro

//|| - independe da ordem
console.log(ativo || admin);//true - um dos dois tem que ser true para ser verdadeiro
console.log(admin || ativo);//true - um dos dois tem que ser true para ser verdadeiro

// #### | e &
//& - independe da ordem
console.log(ativo & admin);//0 
console.log(admin & ativo);//0

//| - independe da ordem
console.log(ativo | admin);//1
console.log(admin | ativo);//1

/* os operadores logicos simples (& e |) utiliza valores binarios
ex:
10 		= 	1010 (binario)
1 		=	0001
------------------------
10 | 1 	= 	1011 -> 11	 
*/
console.log(10 | 1);//11

/* --- no & os dois tem que ser 1 para resultar 1
10 		= 	1010 (binario)
1 		=	0001
------------------------
10 & 1 	= 	0000 -> 0
*/
console.log(10 & 1);//0
