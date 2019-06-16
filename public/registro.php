<?php
require "./../src/conexion.php";
require "./../src/Jugador.php";
  $j=new Usuario();
  $error=$j->comprobarCampos($_POST);
  if(isset($error)){
      if($error===false){
      
        $j->conectar();
        $j->insertarJugador();
      }
  }
?>
<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
        <link rel="stylesheet" href="css/estilos.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  </head>
  <body>
    <?php
    if(isset($error)){
        if($error!="") echo "<h4>ERROR:$error</h4>";
    }
    ?>
<?php include "./assets/navSup.php"; ?>
    <div>
    <div class="form">
    <h3>Formulario</h3>
<form class="" action="registro.php" method="post">
  Nombre:
  <input type="text" name="nombre" value="" id="nombre">
  <div id="oculto" style='display:none;'>Debes rellenar este campo</div>
  <br>
  Apellidos:
  <input type="text" name="apellidos" value="" id="apellidos">
  <div id="oculto1" style='display:none;'>Debes rellenar este campo</div>
  <br>
  Edad:
  <input type="text" name="edad" value="" id="edad">
  <div id="oculto2" style='display:none;'>Debes rellenar este campo</div>
  <div id="oculto3" style='display:none;'>Tiene que ser un número</div>
  <br>
  Curso:
  <input type="text" name="curso" value="" id="curso">
  <div id="oculto4" style='display:none;'>Debes rellenar este campo</div>
  <div id="oculto5" style='display:none;'>Tiene que ser un número</div>
  <br>
  <input type="submit" name="" value="Enviar" onclick="return comprobar();">
</form>
    </div>

<script type="text/javascript" src="js/comprobar.js"></script>
      <?php include "./assets/footer.php"; ?>
  </body>

</html>
