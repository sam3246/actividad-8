const readlineSync = require('readline-sync');
let nota1 = parseFloat(readlineSync.question('Ingrese la primera nota'))
let nota2 = parseFloat(readlineSync.question('Ingrese la segunda nota'))
let nota3 = parseFloat(readlineSync.question('Ingrese la tercera nota'))
let suma = nota1 + nota2 + nota3
let notafinal = suma / 3

console.log(notafinal)