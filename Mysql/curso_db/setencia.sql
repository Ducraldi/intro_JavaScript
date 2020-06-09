/* 
Que tipo de entidades? autores 
nombre : autores 
*/

Nombre 
Genero
Fecha de nacimiento 
pais de origen 

columna y el tipo de dato 

CREATE TABLE autores(
    autor_id INT,
    nombre VARCHAR(25),
    apellido VARCHAR(25),
    genero CHAR(1), --M o F
    fecha_nacimiento DATE,
    pais_origen VARCHAR(40)
); 

INSERT INTO autores(autor_id, nombre, apellido, genero, fecha_nacimiento, pais_origen)
VALUES (1, 'Test autor', 'Test autor', 'M', '2020-06-04', 'Republica Dominicana');
