//for
for (let i=1; i<=5; i++) {
    console.log("iteraccion:",i)
}

//while
let contador = 0;
while (contador<3){
    console.log("contador",contador)
    contador++;
}

//do...while ejercicio 1
let x = 10;
do {
    console.log("el valor es:",x);
    x--;
} while (x>5);

//ejercicio 2
let c = 0;
do {
    console.log("el valor es:",c);
    c++;
} while (c<5);

//ejercicio 3
const readlineSync = require('readline-sync');
let numero = parseInt(readlineSync.question('ingrese un numero positivo'));
let suma = 0;
let i = 0;
while (i <= numero){
    suma += i;
    i++;
}
console.log('la suma de los numeros desde 1 hasta ' + numero + ' es: ' + suma);
