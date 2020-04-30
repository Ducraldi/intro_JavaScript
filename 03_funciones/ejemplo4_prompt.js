/* Declara variables
convierte string en numeros enteros 
le pido informacion al usuario */

let numero1 = Number.parseInt( prompt("Digite un numero") );
let numero2 = Number.parseInt( prompt("Digiste otro numero") );

// Sumar variables ( numero 1 y el numero 2 )
let suma = numero1 + numero2;
console.log(numero1 + numero2); // Imprimiendo variables

// Mostrar en una alerta el resultado final
alert(`La suma de ${numero1} y ${numero2} es igual a ${suma}.`);
