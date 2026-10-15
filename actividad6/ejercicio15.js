//Suponga que un conductor le pide a usted que le haga un algoritmo para calcular cuánto le
//corresponde en un día trabajado, teniendo en cuenta que tiene derecho a el 19% del total
//recaudado.

const readlineSync = require('readline-sync');

const totalRecaudado = parseFloat(readlineSync.question('Ingrese el total recaudado en el día: '));
const pagoConductor = totalRecaudado * 0.19;

console.log('Al conductor le corresponde: ' + pagoConductor.toFixed(2));