/*  ejercicio 19 

Escribe un programa que:

Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
Elimine el segundo elemento.
Recorra e imprima el arreglo.
Ejemplo:

Ingresa un número> 5
1
3
4
5
*/


let num = parseInt(prompt("Escriba un número: "));
let arr =[];
for (let i = 1; i <= num; i++) {
  arr.push(i)
}
arr.splice(1,1);
console.log(arr);