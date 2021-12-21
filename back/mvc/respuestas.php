<?php
    require_once('pelis.php');

    $resp = array($_POST['puntuacion1'], $_POST['puntuacion2'], $_POST['puntuacion3'], $_POST['puntuacion4']);
    print_r($resp);
    /*$pelis = new pelis();
    $peliculas = $pelis->select();*/

    session_start();
    $arr = array('exito' => true, 'pelicula' => $resp);
    $myJSON = json_encode($arr);
    echo $myJSON;