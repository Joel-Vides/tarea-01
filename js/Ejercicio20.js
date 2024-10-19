alert('-----Ejercicio 20-----\nEl Combustible');

const kilometros = parseFloat(prompt("Ingresar el Número de Kilómetros Recorridos: "));
const litros = parseFloat(prompt("Ingresar el Número de Litros Consumidos: "));

const consumo = kilometros / litros;

alert(`El Consumo de Combustible por Kilómetro es: ${consumo} km/l`);