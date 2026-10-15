//Suponga que un individuo desea invertir su capital en un banco y desea saber cuánto dinero
//ganará después de un mes si el banco paga a razón de 2% mensual.

const readlineSync = require('readline-sync');

let capital = parseFloat(readlineSync.question('Ingrese el capital a invertir: '));

let ganancia = capital * 0.02;
let total = capital + ganancia;

console.log('La ganancia mensual es: ' + ganancia.toFixed(2));
console.log('El total después de un mes es: ' + total.toFixed(2));