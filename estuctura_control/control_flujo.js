// 1. Uso de break: recorre un arreglo y se detiene cuando encuentra el número 7
const numeros = [3, 9, 1, 7, 8, 2, 5];
console.log("Búsqueda con break:");

for (let i = 0; i < numeros.length; i++) {
    console.log("Revisando:", numeros[i]);
    if (numeros[i] === 7) {
        console.log("Se encontró el número 7. Se detiene el recorrido.");
        break;
    }
}

// 2. Uso de continue: recorre del 1 al 10 y muestra solo los números pares
console.log("\nNúmeros pares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// 3. Uso de return: función que recibe un número y devuelve su signo
function verificarSigno(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}

console.log("\nPrueba de return:");
console.log(verificarSigno(5));
console.log(verificarSigno(-3));
console.log(verificarSigno(0));

// 4. Combinando break y continue: recorrer arreglo ignorando negativos y deteniendo si encuentra >10
const arreglo = [2, -4, 5, 9, 12, 7, -1, 11];
console.log("\nCombinando break y continue:");

for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] < 0) {
        continue;
    }

    if (arreglo[i] > 10) {
        console.log("Se encontró un número mayor a 10:", arreglo[i]);
        break;
    }

    console.log("Número válido:", arreglo[i]);
}

// 5. Return para detener una búsqueda: buscar un nombre dentro de un arreglo
function buscarNombre(arregloNombres, nombreBuscado) {
    for (let i = 0; i < arregloNombres.length; i++) {
        if (arregloNombres[i] === nombreBuscado) {
            return "Encontrado";
        }
    }
    return "No encontrado";
}

const nombres = ["Ana", "Luis", "Mateo", "Sofía"];
console.log("\nBúsqueda de nombre:");
console.log(buscarNombre(nombres, "Mateo"));
console.log(buscarNombre(nombres, "Pedro"));