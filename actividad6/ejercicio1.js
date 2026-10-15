// Lea dos números y calcule el resultado de su suma, resta, multiplicación y división.
// Lea dos números y calcule el resultado de su suma, resta, multiplicación y división.

const readlineSync = require('readline-sync');

let numero1 = parseFloat(readlineSync.question('Ingrese el primer numero: '));
let numero2 = parseFloat(readlineSync.question('Ingrese el segundo numero: '));

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;

console.log("suma:", suma);
console.log("resta:", resta);
console.log("multiplicacion:", multiplicacion);

// Validamos que no se divida entre cero
if (numero2 !== 0) {
    let  = divisionnumero1 / numero2;
    console.log("division:", division);
} else {
    console.log("division: No es posible dividir entre cero.");
}