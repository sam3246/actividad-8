//Un maestro desea saber qué porcentaje de hombres y qué porcentaje de mujeres hay en un
//grupo de alumnos.

const readlineSync = require('readline-sync');

const hombres = parseInt(readlineSync.question('Ingrese la cantidad de hombres: '), 10);
const mujeres = parseInt(readlineSync.question('Ingrese la cantidad de mujeres: '), 10);
const totalAlumnos = hombres + mujeres;

if (totalAlumnos === 0) {
	console.log('El grupo debe tener al menos un alumno para calcular los porcentajes.');
} else {
	const porcentajeHombres = (hombres / totalAlumnos) * 100;
	const porcentajeMujeres = (mujeres / totalAlumnos) * 100;

	console.log('Porcentaje de hombres: ' + porcentajeHombres.toFixed(2) + '%');
	console.log('Porcentaje de mujeres: ' + porcentajeMujeres.toFixed(2) + '%');
}
