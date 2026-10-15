/* if (condicion) {
    //codigo a ejecutar si la condicion es verdadera
}else if (condicion 2){
    //codigo a ejecutar si la condicion es verdadera
}else {
    //codigo a ejecutar si ninguna de las anteriores es verdadera
} */

/* switch (expresion) {
    case valor1:
        //codigo si expresion === valor1
    break;
    case valor2:
        //codigo si expresion === valor2
    break;
    default:
    //codigo si no hay coincidencia
} */

// 1. Verificar si un número es positivo, negativo o cero
let numero = 0;

if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// 2. Usar switch para imprimir un mensaje según el día de la semana
let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número de día inválido.");
        break;
}

// 3. Verificar si un número es par o impar
let numeroParImpar = 7;

if (numeroParImpar % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}