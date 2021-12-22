<?php
    require_once('pelis.php');

    $resp = array($_POST['respuestas0'], $_POST['respuestas1'], $_POST['respuestas2'], $_POST['respuestas3'], $_POST['respuestas4']);

    session_start();
    $arr = array('exito' => true, 'pelicula' => $resp);
    $myJSON = json_encode($arr);
    echo $myJSON;