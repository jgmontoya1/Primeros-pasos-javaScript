/* El BMI se calcula con la siguiente formula: peso / altura^2.

Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X".
 */
// solicita su peso
let peso = prompt("Ingrese su peso ");
peso =  parseFloat(peso);

let altura = prompt("Ingrese su altura ");
altura =  parseFloat(altura);

let bmi =(peso/(altura**2));
console.log("tu BMI es: " + bmi);