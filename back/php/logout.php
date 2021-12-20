<?php
  session_start();

  session_unset();

  session_destroy();

  header('Location: http://moviequiz4.alumnes.inspedralbes.cat/index.html');
?>
