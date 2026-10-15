//Calcular si la persona es mayor de edad

let edad= parseInt(prompt("ingrese la edad"))
if (edad>=18) {
    console.log("la presona es mayor de edad")
    alert("la presona es mayor de edad")
}else{
    console.log("la persona es menor de edad")
    alert("la presona es menor de edad")
}

//instalar la libreria readline-sync para poder ingresar datos por consola

const readlineSync = require('readline-sync');
let edad2 = parseInt(readlineSync.question("ingrese su edad"));
if (edad2 >= 18) {
    console.log("la presona es mayor de edad")
    alert("la presona es mayor de edad")
}else{
    console.log("la persona es menor de edad")
    alert("la presona es menor de edad")
}