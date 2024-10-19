alert('-----Ejercicio 19-----\nLa Compra');
const producto = prompt('Ingresar el Nombre del Producto: ');

const precio = parseFloat(prompt('Ingresar el Precio del Producto: '))
const iva = parseFloat(prompt('Ingresar el IVA del Producto: '));
const ivatotal = precio * (iva/100);
const total = precio + precio * (iva/100);

alert(`El Precio del Producto es ${precio} y El Iva es ${ivatotal}`)
alert(`El Precio Total de ${producto} es: ${total}`)