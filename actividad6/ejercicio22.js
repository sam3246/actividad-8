//Una persona tarda 5 horas en subir una montaña de 7 metros, si un escalador
//desea subir más o menos de la montaña, cuanto tiempo tarda en subir. Debe de
//resolver el ejercicio.

const readlineSync = require('readline-sync');

const alturaDeseada = parseFloat(readlineSync.question('Ingrese la altura que desea subir en metros: '));

if (alturaDeseada < 0) {
	console.log('La altura no puede ser negativa.');
} else {
	const tiempoHoras = alturaDeseada * 5 / 7;
	console.log(`El tiempo estimado para subir ${alturaDeseada} metros es ${tiempoHoras.toFixed(2)} horas.`);
}