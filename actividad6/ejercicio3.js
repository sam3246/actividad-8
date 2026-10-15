//Dadas las 3 notas de un aprendiz, calcule la definitiva de la asignatura si la primera nota
//tiene un valor del 20%, la segunda del 30% y la última del 50%.

const readlineSync = require('readline-sync');

let nota1 = parseFloat(readlineSync.question('Ingrese la primera nota: '));
let nota2 = parseFloat(readlineSync.question('Ingrese la segunda nota: '));
let nota3 = parseFloat(readlineSync.question('Ingrese la tercera nota: '));

let definitiva = (nota1 * 0.20) + (nota2 * 0.30) + (nota3 * 0.50);

console.log('La definitiva de la asignatura es:', definitiva.toFixed(2));

