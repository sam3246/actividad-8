//Lea la distancia (en kilómetros) recorrida por un auto, el tiempo (en horas) en que la recorrió
//y calcule la velocidad a la cual se desplazaba el auto (V=D/T).

const readlineSync = require('readline-sync');

let distancia = parseFloat(readlineSync.question('Ingrese la distancia en kilometros: '));
let tiempo = parseFloat(readlineSync.question('Ingrese el tiempo en horas: '));

if (tiempo !== 0) {
    let velocidad = distancia / tiempo;
    console.log('La velocidad del auto es:', velocidad.toFixed(2), 'km/h');
} else {
    console.log('El tiempo no puede ser cero.');
}