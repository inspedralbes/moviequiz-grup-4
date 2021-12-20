CREATE DATABASE IF NOT EXISTS a18marcastru_moviequiz4;

CREATE TABLE IF NOT EXISTS a18marcastru_moviequiz4.users (
    id TiNYINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(500),
    apellido VARCHAR(500),
    correo VARCHAR(500),
    contrasena VARCHAR(500)
);
CREATE  TABLE IF NOT EXISTS a18marcastru_moviequiz4.peliculas (
    imdbId VARCHAR(500) PRIMARY KEY,
    nombre_pelicula VARCHAR(500),
    poster VARCHAR(500),
    anyo INT(4)
);
CREATE  TABLE IF NOT EXISTS a18marcastru_moviequiz4.valoracion (
    id_user TiNYINT,
    id_pelicula VARCHAR(500),
    favorito INT,
    puntuacion INT,
    comentario VARCHAR(500),
    PRIMARY KEY (id_pelicula, id_user),
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_pelicula) REFERENCES peliculas(imdbId)
);