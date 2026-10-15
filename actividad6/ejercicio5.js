//Lea la cantidad de dinero correspondiente a una compra y calcule el valor del IVA (19%), y
//el valor total de la factura, si al valor de la compra se le autoriza un descuento del 10%
//(antes de aplicarle el IVA).

const readlineSync = require('readline-sync');

let compra = parseFloat(readlineSync.question('Ingrese el valor de la compra: '));

let descuento = compra * 0.10;
let subtotalConDescuento = compra - descuento;
let iva = subtotalConDescuento * 0.19;
let totalFactura = subtotalConDescuento + iva;

console.log('Descuento: ' + descuento.toFixed(2));
console.log('IVA (19%): ' + iva.toFixed(2));
console.log('Total de la factura: ' + totalFactura.toFixed(2));
