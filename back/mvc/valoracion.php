<?php
    require_once('valores.php');

    //if(!empty($_POST['nombre']) && !empty($_POST['apellido']) && !empty($_POST['correo']) && !empty($_POST['contrasena'])) {
        //$contrasena = password_hash($_POST['contrasena'], PASSWORD_BCRYPT);
        $nuevoValor = array ("nombre_pelicula" => "IT","favorito" => 0,"comentario" => "No me gusto esta pelicula de pequeño.",
            "id_user" => 1);
        $valor = new valores();
        $valor->insert($nuevoValor);
        //$user2->select($newUser["correo"]);

        /*session_start();
        $arr = array('exito' => true, 'mensage' => $user2, 'nombre' => $_POST['nombre'], 'apellido' => $_POST['apellido']);
        $myJSON = json_encode($arr);
        echo $myJSON;*/
    //}