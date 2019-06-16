
function comprobar() {
  var comprobar=document.getElementById("nombre").value;
  var comprobarApe=document.getElementById("apellidos").value;
  var comprobarEdad=document.getElementById("edad").value;
  var comprobarCurso=document.getElementById("curso").value;
  var error=true;
    document.getElementById('oculto').style.display = 'none';
    document.getElementById('oculto1').style.display = 'none';
    document.getElementById('oculto2').style.display = 'none';
    document.getElementById('oculto3').style.display = 'none';
    document.getElementById('oculto4').style.display = 'none';
    document.getElementById('oculto5').style.display = 'none';
if (comprobar=="") {
document.getElementById('oculto').style.display = 'block';
error=false;
}
if (comprobarApe=="") {
  document.getElementById('oculto1').style.display = 'block';
  error=false;
}
if (comprobarEdad=="") {
  document.getElementById('oculto2').style.display = 'block';
  error=false;
}
if (isNaN(comprobarEdad)) {
  document.getElementById('oculto3').style.display = 'block';
  error=false
}
if (comprobarCurso=="") {
  document.getElementById('oculto4').style.display = 'block';
  error=false
}
if (isNaN(comprobarCurso)) {
  document.getElementById('oculto5').style.display = 'block';
  error=false
}
if (error==false) {
  return false;
}
}
