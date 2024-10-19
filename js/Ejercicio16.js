alert('-----Ejercicio 16-----\nAtletas');
const minutos1 = parseFloat(prompt('Ingresar Los Minutos del Primer Atleta: '));
const segundos1 = parseFloat(prompt('Ingresar Los Segundos del Primer Atleta: '));

const totalsegundos1 = minutos1 * 60 + segundos1;
const horas = totalsegundos1/3600;

alert(`La Cantidad de Horas del Primer Atleta son: ${horas}`)

const minutos2 = parseFloat(prompt('Ingresar Los Minutos del Segundo Atleta: '));
const segundos2 = parseFloat(prompt('Ingresar Los Segundos del Segundo Atleta: '));

const totalsegundos2 = minutos2 * 60 + segundos2;
const horas2 = totalsegundos2/3600;

alert(`La Cantidad de Horas del Segundo Atleta son: ${horas2}`)

const total = horas+horas2;
alert(`El Total de Horas es: ${total}`)