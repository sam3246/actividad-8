//En una universidad los estudiantes pueden pagar el valor de su matrícula en cuatro cuotas de
//la siguiente forma
//● Primera cuota: 40%
//● Segunda cuota: 25%
//● Tercera cuota: 20%
//● Cuarta cuota: 15%
//Diga cuanto es el valor que tiene que pagar por cuota un estudiante.

const readlineSync = require('readline-sync');

const valorMatricula = parseFloat(readlineSync.question('Ingrese el valor total de la matrícula: '));

const primeraCuota = valorMatricula * 0.40;
const segundaCuota = valorMatricula * 0.25;
const terceraCuota = valorMatricula * 0.20;
const cuartaCuota = valorMatricula * 0.15;

console.log('Primera cuota (40%): ' + primeraCuota.toFixed(2));
console.log('Segunda cuota (25%): ' + segundaCuota.toFixed(2));
console.log('Tercera cuota (20%): ' + terceraCuota.toFixed(2));
console.log('Cuarta cuota (15%): ' + cuartaCuota.toFixed(2));