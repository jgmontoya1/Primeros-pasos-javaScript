/* Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter "a" por "4".
Reemplaza el caracter "e" por "3".
Reemplaza el caracter "i" por "1".
Reemplaza el caracter "o" por "0".
Ejemplo:

Ingresa una frase> esta es una prueba
3st43sun4pru3b4 */


// ejercicio 25
let texto = prompt("Ingresa una frase ");
texto= texto.toLowerCase();
texto= texto.replace(/a/g, 4);
texto= texto.replace(/e/g, 3);
texto= texto.replace(/i/g, 1);
texto= texto.replace(/o/g, 0);
texto= texto.split(" ")
texto= texto.join("")
console.log(texto)
