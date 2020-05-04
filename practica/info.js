alert(`Esta pagina esta hecha con el proposito de robarle su informacion, 
de su queja con el lider 2020 - 2020`);

// Arrays hecho por usuarios

let diasSemana = [];

diasSemana.push(prompt(`Escribe el primer dia de la semana`));
diasSemana.push(prompt(`Escribe el segundo dia de la semana`));
diasSemana.push(prompt(`Escribe el tercer dia de la semana`));
diasSemana.push(prompt(`Escribe el cuarto dia de la semana`));
diasSemana.push(prompt(`Escribe el quinto dia de la semana`));
diasSemana.push(prompt(`Escribe el sexto dia de la semana`));
diasSemana.push(prompt(`Escribe el octavo dia de la semana`));



// arrays hecho con nomre de la familia del usuario 

let nombreFamiliares = [];

nombreFamiliares.push(prompt(`Digame el nombre alguien de su familia`));
nombreFamiliares.push(prompt(`Digame otro nombre de alguien de su familia`));
nombreFamiliares.push(prompt(`Digame otro nombre de alguien de su familia`));

// Aqui colocamos los nombres de nuestro objetos 

let datosPersonales = {
  nombreCompleto: "",
  fechaNacimiento: "",
  lugarNacimiento: "",
  edad: "",
  comidasFavoritas: [],
  paisesGustariaVisitar: [],
  siPoseeLicenciaConducir: "",
  siEstudiaUniversidad: ""

};


/*aqui le damos vida proporcionandoles preguntas alguna resglas
a nuestra variables */

datosPersonales.nombreCompleto = prompt(`Dime tu nombre completo ?`);
datosPersonales.fechaNacimiento = prompt(`Dime tu fecha de nacimiento ?`);
datosPersonales.lugarNacimiento = prompt(`Luegar de nacimiento ?`);
datosPersonales.edad = Number(prompt(`Dime tu edad ?`));
datosPersonales.comidasFavoritas.push(prompt(`Primera comida favorita ?`));
datosPersonales.comidasFavoritas.push(prompt(`Segunda comida favorita ?`));
datosPersonales.comidasFavoritas.push(prompt(`Tercera comida favorita ?`));
datosPersonales.paisesGustariaVisitar.push(prompt(`Primer pais ?`));
datosPersonales.paisesGustariaVisitar.push(prompt(`Seundo pais ?`));
datosPersonales.paisesGustariaVisitar.push(prompt(`Tercer pais ?`));
datosPersonales.paisesGustariaVisitar.push(prompt(`Cuarto pais ?`));
datosPersonales.paisesGustariaVisitar.push(prompt(`Quinto pais ?`));
datosPersonales.siEstudiaUniversidad = confirm(`Usted estudia en alguna universidad 
para responde utilize aceptar para que su respues ta seea (si) 
o 
cancerlar para que su respuesta sea (no)`);
datosPersonales.siPoseeLicenciaConducir = confirm(`Usted tiene licencia de conducir 
para responder utilize aceptar para que su respuesta sea (si) 
o 
cancerlar para su respuesta sea (no)`);


// Datos de mi artita favorito 

let artitaFavorito = {
    nombre: "",
    edad: "",
    cancionesFavoritas: [],
    fuisteAlgunConcierto: ""
}

/* Aqui le preguntaremos al usuarios las pregunta 
que le indiquemos */

artitaFavorito.nombre = prompt(`Quien es tu artita favorito ?`);
artitaFavorito.edad = Number(prompt(`Que edad tiene tu artita favorito ?`));
artitaFavorito.cancionesFavoritas.push(prompt(`Primera cancion favorita`));
artitaFavorito.cancionesFavoritas.push(prompt(`Segunda cancion favorita`));
artitaFavorito.cancionesFavoritas.push(prompt(`Tercera cancion favorita`));
artitaFavorito.fuisteAlgunConcierto = confirm(`Fuista algun concierto de el 
aceptar para (SI) y cancelar para (NO)`);


// Aqui mostraremos algunas cosa por la consola para finalizar

console.log(datosPersonales.nombreCompleto);
console.log(datosPersonales.fechaNacimiento);
console.table(datosPersonales.paisesGustariaVisitar);
console,table(artitaFavorito);
