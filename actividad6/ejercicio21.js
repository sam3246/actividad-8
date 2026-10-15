//Se tienen tres baldes de agua, uno de cinco litros, otro de tres litros y otro de un
//litro; si el de un litro tarda una hora y media en llenarse, resuelva cuanto tiempo
//pueden tardar en llenarse los otros baldes.

//Si tiene tres baldes, pero se desconoce su tamaño debe de resolver igualmente el
//ejercicio.

const readlineSync = require('readline-sync');

const minutosPorLitro = 90;
const opcion = parseInt(readlineSync.question(
	'Seleccione una opción:\n1. Baldes de 5, 3 y 1 litro\n2. Ingresar capacidades desconocidas\nOpción: '
), 10);

if (opcion === 1) {
	const capacidades = [5, 3, 1];

	for (let numeroBalde = 0; numeroBalde < capacidades.length; numeroBalde++) {
		const tiempoHoras = capacidades[numeroBalde] * minutosPorLitro / 60;
		console.log(`Balde de ${capacidades[numeroBalde]} litro(s): ${tiempoHoras.toFixed(2)} horas`);
	}
} else if (opcion === 2) {
	for (let numeroBalde = 1; numeroBalde <= 3; numeroBalde++) {
		const capacidad = parseFloat(readlineSync.question(`Ingrese la capacidad del balde ${numeroBalde} en litros: `));
		const tiempoHoras = capacidad * minutosPorLitro / 60;
		console.log(`Tiempo para llenar el balde ${numeroBalde}: ${tiempoHoras.toFixed(2)} horas`);
	}
} else {
	console.log('Opción no válida. Seleccione 1 o 2.');
}