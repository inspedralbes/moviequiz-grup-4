<?php

    require_once('pelis.php');
    require_once('valores.php');

session_start();
if (isset($_SESSION['usuario'])) {
    $user = $_SESSION['usuario'];
    $nuevoPeli = array("imdbId" => $_POST['imdbId'], "nombre_pelicula" => $_POST['nombre_pelicula'], "poster" => $_POST['poster'],
        "anyo" => $_POST['anyo']);
    $peli = new pelis();
    $peli->insert($nuevoPeli);

    $nuevoValor = array("id_user" => $user['id'], "id_pelicula" => $_POST['imdbId'], "favorito" => $_POST['favorito'], "puntuacion" => $_POST['puntuacion'],
        "comentario" => $_POST['comentario']);
    $valor = new valores();
    $valor->insert($nuevoValor);
}
?>