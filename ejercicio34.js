/* Escribe una función llamada promedio que reciba un arreglo de números y retorne el promedio los elementos.

// escribe la función acá

// código de prueba
console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200
Comparte tu respuesta en este enlace. No incluyas el código de prueba. */

// Ejercicio 34 promediame 

const promedio = (arr) =>{
var acu = 0
  for(let i=0; i < arr.length; i++){
    acu = acu + arr[i]
  }
  var resul = acu/arr.length
  return 'el promedio es: ' + resul
}

console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200