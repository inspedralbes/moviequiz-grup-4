CREATE DATABASE IF NOT EXISTS moviequiz4;

CREATE TABLE IF NOT EXISTS moviequiz4.users (
  id TiNYINT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(300),
  apellido VARCHAR(300),
  correo VARCHAR(300),
  contrasena VARCHAR(300)
);

CREATE  TABLE IF NOT EXISTS moviequiz4.valores (
    id TiNYINT AUTO_INCREMENT PRIMARY KEY,
    nombre_pelicula VARCHAR(300),
    favorito INT(4),
    comentario VARCHAR(300),
    id_user TiNYINT,
    FOREIGN KEY (id_user) REFERENCES users(id)
);