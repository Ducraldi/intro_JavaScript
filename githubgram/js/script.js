let usuarioGithub = {
  nombre: "Ducraldi",
  nombre_usuario: "ducraldi",
  url_imagen:
    "https://image.shutterstock.com/image-vector/user-icon-260nw-523867123.jpg",
};

// console.log(usuarioGithub);

let textoJSON = JSON.stringify(usuarioGithub);

// console.log(textoJSON);

let usuarioGithubJSON = `
{
    "usuario": "Ducraldi",
    "nombre_usuario": "ducraldi",
    "url_imagen": "https://google.com"
}
`;

let objetoJSON = JSON.parse(usuarioGithubJSON);

// un JSON normal 
let miUsuarioJSON  = `
{
    "login": "Ducraldi",
    "id": 59833306,
    "node_id": "MDQ6VXNlcjU5ODMzMzA2",
    "avatar_url": "https://avatars2.githubusercontent.com/u/59833306?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Ducraldi",
    "html_url": "https://github.com/Ducraldi",
    "followers_url": "https://api.github.com/users/Ducraldi/followers",
    "following_url": "https://api.github.com/users/Ducraldi/following{/other_user}",
    "gists_url": "https://api.github.com/users/Ducraldi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Ducraldi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Ducraldi/subscriptions",
    "organizations_url": "https://api.github.com/users/Ducraldi/orgs",
    "repos_url": "https://api.github.com/users/Ducraldi/repos",
    "events_url": "https://api.github.com/users/Ducraldi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Ducraldi/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Ducraldi Fabian",
    "company": null,
    "blog": "duqui.000webhostapp.co,",
    "location": "Santiago de lo caballeros ",
    "email": null,
    "hireable": null,
    "bio": "Hola soy Ducraldi mi meta ser mejor en todo lo que haga y trata de superar mi limites dia a dia ",
    "public_repos": 5,
    "public_gists": 0,
    "followers": 6,
    "following": 5,
    "created_at": "2020-01-13T14:11:00Z",
    "updated_at": "2020-05-04T22:33:12Z"
  }
  `;
  // convertido el JSON a Objeto 
  let user = JSON.parse(miUsuarioJSON);

  // selecional los elementos

  const imgPerfil = document.querySelector("img.imagen_perfil");
  const tituloNombre = document.querySelector("h3.nombre");
  const parrafoNombreUsuario = document.querySelector("p.nombreUsuario");
  const spanSeguidores = document.querySelector("span.seguidores");
  const spanSiguiendo = document.querySelector("span.siguiendo");

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