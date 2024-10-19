alert('-----Ejercicio 7-----\nVerificación de par o impar')
const numero = parseFloat(prompt("Ingrese un número:"));

const par = numero%2;

if(par===0){
    alert(`El Número ${numero} es Par`);
}else{
    alert(`El Número ${numero} es Impar`);
}