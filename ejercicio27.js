/* Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea. Por ejemplo:

Ingresa una frase> esta es una prueba
esta
es
una
prueba */

// ejercicio 27

let texto = prompt("Ingresa una frase ");
texto = texto.split(" ")
for (let i=0; i < texto.length; i++){
  console.log(texto[i])
}