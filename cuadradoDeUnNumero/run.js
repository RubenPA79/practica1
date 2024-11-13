//pruebaLibreriaVector.js

const {
    crearVector,
    sumaVector,
    productoNumeroVector,
    restaVector,
    productoVector,
    cuadradoNumero,
  } = require('./libreriaVector');
  
  //Pruebas de las funciones vector
  let vector1 = crearVector(5, 10);
  let vector2 = crearVector(5, 10);
  let vector3 = crearVector(5 , 10);
  console.log("Vector 1:", vector1);
  console.log("Vector 2:", vector2);
  
  
  let sumar = sumaVector(vector1 ,vector2 ,vector3);
  console.log("la suma de 3 vectores es " + sumar);
  
  let productoNum = productoNumeroVector(2, vector1);
  console.log("Producto de vector1 por 2:", productoNum);
  
  let resta = restaVector(vector1, vector2);
  console.log("Resta de vectores:", resta);
  
  let productoVec = productoVector(vector1, vector2);
  console.log("Producto de vectores:", productoVec);



  let cuadrado = cuadradoNumero(5);
  
  