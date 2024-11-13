// libreriaVector.js

// Crear un vector de n números aleatorios que van desde 0 hasta m qu seria por ejemplo de 0 a 10

function crearVector(n, m) {
  let vector = [];
  for (let i = 0; i < n; i++) {
    vector.push(Math.floor(Math.random() * (m + 1)));
  }
  return vector;
}

//Sumar dos vectores si tienen el mismo número de elementos

function sumaVector(v1, v2) {
  if (v1.length !== v2.length) {
    return []; // Devuelve un array vacío si las longitudes no coinciden
  }
  let suma = [];
  for (let i = 0; i < v1.length; i++) { 
    suma.push(v1[i] + v2[i]);  
  }
  return suma;
}

//Multiplicar un vector por un número
function productoNumeroVector(n, v) {
  let producto = [];
  for (let i = 0; i < v.length; i++) {
    producto.push(v[i] * n);
  }
  return producto;
}

// Restar dos vectores si tienen el mismo número de elementoss
function restaVector(v1, v2) {
  if (v1.length !== v2.length) {
    return []; // Devuelve un array vacío si las longitudes no coinciden
  }
  let resta = [];
  for (let i = 0; i < v1.length; i++) {
    resta.push(v1[i] - v2[i]);
  }
  return resta;
}

// Multiplicar dos vectores si tienen el mismo número de elementos
function productoVector(v1, v2) {
  if (v1.length !== v2.length) {
    return []; // Devuelve un array vacío si las longitudes no coinciden
  }
  let producto = [];
  for (let i = 0; i < v1.length; i++) {
    producto.push(v1[i] * v2[i]);
  }
  return producto;
}
function cuadradoNumero(n) {
 console.log( n * n);
}


//Exportar las funciones para poder usarlas en otro archivo
module.exports = {
  crearVector,
  sumaVector,
  productoNumeroVector,
  restaVector,
  productoVector,
  cuadradoNumero
};



// Suma vector foreach
function sumaVectorForEach(v1, v2) {
  let suma = []; // Creamos un array vacío para almacenar los resultados
  v1.forEach((elemento, index) => {
    // Recorremos v1 con forEach y usamos index para acceder a los elementos de v2
    suma.push(elemento + v2[index]);
  });
  return suma; //Devolvemos el array con las sumas
}


//Suma map

function sumaVectorMap(v1, v2) {
  return v1.map((elemento, index) => {
    //Usamos map para crear un nuevo array con los resultados de la suma
    return elemento + v2[index];
  });
}

// Filter , filtramos numeros pares

function filtrarPares(v) {
  return v.filter(numero => numero % 2 === 0); // Filtramos solo los números pares
}

//reducciomos

function sumatorio(v) {
  return v.reduce((acumulador, numero) => acumulador + numero, 0);
}


