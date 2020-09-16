/* Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!" */

const random = Math.floor(Math.random() * 3) + 1

let num = prompt("trate de adivinar el numero del 1 a 10 ");
num = parseInt(num);
if(num === random){
  console.log("Felicitaciones, ese era!")
} else {
  console.log("Lo siento, intenta nuevamente! el numero era "+random)
}