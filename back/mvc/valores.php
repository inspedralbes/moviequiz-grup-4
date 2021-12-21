<?php

// magic constant
require_once ("DBAbstractModel.php");//modificar

class valores extends DBAbstractModel {

    private $id_user;
    private $id_pelicula;
    private $favorito;
    private $puntuacion;
    private $comentario;

    // public $message;

    function __construct() {
        $this->db_name = "a18marcastru_moviequiz4";
    }

    function __toString() {
        echo "entro string <br>";
        return "(" . $this->id_user . ", " . $this->id_pelicula . ", " . $this->favorito . ", " . $this->puntuacion .", " . $this->comentario . ")";
    }

    function __destruct() {
    }

    //select dels camps passats de tots els registres
    //stored in $rows property
    public function selectAll($fields=array()) {

        $this->query="SELECT ";
        $firstField = true;
        for ($i=0; $i<count($fields); $i++) {
            if ($firstField) {
                $this->query .= $fields[$i];
                $firstField=false;
            }
            else $this->query .= ", " . $fields[$i];
        }
        $this->query .= " FROM valoracion";
        // $this->query = "SELECT * FROM usuario";
        $this->get_results_from_query();
        return $this->rows;

    }
    public function select($id_pelicula="") {
        if (!empty($id_pelicula)) {
            $this->query = "SELECT *
                    FROM valoracion
                    WHERE id_pelicula = '$id_pelicula'";
            $this->get_results_from_query();
        }
        // Any register selected
        if (count($this->rows)==1) {
            foreach ($this->rows[0] as $property => $value)
                $this->$property = $value;
        }
        return $this->rows;
    }

    public function select2($id_user="") {
        if (!empty($id_user)) {
            $this->query = "SELECT *
                    FROM valoracion
                    WHERE id_user = '$id_user' AND favorito = 1";
            $this->get_results_from_query();
        }
        if (count($this->rows)==1) {
            foreach ($this->rows[0] as $property => $value)
                $this->$property = $value;
        }
        return $this->rows;
    }

    public function select3() {
        $this->query = "SELECT id_pelicula
                    FROM valoracion
                    WHERE puntuacion > 4 OR puntuacion = 4";
        $this->get_results_from_query();
        if (count($this->rows)==1) {
            foreach ($this->rows[0] as $property => $value)
                $this->$property = $value;
        }
        return $this->rows;
    }

    public function insert($user_data = array()) {
        if (array_key_exists("id_pelicula", $user_data)) {
            $result = $this->select($user_data["id_pelicula"]);
            if (empty($result)) {
                foreach ($user_data as $field => $value)
                    $$field = $value;
                $this->query="INSERT INTO valoracion (id_user, id_pelicula, favorito, puntuacion, comentario)
                      VALUES ('$id_user','$id_pelicula','$favorito','$puntuacion','$comentario')";
                $this->execute_single_query();
                $this->message = "Se ha insertado un comentario";
            } else $this->message = "Ya hay un comentario";
        } else $this->message = "Usuari no inserit";
    }

    public function update ($userData = array()) {
    }
    public function delete ($nom="") {
    }
}

?>
