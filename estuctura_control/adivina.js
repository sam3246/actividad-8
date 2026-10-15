const readlineSync = require('readline-sync');
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let adivinanza;
do {
    adivinanza = parseInt(readlineSync.question('Adivina el numero entre 1 y 10: '));
    if (adivinanza !== numeroAleatorio) {
        console.log('Incorrecto, intenta de nuevo.');
    }
else{
    console.log('¡Felicidades! el numero era ' + numeroAleatorio);
}
} while (adivinanza !== numeroAleatorio);