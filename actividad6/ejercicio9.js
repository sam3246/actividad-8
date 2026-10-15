//Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber
//cuánto deberá pagar finalmente por su compra.

const readlineSync = require('readline-sync');

const totalCompra = parseFloat(readlineSync.question('Ingrese el total de la compra: '));
const descuento = totalCompra * 0.15;
const totalPagar = totalCompra - descuento;

console.log('El descuento aplicado es: ' + descuento.toFixed(2));
console.log('El total a pagar es: ' + totalPagar.toFixed(2));