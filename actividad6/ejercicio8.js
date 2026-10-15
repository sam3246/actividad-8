//Un vendedor recibe un sueldo base más un 10% extra por comisión de sus ventas, el vendedor
//desea saber cuánto dinero obtendrá por concepto de comisiones por las tres ventas que
//realiza en el mes y el total que recibirá en el mes tomando en cuenta su sueldo base y
//comisiones.

const readlineSync = require('readline-sync');

const sueldoBase = parseFloat(readlineSync.question('Ingrese el sueldo base: '));
const venta1 = parseFloat(readlineSync.question('Ingrese el monto de la primera venta: '));
const venta2 = parseFloat(readlineSync.question('Ingrese el monto de la segunda venta: '));
const venta3 = parseFloat(readlineSync.question('Ingrese el monto de la tercera venta: '));

const comisiones = (venta1 + venta2 + venta3) * 0.10;
const totalMensual = sueldoBase + comisiones;

console.log('El total por comisiones es: ' + comisiones.toFixed(2));
console.log('El total que recibirá en el mes es: ' + totalMensual.toFixed(2));