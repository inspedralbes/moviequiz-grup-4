<?php

    require_once ('valores.php');
    require_once ('pelis.php');

    $tren = new valores();
    $trending = $tren->select3();
    /*for($i = 0, $size = count($trending);$i < $size;$i++) {
        $arrTren = array("id_pelicula" => $trending[$i]['id_pelicula']);
        $peli = new pelis();
        $trending_pelic[$i] = $peli->select2($arrTren['id_pelicula']);
    }*/
    session_start();
    $arr = array("exito" => true, "trending" => $trending);
    //$arr = array("exito" => true, "trending" => $trending);
    $myJSON = json_encode($arr);
    echo $myJSON;