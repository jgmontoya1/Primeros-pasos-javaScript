/*   Crea un programa a partir de las siguientes instrucciones:

Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
Recorre el arreglo e imprímelo.
Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

Ingresa un nombre> Camilo
Ingresa otro nombre> Ariel
Pedro
Pablo
Ariel
Juan
Diana
Camilo */

var nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];
nombres.push(prompt("Ingresa un nombre "));
nombres[2]=(prompt("Ingresa otro nombre "));
for (i=0; i < nombres.length; i++){
  console.log(nombres[i]);
}


