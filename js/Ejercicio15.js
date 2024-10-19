alert('-----Ejercicio 15-----\nVerificación de Contraseña');
const contraseña = '12345678';
const contraseña2 = prompt('Ingresar una Contraseña de 8 Digitos: ');

if(contraseña===contraseña2){
    alert(`La Contraseña ${contraseña2} es Correcta`)
}else{
    alert(`La Contraseña ${contraseña2} es Incorrecta`)
}