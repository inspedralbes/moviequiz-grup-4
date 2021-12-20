<?php
    require_once('./back/mvc/pelis.php');

    $pelis = new pelis();
    $peliculas = $pelis->select();
    print_r($peliculas);