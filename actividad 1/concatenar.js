let marca_coche = "mazda"; //string
let modelo = "corolla"; //string
let año = 2020; //number

console.log("marca del coche:", marca_coche);
console.log("modelo del cohe:", modelo);
console.log("año del coche:", año);

console.log("vehiculo:",marca_coche, modelo, año); //primera forma de concatenar
console.log("vehiculo:" +marca_coche+" "+modelo+" "+año); //segunda forma de concatenar
console.log("mi vehiculo es un: "+marca_coche+" modelo "+modelo+" año "+año); //tercera forma de concatenar
console.log(`mi vehiculo es un: ${marca_coche} ${modelo} ${año}`); //cuarta forma de concatenar
console.log("mi vehiculo es un: "+marca_coche+"\n  del año: " +año); //mostrar saltos de linea dentro de la colsola