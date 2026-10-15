//Suponga que tiene Ud. una tienda y desea registrar las ventas en una computadora. Diseñe
//un algoritmo en pseudocódigo que lea por cada cliente:
//● El monto de la venta, calcule e imprima el IVA.
//● calcule e imprima el total a pagar
//● lea la cantidad con la que paga el cliente (solo efectivo), calcule e imprima el cambio. 2

const readlineSync = require('readline-sync');

const montoVenta = parseFloat(readlineSync.question('Ingrese el monto de la venta: '));
const iva = montoVenta * 0.19;
const totalPagar = montoVenta + iva;

console.log('IVA (19%): ' + iva.toFixed(2));
console.log('Total a pagar: ' + totalPagar.toFixed(2));

const pago = parseFloat(readlineSync.question('Ingrese el monto pagado en efectivo: '));
const diferencia = pago - totalPagar;

if (diferencia >= 0) {
	console.log('Cambio: ' + diferencia.toFixed(2));
} else {
	console.log('Pago insuficiente. Falta: ' + Math.abs(diferencia).toFixed(2));
}