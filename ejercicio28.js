// Ejercicio 28
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