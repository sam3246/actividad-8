//Desarrollar un algoritmo que permita generar la colilla de pago de los empleados de una
//empresa. La colilla debe mostrar:
//● El Salario del Empleado
//● El Valor de Ahorro mensual programado.
//● La suma a deducir por aporte a la Salud (EPS) 12,5 %
//● La suma a deducir por aporte al Fondo de Pensiones 16%
//● Total a Recibir
//● Toda la información que debe proveer el usuario del programa es el Salario del
//Empleado y el Valor de Ahorro mensual programado. El programa debe calcular y
//devolver el resto de los datos.

const readlineSync = require('readline-sync');

const salario = parseFloat(readlineSync.question('Ingrese el salario del empleado: '));
const ahorroMensual = parseFloat(readlineSync.question('Ingrese el valor del ahorro mensual programado: '));

const aporteSalud = salario * 0.125;
const aportePension = salario * 0.16;
const totalRecibir = salario - ahorroMensual - aporteSalud - aportePension;

console.log('\n--- Colilla de pago ---');
console.log('Salario del empleado: ' + salario.toFixed(2));
console.log('Ahorro mensual programado: ' + ahorroMensual.toFixed(2));
console.log('Aporte a Salud (EPS, 12.5%): ' + aporteSalud.toFixed(2));
console.log('Aporte al Fondo de Pensiones (16%): ' + aportePension.toFixed(2));
console.log('Total a recibir: ' + totalRecibir.toFixed(2));