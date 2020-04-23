
//  color y boton 
const inputColor = document.querySelector('#color');
const btnCambiarColor = document.querySelector('#cambiar_color')

// Crear la funcion de boton y color
btnCambiarColor.addEventListener('click', () => {
    // funciones de los colores y bonoes
    let color = inputColor.value;
    let nombre = "pagina con JS";

    /* para alertar de escribir algo ya que mostrara si 
       si escribio algo no dara el color pero si es falso 
       saldra un error */
    if (color === '') {
        alert("Debes escribir un valor para el color")
    } else {
        cambiarColorFondo(color);
    }
})

// Ativar que cambie de color al cuerpo de la pagina
function cambiarColorFondo(color) {
    document.body.style.backgroundColor = color;
}

// Crear un bucle
var i = 1;
for (; i<=100; i++){
    
    document.write(i + "<hr /> #F3T2G");
}
 
// Mi datos personales
let primerNombre = "Ducraldi";
let sengudoNombre = "Jose";
let primerApellido = "Fabian";
let segundoApellido = "Ramirez";
let edad = "19";
let fechaDeNacimiento = "24/5/2000";

const sigloActual = true;

// Calculacion 
let numero = 10;

let numero2 = 20;

let resultado = numero * numero2;
 
// Mostrar todo
console.log(primerNombre ,sengudoNombre ,primerApellido ,segundoApellido);
console.log(fechaDeNacimiento);
console.log(edad);

console.log(typeof primerNombre);
console.log(typeof resultado);
console.log(typeof sigloActual);
