/* // eje1
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

//eje 6
let num = prompt("Ingrese un numero ");
num = parseInt(num);
if (num>10){
  console.log("el numero es mayor a 10")
} else if (num<=10){
  console.log("El número es menor o igual a 10")
}

 //eje 7
const random = Math.floor(Math.random() * 3) + 1
let num = prompt("trate de adivinar el numero del 1 a 10 ");
num = parseInt(num);
if(num === random){
  console.log("Felicitaciones, ese era!")
} else {
  console.log("Lo siento, intenta nuevamente! el numero era "+random)
}
// eje 8
let num = prompt("ingrese un numero ");
num = parseInt(num);
if ( num %5==0){
  console.log("Si, el número " + num + " es múltiplo 5")
}else {
  console.log( "No, el número " + num + " no es múltiplo de 5")
}
 // eje 9
 let num = prompt("Ingrese un numero ");
num = parseInt(num);
  if (num<10){
    console.log("El número es menor a 10")
  } else if (num>10){
  console.log("el numero es mayor a 10")
} else {
  console.log ("el numero es igual a 10")
}

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


//eje 11
let num = prompt("Ingrese un numero ");
num =  parseFloat(num);
if ((num > 0 && num % 3 == 0) && (num > 0 && num % 5 == 0)) {
        console.log("bingbong") 
    } else if (num > 0 && num % 3 == 0) {
        console.log("bing")
    } else if (num > 0 && num % 5 == 0) {
        console.log( "bong");
    } else {
        console.log(num)       
}
// eje 12

const frase = prompt("Ingresa una frase ");
var i=0;
while(i < 10){
  i = i+1
  console.log(frase)
}
//eje 13
const frase = prompt("Ingresa una frase ");
let num = prompt("Ingrese un numero ");
num =  parseFloat(num);
while(num > 0){
  num = num-1
  console.log(frase)
}


//eje 14
let num = parseInt(prompt("Escribe un número: "))
for (let i = 1; i <= num; i++) {
  console.log(i)
}

// eje 15
let num1 = parseInt(prompt("Escriba el número inicial: "))
let num2 = parseInt(prompt("Escriba el número final: "))

for (let i = num1; i <= num2; i++) {
  console.log(i)
}

// eje 16
var str = prompt("Ingresa un texto ");
while(str !== "salir"){
  console.log(str);
  str = prompt("Ingresa de nuevo un texto ")
}
console.log("Hasta pronto!")
  

// eje 17
var num
const random = Math.floor(Math.random() * 2) + 1
console.log(random)
num = prompt("trate de adivinar el numero del 1 a 10 ");
num = parseInt(num);
while( random != num){
    console.log("Lo siento, intenta nuevamente!")
    num = prompt("trate de nuevo de adivinar el numero del 1 a 10 ");
    num = parseInt(num);
}
if(num === random){
  console.log("Felicitaciones, ese era!")
} 

 

// eje 18

var nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];
nombres.push(prompt("Ingresa un nombre "));
nombres[2]=(prompt("Ingresa otro nombre "));
for (i=0; i < nombres.length; i++){
  console.log(nombres[i]);
}

 
// ejercicio 19 
let num = parseInt(prompt("Escriba un número: "))
let arr =[]
for (let i = 1; i <= num; i++) {
  arr.push(i)
}
arr.splice(1,1);
console.log(arr);

//eje 20
const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];

for (let i=0; i < mat.length; i++){
  console.log("Grupo "+[i + 1])
      for (let j=0; j<mat[i].length; j++){
    console.log(mat[i][j]);
  }
}

// eje 21
const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39];
for (let i=0; i < nums.length; i++){
  if(nums[i] > 10){
    console.log(nums[i]);
    }
}

// eje 22
const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
let cont = 0;
for (let i=0; i < nums.length; i++){
  if(nums[i] > 0){
    cont = cont +1
  }
}
console.log("la cantidad de unos son " + cont);

// eje 23

const frase = prompt("Ingresa una frase ");
console.log(frase.toUpperCase());

// eje 24

let texto = prompt("Ingresa una frase ");
let cont = 0
for (let i=0; i < texto.length; i++){
   if(texto[i] == "a" || texto[i] == "A"){
     cont =cont +1
    }
}
console.log(`la frase tiene ${cont} caracteres "a"`)


// eje 25
let texto = prompt("Ingresa una frase ");
texto= texto.toLowerCase();
texto= texto.replace(/a/g, 4);
texto= texto.replace(/e/g, 3);
texto= texto.replace(/i/g, 1);
texto= texto.replace(/o/g, 0);
texto= texto.split(" ")
texto= texto.join("")
console.log(texto)


// eje 26
let texto = prompt("Ingresa una frase ");
texto =texto.replace(/(^\w|\s\w)/g, m => m.toUpperCase())


// eje 27
let texto = prompt("Ingresa una frase ");
texto = texto.split(" ")
for (let i=0; i < texto.length; i++){
  console.log(texto[i])
}


// eje 28


 
let textoUno = prompt('Ingresa una frase')
let textoDos = prompt('Ingresa una frase')
let comun = []
 for (let i=0;i<textoUno.length;i++){
   for(let j=0;j<textoDos.length; j++){
     if (textoUno[i]==textoDos[j]){
       comun.push(textoDos[i])
     }
   }
 }
 if (comun ==""){
   console.log("No tiene caracteres en común")
 } else {
   console.log(`Los caracteres en común son ${comun}`)
}
*/
