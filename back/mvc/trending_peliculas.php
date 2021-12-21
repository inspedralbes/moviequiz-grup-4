<?php

    require_once('valores.php');
    require_once('pelis.php');

    $tren = new valores();
    $puntuacion = $tren->select3();
    for($i = 0, $size = count($puntuacion);$i < $size;$i++) {
        $arrTren = array("id_pelicula" => $puntuacion[$i]['id_pelicula']);
        $peli = new pelis();
        $trending_pelic[$i] = $peli->select2($arrTren['id_pelicula']);
    }
    session_start();
    $arr = array("exito" => true, "trending" => $trending_pelic);
    $myJSON = json_encode($arr);
    echo $myJSON;