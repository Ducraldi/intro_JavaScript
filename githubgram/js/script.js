// selecional los elementos

const imgPerfil = document.querySelector("img.imagen_perfil");
const tituloNombre = document.querySelector("h3.nombre");
const parrafoNombreUsuario = document.querySelector("p.nombreUsuario");
const spanSeguidores = document.querySelector("span.seguidores");
const spanSiguiendo = document.querySelector("span.siguiendo");

obtenerDatosGitHub();

// pasos para obtener los datos
// 1. crear una fincion asincrona
// 2. Ejecutar una peticion y  esperar por la respuesta
// 3. verificar si la respuesta esta bien
// 4. Convertir la respuesta y procesaarla

// 1. crear una fincion asincrona
async function obtenerDatosGitHub() {
  // console.log("Vamos a obtener los datos");

  // 2. Ejecutar una peticion y  esperar por la respuesta
  let respuesta = await fetch("https://api.github.com/users/ducraldi");

  // 3. verificar si la respuesta esta bien

  if (respuesta.ok) {
    // 4. Convertir la respuesta y procesaarla

    let user = await respuesta.json();

    // Actualizar la informacion en la pagina
    // Atualizar la ruta de la imagen
    imgPerfil.src = user.avatar_url;

    tituloNombre.textContent = user.name;
    parrafoNombreUsuario.textContent = user.login;
    spanSeguidores.textContent = user.followers;
    spanSiguiendo.textContent = user.following;
  } else {
    console.log("Ocurrio un error");
  }
}

/*
  // Atualizar la ruta de la imagen 
  imgPerfil.src = user.avatar_url;
 

  // Atualizar el nombre de usuario
  tituloNombre.textContent = user.name;

  // atualiar nombre correo 
  parrafoNombreUsuario.textContent = user.login;
 
  // seguidores

  spanSeguidores.textContent = user.followers;


  // Sieguiendo 

  spanSiguiendo.textContent =user.following;

  */
