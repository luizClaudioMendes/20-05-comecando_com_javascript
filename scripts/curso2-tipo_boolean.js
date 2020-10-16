var ativo = true;

console.log(ativo);
console.log(typeof ativo);

/* #### o que da false e o que da true no JS?
=> 0 é false
ex: if(0) {.....}, nunca entrara aqui porque 0 sempre é false

=> '' é false (string vazia)

=> NaN é false

=> null é false

=> undefined é false

=> false é false
*/
 console.log(!!1);//true
 console.log(!!0);//false
 console.log(!!'');//false
 console.log(!!NaN);//false
 console.log(!!null);//false
 console.log(!!undefined);//false
 console.log(!!false);//false
