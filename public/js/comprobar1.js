if (comprobar=="" && comprobarApe=="" && comprobarEdad=="" && comprobarCurso=="")  {
document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto1').style.display = 'block';
  document.getElementById('oculto2').style.display = 'block';
  document.getElementById('oculto4').style.display = 'block';
  return false;
}
if (comprobar=="" && comprobarEdad=="" && comprobarCurso=="")  {
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto2').style.display = 'block';
  document.getElementById('oculto4').style.display = 'block';
  return false;
}
else if (comprobar=="" && comprobarApe=="" && comprobarEdad=="" && isNaN(comprobarCurso)) {
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto1').style.display = 'block';
  document.getElementById('oculto2').style.display = 'block';
  document.getElementById('oculto5').style.display = 'block';
  return false;
}
else if (comprobar=="" && comprobarApe=="" && comprobarEdad=="" && comprobarCurso!= isNaN(comprobarCurso)) {
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto1').style.display = 'block';
  document.getElementById('oculto2').style.display = 'block';
  return false;
}
else if (comprobar=="" && comprobarApe=="" && isNaN(comprobarEdad) && comprobarCurso=="") {
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto1').style.display = 'block';
  document.getElementById('oculto3').style.display = 'block';
  document.getElementById('oculto4').style.display = 'block';
  return false;
}
else if (comprobar=="" && comprobarApe=="" && isNaN(comprobarEdad) && isNaN(comprobarCurso)) {
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto1').style.display = 'block';
  document.getElementById('oculto3').style.display = 'block';
  document.getElementById('oculto5').style.display = 'block';
  return false;
}
else if (comprobar=="" && comprobarApe=="" && isNaN(comprobarEdad)) {
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto1').style.display = 'block';
  document.getElementById('oculto3').style.display = 'block';
  return false;
}
else if (comprobar=="" && comprobarApe=="" && isNaN(comprobarCurso)) {
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto1').style.display = 'block';
  document.getElementById('oculto5').style.display = 'block';
  return false;
}
else if (comprobar=="" && comprobarApe=="" && comprobarEdad != isNaN(comprobarEdad) && comprobarCurso=="") {
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto1').style.display = 'block';
  document.getElementById('oculto4').style.display = 'block';
  return false;
}


else if (comprobar=="" && isNaN(comprobarEdad) && comprobarCurso=="") {
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto3').style.display = 'block';
  document.getElementById('oculto4').style.display = 'block';
  return false;
}
else if (comprobar=="" && comprobarEdad=="" && isNaN(comprobarCurso)) {
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto2').style.display = 'block';
  document.getElementById('oculto5').style.display = 'block';
  return false;
}
else if (comprobar=="" && isNaN(comprobarEdad) && isNaN(comprobarCurso)) {
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto3').style.display = 'block';
  document.getElementById('oculto5').style.display = 'block';
  return false;
}

if (comprobarApe=="" && comprobarEdad=="" && comprobarCurso=="")  {
  document.getElementById('oculto1').style.display = 'block';
  document.getElementById('oculto2').style.display = 'block';
  document.getElementById('oculto4').style.display = 'block';
  return false;
}
  else if (comprobarApe=="" && isNaN(comprobarEdad) && comprobarCurso=="") {
    document.getElementById('oculto1').style.display = 'block';
    document.getElementById('oculto3').style.display = 'block';
    document.getElementById('oculto4').style.display = 'block';
    return false;
  }
  else if (comprobarApe=="" && comprobarEdad=="" && isNaN(comprobarCurso)) {
    document.getElementById('oculto1').style.display = 'block';
    document.getElementById('oculto2').style.display = 'block';
    document.getElementById('oculto5').style.display = 'block';
    return false;
  }
  else if (comprobarApe=="" && isNaN(comprobarEdad) && isNaN(comprobarCurso)) {
    document.getElementById('oculto1').style.display = 'block';
    document.getElementById('oculto3').style.display = 'block';
    document.getElementById('oculto5').style.display = 'block';
    return false;
  }

else if (comprobarEdad=="" && comprobarCurso=="")  {
  document.getElementById('oculto2').style.display = 'block';
  document.getElementById('oculto4').style.display = 'block';
  return false;
}

if (comprobar=="" && isNaN(comprobarEdad)) {
  document.getElementById('oculto3').style.display = 'block';
  document.getElementById('oculto').style.display = 'block';
  return false;
}
else if (comprobar=="" && comprobarEdad=="") {
  document.getElementById('oculto2').style.display = 'block';
  document.getElementById('oculto').style.display = 'block';
  return false;
}
if (comprobarApe=="" && isNaN(comprobarEdad)) {
  document.getElementById('oculto1').style.display = 'block';
  document.getElementById('oculto3').style.display = 'block';
  return false;
}
else if (comprobarApe=="" && comprobarEdad=="") {
  document.getElementById('oculto1').style.display = 'block';
  document.getElementById('oculto2').style.display = 'block';
  return false;
}
if (comprobar=="" && isNaN(comprobarCurso)) {
  document.getElementById('oculto5').style.display = 'block';
  document.getElementById('oculto').style.display = 'block';
  return false;
}
if (comprobar=="" && comprobarCurso=="") {
  document.getElementById('oculto4').style.display = 'block';
  document.getElementById('oculto').style.display = 'block';
  return false;
}
else if (comprobarApe=="" && isNaN(comprobarCurso)) {
  document.getElementById('oculto5').style.display = 'block';
  document.getElementById('oculto1').style.display = 'block';
  return false;
}
else if (comprobarApe=="" && comprobarCurso=="") {
  document.getElementById('oculto4').style.display = 'block';
  document.getElementById('oculto1').style.display = 'block';
  return false;
}

if (comprobar=="" && comprobarApe=="") {
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto1').style.display = 'block';
  return false;
}
if (comprobar=="") {
  document.getElementById('oculto').style.display = 'block';
  return false;
}
if (comprobarApe=="") {
  document.getElementById('oculto1').style.display = 'block';
  return false;
}
if (isNaN(comprobarEdad) && isNaN(comprobarCurso)) {
  document.getElementById('oculto2').style.display = 'none';
  document.getElementById('oculto3').style.display = 'block';
  document.getElementById('oculto5').style.display = 'block';
  document.getElementById('oculto4').style.display = 'none';
  return false;
}
if (comprobarEdad=="" && isNaN(comprobarCurso)) {
  document.getElementById('oculto2').style.display = 'block';
  document.getElementById('oculto3').style.display = 'none';
  document.getElementById('oculto5').style.display = 'block';
  document.getElementById('oculto4').style.display = 'none';
}
if (comprobarEdad=="") {
  document.getElementById('oculto3').style.display = 'none';
  document.getElementById('oculto2').style.display = 'block';
  return false;
}

if (isNaN(comprobarEdad) && comprobarCurso=="") {
  document.getElementById('oculto2').style.display = 'none';
  document.getElementById('oculto3').style.display = 'block';
  document.getElementById('oculto5').style.display = 'none';
  document.getElementById('oculto4').style.display = 'block';
}
else if (isNaN(comprobarEdad)) {
  document.getElementById('oculto2').style.display = 'none';
  document.getElementById('oculto3').style.display = 'block';
  return false;
}
if (comprobarCurso=="") {
  document.getElementById('oculto5').style.display = 'none';
  document.getElementById('oculto4').style.display = 'block';
  return false;

}
else if (isNaN(comprobarCurso)) {
  document.getElementById('oculto4').style.display = 'none';
  document.getElementById('oculto5').style.display = 'block';
  return false;
}
