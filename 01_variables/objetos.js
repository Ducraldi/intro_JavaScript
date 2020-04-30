// Declara un objeto personal
let persona = {
    nombre: "Ducraldi",
    apellido: "Fabian",
    edad: 19,
    tieneCarro: false,
    tieneTrabajo: true,
    ciudadOrigen: "Santiago",
    coloresFavoritos: ["Blanco", "Rojo", "Negro"]
};

console.log (persona.nombre);


// Forma organizada
// Forma desargonizada
// forma resumida y organiazada
// Forma larga y desargonizada
//let nombrePersona = "Ducraldi";
//let apellidoPersona = "Fabian";
//let edadPersona = 24;
//let tieneCarropersona = false;


//let btnMostrar= document.querySelector("#mostrar");

//console.log(btnMostrar);

/*btnMostrar = addEventListener('click', function(){
    let inputNombre = this.document.querySelector("input.nombre");

    //console.log(inputNombre);
    

    document.title = inputNombre;

}); */


// Obetos parte 2 Practica 
 
const btnCabiarNombre = document.querySelector('#cambiar');
const textNombre = document.querySelector ('input.nombre'); 

btnCambiarNombre = addEventListener('click', function(){
    persona.nombre = textNombre.value;

    console.log(persona.nombre);

});

