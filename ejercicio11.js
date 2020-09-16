/* Escribe un programa que le pida al usuario ingresar un número.

Si el número es múltiplo de 3 debe imprimir en la consola "bing".
Si el número es múltiplo de 5 debe imprimir en la consola "bong".
Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número. */

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