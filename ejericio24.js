// Ejercicio 24 
let texto = prompt("Ingresa una frase ");
let cont = 0
for (let i=0; i < texto.length; i++){
   if(texto[i] == "a" || texto[i] == "A"){
     cont =cont +1
    }
}
console.log(`la frase tiene ${cont} caracteres "a"`)