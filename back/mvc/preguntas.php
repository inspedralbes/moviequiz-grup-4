<?php
    require_once('pelis.php');

    $pelis = new pelis();
    $peliculas = $pelis->select();

    session_start();
    $arr = array('exito' => true, 'pelicula' => $peliculas);
    $myJSON = json_encode($arr);
    echo $myJSON;