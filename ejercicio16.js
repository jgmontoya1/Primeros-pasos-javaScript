/* Escribe un programa que:

Le pida al usuario un string (una cadena de texto).
Si el string es "salir" (todo en minúsculas) el programa debe imprimir en la consola "Hasta pronto!" y terminar.
De lo contrario imprime en la consola lo que el usuario ingresó y repite el proceso desde el paso 1. */

var str = prompt("Ingrese su peso ");
str =  parseInt(str);



















// ejercicio  16
var str = prompt("Ingresa un texto ");
while(str !== "salir"){
  console.log(str);
  str = prompt("Ingresa de nuevo un texto ")
}
console.log("Hasta pronto!")