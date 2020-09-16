// eje1
const frase = prompt("Ingresa una frase ");
console.log(frase);

//eje 2
const nom = prompt("Ingrese su nombre ");
console.log("hola " + nom + "!");

//eje 3
let num1 = prompt("Ingrese el primer numero ");
num1 = parseInt(num1);
let num2 = prompt("Ingrese el segundo numero ");
num2 = parseInt(num2);
console.log(`la suma de los dos números que ingresó es :${ num1+num2 }`);

//eje 4
let añoNacido = prompt("Ingrese el año en que nacio ");
añoNacido = parseInt(añoNacido);
console.log(`Tienes ${ 2020- añoNacido } años `);

// eje 5
let peso = prompt("Ingrese su peso ");
peso =  parseFloat(peso);
let altura = prompt("Ingrese su altura ");
altura =  parseFloat(altura);
let bmi =(peso/(altura**2));
console.log("tu BMI es: " + bmi);