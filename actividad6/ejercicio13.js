//Se trata de escribir el algoritmo que permita emitir la factura correspondiente a una compra
//de varios artículos (4) determinados, del que se adquieren una o varias unidades. El IVA es
//del 19%.

const readlineSync = require('readline-sync');

let subtotal = 0;

for (let numeroArticulo = 1; numeroArticulo <= 4; numeroArticulo++) {
	const cantidad = parseInt(readlineSync.question(`Ingrese la cantidad del artículo ${numeroArticulo}: `), 10);
	const precioUnitario = parseFloat(readlineSync.question(`Ingrese el precio unitario del artículo ${numeroArticulo}: `));
	const importe = cantidad * precioUnitario;

	subtotal += importe;
	console.log(`Artículo ${numeroArticulo}: ${cantidad} x ${precioUnitario.toFixed(2)} = ${importe.toFixed(2)}`);
}

const iva = subtotal * 0.19;
const totalFactura = subtotal + iva;

console.log('Subtotal: ' + subtotal.toFixed(2));
console.log('IVA (19%): ' + iva.toFixed(2));
console.log('Total de la factura: ' + totalFactura.toFixed(2));