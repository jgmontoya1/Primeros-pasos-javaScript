/* Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir: */

// ejercicio 15
let num1 = parseInt(prompt("Escriba el número inicial: "))
let num2 = parseInt(prompt("Escriba el número final: "))

for (let i = num1; i <= num2; i++) {
  console.log(i)
}