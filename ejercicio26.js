/* Ingresa una frase> esta es una prueba
Esta Es Una Prueba */
// ejercicio 26
let texto = prompt("Ingresa una frase ");
texto =texto.replace(/(^\w|\s\w)/g, m => m.toUpperCase())