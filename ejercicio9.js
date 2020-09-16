// Escribe un programa que le pida un número al usuario e imprima en la consola si el número si es mayor, menor o igual que 10.

 let num = prompt("Ingrese un numero ");
num = parseInt(num);
  if (num<10){
    console.log("El número es menor a 10")
  } else if (num>10){
  console.log("el numero es mayor a 10")
} else {
  console.log ("el numero es igual a 10")
}