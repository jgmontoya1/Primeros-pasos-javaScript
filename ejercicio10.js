/* El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

peso / altura^2
Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30 */


//eje 10
let peso = prompt("Ingrese su peso ");
peso =  parseFloat(peso);
let altura = prompt("Ingrese su altura ");
altura =  parseFloat(altura); 
let bmi =(peso/(altura**2));
console.log(bmi)
if (bmi <= 18.5){
  console.log("bajo de peso")
}else if( (bmi >= 18.5) && (bmi <=24.9) ){
  console.log("Normal")
}else if( (bmi >= 25) && (bmi <=29.9) ){
  console.log("Sobrepeso")
}else if (bmi >= 30) {
  console.log("Obeso")
}