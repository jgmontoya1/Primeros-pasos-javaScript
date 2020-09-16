//Escribe un programa que le pida al usuario ingresar un número, luego le pide un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.

let num1 = prompt("Ingrese el primer numero ");
num1 = parseInt(num1);
let num2 = prompt("Ingrese el segundo numero ");
num2 = parseInt(num2);
console.log(`la suma de los dos números que ingresó es :${ num1+num2 }`);