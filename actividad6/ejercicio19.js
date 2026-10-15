//Ingresar el precio de compra unitario de un producto y la cantidad de compra de
//dicho producto y un descuento. Calcular y mostrar el subtotal, el monto del IVA
//que es el 19% del subtotal, y el precio neto (precio parcial con el Monto del IVA).

const readlineSync = require('readline-sync');

const precioUnitario = parseFloat(readlineSync.question('Ingrese el precio unitario del producto: '));
const cantidad = parseInt(readlineSync.question('Ingrese la cantidad comprada: '), 10);
const descuento = parseFloat(readlineSync.question('Ingrese el descuento en dinero: '));

const subtotal = precioUnitario * cantidad - descuento;
const iva = subtotal * 0.19;
const precioNeto = subtotal + iva;

console.log('Subtotal después del descuento: ' + subtotal.toFixed(2));
console.log('IVA (19%): ' + iva.toFixed(2));
console.log('Precio neto: ' + precioNeto.toFixed(2));