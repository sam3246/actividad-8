//Dada las horas trabajadas de una persona y el valor por hora. Calcular su salario e imprimirlo.

const readlineSync = require('readline-sync');

const horasTrabajadas = parseFloat(readlineSync.question('Ingrese las horas trabajadas: '));
const valorPorHora = parseFloat(readlineSync.question('Ingrese el valor por hora: '));
const salario = horasTrabajadas * valorPorHora;

console.log('El salario es: ' + salario.toFixed(2));