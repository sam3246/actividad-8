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

//do...while
let x = 10;
do {
    console.log("el valor es:",x);
    x--;
} while (x>5);

// 1. Números Pares: imprimir los pares del 1 al 50 con for
console.log("Números pares del 1 al 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 2. Suma Acumulada: número positivo con while
let numero = parseInt(prompt("Ingrese un número positivo para sumar del 1 hasta ese número:"));
let suma = 0;
let contadorSuma = 1;

if (numero > 0) {
    while (contadorSuma <= numero) {
        suma += contadorSuma;
        contadorSuma++;
    }
    console.log("La suma acumulada es:", suma);
} else {
    console.log("El número debe ser positivo.");
}

// 3. Adivina el Número: aleatorio del 1 al 10 con do...while
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

do {
    intento = parseInt(prompt("Adivina el número entre 1 y 10:"));
    if (intento !== numeroSecreto) {
        console.log("Incorrecto, intenta de nuevo.");
    }
} while (intento !== numeroSecreto);

console.log("¡Correcto! El número era:", numeroSecreto);

// 4. Tabla de Multiplicar: solicitar un número del 1 al 10
let tabla = parseInt(prompt("Ingrese un número del 1 al 10 para ver su tabla de multiplicar:"));
console.log("Tabla de multiplicar del", tabla);

if (tabla >= 1 && tabla <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(tabla + " x " + i + " = " + (tabla * i));
    }
} else {
    console.log("Número fuera del rango válido.");
}

// 5. Cuenta Regresiva: de un número mayor a 0 con while
let inicio = parseInt(prompt("Ingrese un número mayor a 0 para la cuenta regresiva:"));

if (inicio > 0) {
    while (inicio >= 0) {
        console.log(inicio);
        inicio--;
    }
} else {
    console.log("El número debe ser mayor a 0.");
}

// 6. Suma de Números Positivos: do...while
let total = 0;
let valor;

do {
    valor = parseInt(prompt("Ingrese un número positivo para sumar (ingrese un número negativo para terminar):"));
    if (valor >= 0) {
        total += valor;
    }
} while (valor >= 0);

console.log("La suma total de los números positivos ingresados es:", total);

// 7. Números Impares: imprimir los impares del 1 al 100 con for
console.log("Números impares del 1 al 100:");
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 8. Contador de Vocales: pedir una palabra y contar vocales
let palabra = prompt("Ingrese una palabra:");
let contadorVocales = 0;

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i].toLowerCase();
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        contadorVocales++;
    }
}

console.log("La palabra tiene", contadorVocales, "vocales.");

// 9. Menú interactivo con do...while
let opcion;

do {
    console.log("\nMenú:");
    console.log("1. Mostrar un mensaje de bienvenida");
    console.log("2. Mostrar la fecha y hora actual");
    console.log("3. Salir");

    opcion = parseInt(prompt("Seleccione una opción: "));

    switch (opcion) {
        case 1:
            console.log("¡Bienvenido!");
            break;
        case 2:
            console.log(new Date());
            break;
        case 3:
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción inválida.");
            break;
    }
} while (opcion !== 3);