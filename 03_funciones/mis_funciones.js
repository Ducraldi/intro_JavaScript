/*
function saludar(){
    document.write("Hola a todos")
};

saludar();
*/


function cambiarEstilo(){
    document.body.style.background = "red";
    document.write("Soyun mensaje")
};

function imprimirMenssaje(){
    alert("Hola, Bienvenido!");
    console.log("Soy una prueba mas");
};

function escribirMensaje(){
    document.write("Hola mundo. Esto es JS ");
}

const divClick = document.querySelector("div");


divClick.addEventListener("click", function(){
    escribirMensaje();
    cambiarEstilo();
    alert("Haz hecho click en el div");
});
