//Un estudiante realiza un préstamo a un plazo de 5 años, donde la tasa fija de
//interés es del 5% anual, se debe solicitar el monto del préstamo y se desea
//calcular la siguiente información.
//• • Cuanto dinero se ha pagado de intereses en un año.
//• • Cuanto dinero se ha pagado de intereses en el tercer trimestre del año.
//• • Cuanto dinero se ha pagado de intereses en el primer mes.
//• • Cuanto dinero se paga en total del préstamo solicitado incluyendo intereses.

const readlineSync = require('readline-sync');

const montoPrestamo = parseFloat(readlineSync.question('Ingrese el monto del préstamo: '));
const tasaAnual = 0.05;
const plazoAnios = 5;

const interesAnual = montoPrestamo * tasaAnual;
const interesTrimestral = interesAnual / 4;
const interesMensual = interesAnual / 12;
const interesTotal = interesAnual * plazoAnios;
const totalPrestamo = montoPrestamo + interesTotal;

console.log('Intereses pagados en un año: ' + interesAnual.toFixed(2));
console.log('Intereses pagados en el tercer trimestre: ' + interesTrimestral.toFixed(2));
console.log('Intereses pagados en el primer mes: ' + interesMensual.toFixed(2));
console.log('Total a pagar por el préstamo en 5 años: ' + totalPrestamo.toFixed(2));