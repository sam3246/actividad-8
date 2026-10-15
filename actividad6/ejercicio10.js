//Un alumno desea saber cuál será su calificación final en la materia de Algoritmos. Dicha
//calificación se compone de los siguientes porcentajes:
//55% del promedio de sus tres calificaciones parciales.
//30% de la calificación del examen final.
//15% de la calificación de un trabajo final.

const readlineSync = require('readline-sync');

const parcial1 = parseFloat(readlineSync.question('Ingrese la primera calificación parcial: '));
const parcial2 = parseFloat(readlineSync.question('Ingrese la segunda calificación parcial: '));
const parcial3 = parseFloat(readlineSync.question('Ingrese la tercera calificación parcial: '));
const examenFinal = parseFloat(readlineSync.question('Ingrese la calificación del examen final: '));
const trabajoFinal = parseFloat(readlineSync.question('Ingrese la calificación del trabajo final: '));

const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
const calificacionFinal = promedioParciales * 0.55 + examenFinal * 0.30 + trabajoFinal * 0.15;

console.log('La calificación final en Algoritmos es: ' + calificacionFinal.toFixed(2));