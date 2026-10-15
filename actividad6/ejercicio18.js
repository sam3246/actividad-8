//Ingresar, para un estudiante, sus 5 notas de un curso, nombre, programa, ficha.
//Hacer un algoritmo que:
//• Muestre el nombre
//• Muestre el programa de formación
//Se debe calcular y mostrar su promedio final.

const readlineSync = require('readline-sync');

const nombre = readlineSync.question('Ingrese el nombre del estudiante: ');
const programa = readlineSync.question('Ingrese el programa de formación: ');
const ficha = readlineSync.question('Ingrese el número de ficha: ');

const nota1 = parseFloat(readlineSync.question('Ingrese la primera nota: '));
const nota2 = parseFloat(readlineSync.question('Ingrese la segunda nota: '));
const nota3 = parseFloat(readlineSync.question('Ingrese la tercera nota: '));
const nota4 = parseFloat(readlineSync.question('Ingrese la cuarta nota: '));
const nota5 = parseFloat(readlineSync.question('Ingrese la quinta nota: '));

const promedioFinal = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

console.log('\n--- Resultado del estudiante ---');
console.log('Nombre: ' + nombre);
console.log('Programa de formación: ' + programa);
console.log('Ficha: ' + ficha);
console.log('Promedio final: ' + promedioFinal.toFixed(2));