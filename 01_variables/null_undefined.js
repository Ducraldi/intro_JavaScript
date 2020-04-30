console.log(1);

let nombre = 'Ducraldi';

console.log(nombre);

nombre = null;

console.log(nombre);

// acceder al boton
let btnGuardar = document.querySelector('#guardar');

console.log(btnGuardar);

btnGuardar.addEventListener('click', function(){
    console.log("haz click aqui");
});