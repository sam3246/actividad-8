//Dada una cantidad de tiempo medida en horas, minutos y segundos, diga a cuántos segundos
//equivale.

const readlineSync = require('readline-sync');

let horas = parseInt(readlineSync.question('Ingrese las horas: '));
let minutos = parseInt(readlineSync.question('Ingrese los minutos: '));
let segundos = parseInt(readlineSync.question('Ingrese los segundos: '));

let totalSegundos = (horas * 3600) + (minutos * 60) + segundos;

console.log('El tiempo equivale a ' + totalSegundos + ' segundos.');