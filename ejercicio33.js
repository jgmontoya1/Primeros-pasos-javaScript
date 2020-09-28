/* Escribe una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

Nota: puedes asumir que cada palabra está separada por espacio.

// escribe la función acá

// código de prueba
console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real" 
*/
// Poner en mayúscula la primera letra
function capitalizar (str) {
      let arr1 = str.split(' ')
      for(let i=0 ; i<arr1.length ; i++){
        let char = arr1[i].split('')
        char[0] = char[0].toUpperCase()
        arr1[i] = char.join('')
      }
      return str = arr1.join(' ')
}

// código de prueba
console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"


// solucion 2


const capitalizar = (str)=>{
  return str =str.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
} 

console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"

