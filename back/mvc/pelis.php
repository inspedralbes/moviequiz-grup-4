<?php

// magic constant
require_once ("DBAbstractModel.php");

class pelis extends DBAbstractModel {

    private $imdbId;
    private $nombre_pelicula;
    private $poster;
    private $anyo;

    // public $message;

    function __construct() {
        $this->db_name = "a18marcastru_moviequiz4";
    }

    function __toString() {
        echo "entro string <br>";
        return "(" . $this->imdbId . ", " . $this->nombre_pelicula . ", " . $this->poster .", " . $this->anyo . ")";
    }

    function __destruct() {
    }

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
        $this->query .= " FROM peliculas";
        $this->get_results_from_query();
        return $this->rows;

    }

    public function select($nombre_pelicula="") {
        if (!empty($nombre_pelicula)) {
            $this->query = "SELECT *
                    FROM peliculas
                    WHERE nombre_pelicula = '$nombre_pelicula'";
            $this->get_results_from_query();
        }

        if (count($this->rows)==1) {
            foreach ($this->rows[0] as $property => $value)
                $this->$property = $value;
        }
        return $this->rows;
    }

    public function select2($id_pelicula="") {
        if (!empty($id_pelicula)) {
            $this->query = "SELECT *
                    FROM peliculas
                    WHERE imdbId = '$id_pelicula'";
            $this->get_results_from_query();
        }
        if (count($this->rows)==1) {
            foreach ($this->rows[0] as $property => $value)
                $this->$property = $value;
        }
        return $this->rows;
    }
    public function select3() {
        $this->query = "SELECT *
                FROM peliculas ORDER BY RAND() LIMIT 5";
        $this->get_results_from_query();

        if (count($this->rows)==1) {
            foreach ($this->rows[0] as $property => $value)
                $this->$property = $value;
        }
        return $this->rows;
    }

    public function insert($user_data = array()) {
        if (array_key_exists("nombre_pelicula", $user_data)) {
            $result = $this->select($user_data["nombre_pelicula"]);
            if (empty($result)) {
                foreach ($user_data as $field => $value)
                    $$field = $value;
                $this->query="INSERT INTO peliculas (imdbId, nombre_pelicula, poster, anyo)
                      VALUES ('$imdbId','$nombre_pelicula','$poster','$anyo')";
                $this->execute_single_query();
                $this->message = "Se ha insertado una pelicula";
            } else $this->message = "Ya hay una pelicula";
        } else $this->message = "Usuari no inserit";
    }

    public function update ($userData = array()) {

    }

    public function delete ($nom="") {

    }
}