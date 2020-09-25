/* Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.

Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, el programa debe imprimir "Hola Mundo" 5 veces: */

//eje 13
const frase = prompt("Ingresa una frase ");
let num = prompt("Ingrese un numero ");
num =  parseFloat(num);
while(num > 0){
  num = num-1
  console.log(frase)
}