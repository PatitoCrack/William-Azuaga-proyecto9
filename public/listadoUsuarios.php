<?php
require "./../src/conexion.php";
require "./../src/Jugador.php";
  $j=new Usuario();

  $j->conectar();
  $lista=$j->listarJugadores();
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>


    <title></title>
        <link rel="stylesheet" href="css/estilos.css">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  </head>
  <body>
            <?php include "./assets/navSup.php"; ?>
    <div>
  <table id="tablaLista">
    <br>
    <tr>
        <td style="background-color:#2E64FE; text-align:center;"><b>ID</b></td>
        <td style="background-color:#2E64FE;text-align:center;"><b>Nombre</b></td>
        <td style="background-color:#2E64FE; text-align:center;"><b>Apellidos</b></td>
        <td style="background-color:#2E64FE;text-align:center;"><b>Edad</b></td>
        <td style="background-color:#2E64FE; text-align:center;"><b>Curso</b></td>
        <td style="background-color:#2E64FE;text-align:center;"><b>Puntuación</b></td>

    </tr>
    <?php
    foreach ($lista as $usuario1) {
      echo "<tr>";
      echo "<td style=text-align:center;>".$usuario1['id']."</td>";
          echo "<td style=text-align:center;>".$usuario1['nombre']."</td>";
          echo "<td style=text-align:center;>".$usuario1['apellidos']."</td>";
          echo "<td style=text-align:center;>".$usuario1['edad']."</td>";
          echo "<td style=text-align:center;>".$usuario1['curso']."</td>";
          echo "<td style=text-align:center;>".$usuario1['puntuacion']."</td>";
      echo "</tr>";
    } ?>
  </table>

<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

<?php include "./assets/footer.php"; ?>
  </body>
</html>
