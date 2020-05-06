// Aqui selecionamos las variables con querySelector
let btnFuncion = document.querySelector("#funcion");
let bienvenidoPagina = document.querySelector("#bienvenidoPagina");
let nuevoTitulo = document.querySelector("#nuevoTitulo");

// aqui añadimos los evento que pasaran al precionar el boton 
btnFuncion.addEventListener("click", function(){

    bienvenidoPagina.style.display = "none"; // añadimos stylo None para ocurtal
    nuevoTitulo.innerHTML = ("<i>Haz hecho doble click</i>"); // añadimos el comentario y  la cursiva
    nuevoTitulo.style.color = "red"; // aqui añadimos el color a la lectras 
});

console.log(btnFuncion);