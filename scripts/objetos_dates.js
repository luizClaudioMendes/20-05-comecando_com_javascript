//para criar a data atual
var d1 = new Date();

console.log(d1); // 2020-10-14T12:58:18.673Z


//data especifica
var d2 = new Date("07/01/2016");

console.log(d2); // 2016-07-01T03:00:00.000Z

//data especifica com horas
var d3 = new Date("07/01/2016 05:12:35");

console.log(d3); // 2016-07-01T08:12:35.000Z

// ano/mes/dia
var d4 = new Date("2016-01-01");

console.log(d4); // 2016-01-01T00:00:00.000Z

//tempo UNIX
var d5 = new Date(1467827595397);

console.log(d5); // 2016-07-06T17:53:15.397Z