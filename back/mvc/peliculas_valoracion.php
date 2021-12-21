<?php

    require_once('pelis.php');
    require_once('valores.php');

session_start();
if (isset($_SESSION['usuario'])) {
    $user = $_SESSION['usuario'];
    if(!empty($_POST['imdbId']) && !empty($_POST['nombre_pelicula'])) {
        $nuevoPeli = array("imdbId" => $_POST['imdbId'], "nombre_pelicula" => $_POST['nombre_pelicula'], "poster" => $_POST['poster'],
            "anyo" => $_POST['anyo']);
        $peli = new pelis();
        $peli->insert($nuevoPeli);

        $nuevoValor = array("id_user" => $user['id'], "id_pelicula" => $_POST['imdbId'], "favorito" => $_POST['favorito'], "puntuacion" => $_POST['puntuacion'],
            "comentario" => $_POST['comentario']);
        $valor = new valores();
        $valor->insert($nuevoValor);
    }
    else {
        $arrValor = array("id_user" => $user['id']);
        $favPeli = new valores();
        $favoritos = $favPeli->select2($arrValor['id_user']);
        for($i = 0, $size = count($favoritos);$i < $size;$i++) {
            $arrPeli = array("id_pelicula" => $favoritos[$i]['id_pelicula']);
            $peli2 = new pelis();
            $pelicula[$i] = $peli2->select2($arrPeli['id_pelicula']);
        }
        session_start();
        $arr = array("exito" => true, "peliculas" => $pelicula, "favoritos" => $favoritos);
        $myJSON = json_encode($arr);
        echo $myJSON;
    }
}
?>