// Ejercicio 17

const random = Math.floor(Math.random() * 10) + 1
console.log(random)

let num = prompt("Ingrese un numero ");
num =  parseFloat(num);

while(num !== random){
  console.log(random)
  num = prompt("Ingrese de nuevo el numero ");
  num=parseFloat(num);
  
}
if(num == random){
  console.log("es correcto" + num)
}