alert('-----Ejercicio 17-----\nUnidades de Medida');
const pies = parseFloat(prompt('Ingresar la Cantidad en Pies: '));
const metros = parseFloat(prompt('Ingresar la Cantidad en Metros'));

const metrostotales = pies * 0.3048;

const medida = metrostotales + metros;

const pulgadas = medida * 39.3701;
const yardas = medida * 1.09361;
const millas = medida * 0.000621371;

alert(`Las Medias Ingresadas son: Pies: ${pies} y Metros: ${metros}\n
La Cantidad Total en Metros: ${metrostotales}\n
En Pulgadas: ${pulgadas}\n
En Yardas: ${yardas}\n
En Millas: ${millas}`);