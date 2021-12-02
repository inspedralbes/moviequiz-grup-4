CREATE DATABASE IF NOT EXISTS movie;

CREATE TABLE IF NOT EXISTS movie.users (
  id TiNYINT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30),
  apellido VARCHAR(30),
  correo VARCHAR(50),
  password VARCHAR(50)
);
INSERT INTO movie.users (nombre, apellido, correo, password) VALUES
     ('Dylan','Vargas','dylan@gmail.com','dylan')