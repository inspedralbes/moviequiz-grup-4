<?php

    require_once('pelis.php');

    $part = new pelis();
    $peliculas = $part->select3();

    $partida =
    $random = range(1,4);
    shuffle($random);
    $pos = array_slice($random, 0, 4);
    for($i = 0, $size = count($peliculas);$i < $size;$i++) {
        $anyo[1] = $peliculas[$i]['anyo'];
    }
    session_start();
    $arr = array("id_partida" => 10, "Nombre de la partida" => "QuizGame", "Peliculas" => $peliculas, "Año1" => $anyos[0].$anyo, "Año1" => $anyos[0].$anyo, "Año1" => $anyos[0].$anyo, "Año1" => $anyos[0].$anyo);
    $myJSON = json_encode($arr);
    echo $myJSON;
