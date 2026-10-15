let nombre = prompt("por favor ingrese su nombre");
console.log ("hola, bienvenido: " + nombre);
alert("hola, bienvenido: " + nombre);

//parsefloat es para decir que estamos trabajando con un numero, si no lo ponemos el resultado sera strings
let num1= parseFloat(prompt("por favor ingrese un numero"));
let num2= parseFloat(prompt("por favor ingrese otro numero"));
let sumar=num1 + num2;
let restar=num1 - num2;
let multiplicar=num1 * num2;
let dividir=num1 / num2;

console.log("el total de la suma es: " + sumar + "\n el total de la resta es: " + restar + "\n el total de la multiplicacion es: " + multiplicar + "\n el total de la division es: " + dividir);
alert("el total de la suma es: " + sumar + "\n el total de la resta es: " + restar + "\n el total de la multiplicacion es: " + multiplicar + "\n el total de la division es: " + dividir);

//tipos de datos primitivos:
console.log(typeof "hola mundo"); //string
console.log(typeof 42); //number
console.log(typeof true); //boolean

//number
let edad = 30;
let precio = 19.99;
console.log(typeof edad);
console.log(typeof precio);

// 1. Área de un rectángulo: base * altura
let base = 8;
let altura = 5;
let areaRectangulo = base * altura;
console.log("Área del rectángulo:", areaRectangulo);

// 2. Comparación de dos números
let numeroA = 10;
let numeroB = 12;
console.log("¿10 es menor que 12?", numeroA < numeroB);
console.log("¿10 es mayor que 12?", numeroA > numeroB);

// 3. Combinación de expresiones booleanas con && y ||
let tieneEdad = true;
let esMayorDeEdad = true;
let tienePermiso = false;

console.log("Resultado con &&:", tieneEdad && esMayorDeEdad);
console.log("Resultado con ||:", tieneEdad || tienePermiso);

// && requiere que ambas expresiones sean verdaderas.
// || requiere que al menos una sea verdadera.

// 4. Operadores de asignación para incrementar en 5
let valor = 10;
valor += 5;
console.log("Valor incrementado en 5:", valor);

// 5. Verificar si un número es positivo y par
let numero = 14;
let esPositivoYPar = numero > 0 && numero % 2 === 0;
console.log("¿El número es positivo y par?", esPositivoYPar);

