const saludarFlecha = (nombre) => {
    return "hola" + nombre + "!"
}
console.log(saludarFlecha("juan"));

const numeros = [1,2,3,4,5];
const cuadrados = numeros.map((n) => n * n);
console.log(cuadrados);


const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const pares = numeros1.filter((n) => n % 2 === 0);
console.log(pares);

const edades = [12, 15, 22, 17, 30, 14, 19];
const mayordedad = edades.filter((edad) => edad >= 18);
console.log(mayordedad);

const estudiates = [
    { nombre: "Juan", edad: 20},
    { nombre: "Maria", edad: 17},
    { nombre: "Pedro", edad: 22},
    { nombre: "Ana", edad: 19},
]
const estudiante = estudiantes.find((est) => est.nombre === "Maria");
console.log(estudiante);