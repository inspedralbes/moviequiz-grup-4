<?php

    require_once('pelis.php');

    $part = new pelis();
    $peliculas = $part->select3();

    $puntos = [-15 , -10 , -5 , -2  , 2 , +5 , +10 ,+15];
    $random = array_rand($puntos, 3);
    $partida = array();
    $random = range(1,4);
    shuffle($random);
    $pos = array_slice($random, 0, 4);
    for($i = 0, $size = count($peliculas);$i < $size;$i++) {
        $anyo[1] = $peliculas[$i]['anyo']+0;
        $anyo[2] = $peliculas[$i]['anyo']+$puntos[$random[0]];
        $anyo[3] = $peliculas[$i]['anyo']+$puntos[$random[1]];
        $anyo[4] = $peliculas[$i]['anyo']+$puntos[$random[2]];

        $partida[$i]['id_pelicula'] = $peliculas[$i]['imdbId'];
        $partida[$i]['Nombre_pelicula'] = $peliculas[$i]['nombre_pelicula'];
        $partida[$i]['poster'] = $peliculas[$i]['poster'];
        $partida[$i]['Choice1'] = $anyo[$pos[0]];
        $partida[$i]['Choice2'] = $anyo[$pos[1]];
        $partida[$i]['Choice3'] = $anyo[$pos[2]];
        $partida[$i]['Choice4'] = $anyo[$pos[3]];
    }
    session_start();
    $arr = array("id_Partida" => 1, "Peliculas" => $partida);
    //$arr = array("id_partida" => 10, "Nombre de la partida" => "QuizGame", "Peliculas" => $peliculas, "Año1" => $anyos[0].$anyo, "Año1" => $anyos[0].$anyo, "Año1" => $anyos[0].$anyo, "Año1" => $anyos[0].$anyo);
    $myJSON = json_encode($arr);
    echo $myJSON;
