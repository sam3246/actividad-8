//Realice un algoritmo que permita realizar el cálculo del siguiente enunciado, se
//solicita el año de nacimiento del aprendiz, el nombre, la dirección, se requiere
//conocer la edad de la persona y la información completa ingresada.

const readlineSync = require('readline-sync');

const anioNacimiento = parseInt(readlineSync.question('Ingrese el año de nacimiento: '), 10);
const nombre = readlineSync.question('Ingrese el nombre del aprendiz: ');
const direccion = readlineSync.question('Ingrese la dirección: ');
const edad = new Date().getFullYear() - anioNacimiento;

console.log('\n--- Información del aprendiz ---');
console.log('Nombre: ' + nombre);
console.log('Dirección: ' + direccion);
console.log('Año de nacimiento: ' + anioNacimiento);
console.log('Edad aproximada: ' + edad + ' años');