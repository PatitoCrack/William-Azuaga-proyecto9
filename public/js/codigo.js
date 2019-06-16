var fila1= [2,6,5,4,5,5];
var fila2= [4,6,6,3,2,6];
var fila3= [3,4,1,2,6,3];
var fila4= [1,4,2,5,6,1];
var fila5= [5,5,3,2,2,1];
var fila6= [4,1,4,3,1,3];
var tablero=[fila1,fila2,fila3,fila4,fila5,fila6];
var colorTablero=[color1,color2,color3,color4,color5,color6];
var posUsadas=[]
var posicionNueva=0
 var contador=0

var color1= ["blue","yellow","pink","red","yellow","blue"];
var color2= ["blue","white","pink","red","yellow","blue"];
var color3= ["blue","yellow","blue","red","red","pink"];
var color4= ["pink","white","pink","red","green","red"];
var color5= ["green","white","green","green","white","yellow"];
var color6= ["green","white","pink","white","green","yellow"];
var long1=fila1.length
var long2=fila2.length
var long3=fila3.length
var long4=fila4.length
var long5=fila5.length
var long6=fila6.length
var i=0
var numero1=1
var posInicial=[0,0];
var posFinal=[0,0];
var posicionActual=posInicial
var filaInicial=0;
var colInicial=0;
var colorInicial=[0,0];

var filaFinal=0;
var colFinal=0;


function comprobarMov(fila,columna){

  let numMov=tablero[fila-1][columna-1];

}

function casillaAleatoria() {
  while (true) {
    filaInicial= Math.floor((Math.random() *6) +1);
    filaFinal= Math.floor((Math.random() *6) +1);
    if (filaInicial != filaFinal && filaInicial!=colInicial) {
      break;
    }
  }
  while (true) {
      colInicial= Math.floor((Math.random() *6) +1);
      colFinal= Math.floor((Math.random() *6) +1);
    if (colInicial != colFinal && colInicial!=filaInicial) {
      break;
    }
  }
      posInicial.splice(0,1, `${filaInicial}`);
      posFinal.splice(0,1, `${filaFinal}`);

      posInicial.splice(1,1, `${colInicial}`);
      posFinal.splice(1,1, `${colFinal}`);
  }

function iniciaTabla() {
          document.write("<table CELLSPACING=15 border=3 align=center bgcolor= #d1f2eb id=tablaJuego >")
        document.write("<tr>")


  for (i = 0; i < long1; i++) {
    var colores =color1[i];


    if (posInicial[0]==1 && posInicial[1]==i+1) {
      document.write(`<td id=${i} name='${color1[i]}' align=center width=60 height=30 bgcolor=\"` + colores + "\" style= border:solid;border-color:black;border-width:5px;border-radius:15px><FONT size= 12>");
    }
    else if(posFinal[0]==1 && posFinal[1]==i+1) {
      document.write(`<td id=${i} name='${color1[i]}' align=center width=60 height=30 bgcolor=\"` + colores + "\" style= border:solid;border-color:#5b2c6f;border-width:5px;border-radius:15px><FONT size= 12>");

    }
    else {
      document.write(`<td id=${i} name='${color1[i]}' align=center width=60 height=30 bgcolor=\"` + colores + "\" style= border:solid;border-color:white;border-width:5px;border-radius:15px><FONT size= 12" + `>`);

    }
    document.write(fila1[i])

  }

  document.write("</tr>")


  document.write("<tr>")
  for (i = 0; i < long2; i++) {
    var colores2 =color2[i];
    if (posInicial[0]==2 && posInicial[1]==i+1) {
          document.write("<td align=center width=60 height=30 bgcolor=\"" + colores2 + "\" style= border:solid;border-color:black;border-width:5px;border-radius:15px><FONT size= 12>");
    }
    else if (posFinal[0]==2 && posFinal[1]==i+1) {
      document.write("<td align=center width=60 height=30 bgcolor=\"" + colores2 + "\" style= border:solid;border-color:#5b2c6f;border-width:5px;border-radius:15px><FONT size= 12>")
    }
      else {
          document.write(`<td id=1${i} align=center width=60 height=30 bgcolor=\"` + colores2 + "\" style= border:solid;border-color:white;border-width:5px;border-radius:15px><FONT size= 12>");
      }
    document.write(fila2[i])
    document.write("</td>")
  }
  document.write("</tr>")

  document.write("<tr>")
  for (i = 0; i < long3; i++) {
    var colores3 =color3[i];
    if (posInicial[0]==3 && posInicial[1]==i+1) {
      document.write("<td align=center width=60 height=30 bgcolor=\"" + colores3 + "\" style= border:solid;border-color:black;border-width:5px;border-radius:15px><FONT size= 12>");
    }
    else if (posFinal[0]==3 && posFinal[1]==i+1) {
      document.write("<td align=center width=60 height=30 bgcolor=\"" + colores3 + "\" style= border:solid;border-color:#5b2c6f;border-width:5px;border-radius:15px><FONT size= 12>")
    }
    else {
      document.write("<td align=center width=60 height=30 bgcolor=\"" + colores3 + "\" style= border:solid;border-color:white;border-width:5px;border-radius:15px><FONT size= 12>");
    }

    document.write(fila3[i])
    document.write("</td>")
  }
  document.write("</tr>")

  document.write("<tr>")
  for (i = 0; i < long4; i++) {
    var colores4 =color4[i];
      if (posInicial[0]==4 && posInicial[1]==i+1) {
          document.write("<td align=center width=60 height=30 bgcolor=\"" + colores4 + "\" style= border:solid;border-color:black;border-width:5px;border-radius:15px><FONT size= 12>");
      }
      else if (posFinal[0]==4 && posFinal[1]==i+1) {
        document.write("<td align=center width=60 height=30 bgcolor=\"" + colores4 + "\" style= border:solid;border-color:#5b2c6f;border-width:5px;border-radius:15px><FONT size= 12>")
      }
      else {
        document.write("<td align=center width=60 height=30 bgcolor=\"" + colores4 + "\" style= border:solid;border-color:white;border-width:5px;border-radius:15px><FONT size= 12>");
      }

    document.write(fila4[i])
    document.write("</td>")
  }
  document.write("</tr>")

  document.write("<tr>")
  for (i = 0; i < long5; i++) {
    var colores5 =color5[i];
      if (posInicial[0]==5 && posInicial[1]==i+1) {
        document.write("<td align=center width=60 height=30 bgcolor=\"" + colores5 + "\" style= border:solid;border-color:black;border-width:5px;border-radius:15px><FONT size= 12>");
      }
      else if (posFinal[0]==5 && posFinal[1]==i+1) {
        document.write("<td align=center width=60 height=30 bgcolor=\"" + colores5 + "\" style= border:solid;border-color:#5b2c6f;border-width:5px;border-radius:15px><FONT size= 12>")
      }
      else {
        document.write("<td align=center width=60 height=30 bgcolor=\"" + colores5 + "\"style= border:solid;border-color:white;border-width:5px;border-radius:15px><FONT size= 12>");
      }
    document.write(fila5[i])
    document.write("</td>")
  }
  document.write("</tr>")

  document.write("<tr>")
  for (i = 0; i < long6; i++) {
    var colores6 =color6[i];
      if (posInicial[0]==6 &&posInicial[1]==i+1) {
        document.write("<td align=center width=60 height=30 bgcolor=\"" + colores6 + "\" style= border:solid;border-color:black;border-width:5px;border-radius:15px><FONT size= 12>");
      }
      else if (posFinal[0]==6 && posFinal[1]==i+1) {
        document.write("<td align=center width=60 height=30 bgcolor=\"" + colores6 + "\" style= border:solid;border-color:#5b2c6f;border-width:5px;border-radius:15px><FONT size= 12>")
      }
      else {
        document.write("<td align=center width=60 height=30 bgcolor=\"" + colores6 + "\" style= border:solid;border-color:white;border-width:5px;border-radius:15px><FONT size= 12 >");
      }

      document.write(fila6[i])
    document.write("</td>")
  }
    document.write("</tr>")
  document.write("</table>")

}


function validarSoloJs(){
 fila = document.getElementById("fila").value;
 columna = document.getElementById("columna").value;
 posicionNueva=tablero[fila-1][columna-1]
 filaNueva=fila
 columnaNueva=columna
 var posicionColor=0
 if (filaNueva==1) {
     var posicionColor=color1[colInicial-1];
      var colorNuevo=color1[columnaNueva-1]
 }
 if (filaNueva==2) {
     var posicionColor=color2[colInicial-1];
     var colorNuevo=color2[columnaNueva-1]
 }
 if (filaNueva==3) {
     var posicionColor=color3[colInicial-1];
     var colorNuevo=color3[columnaNueva-1]
 }
 if (filaNueva==4) {
     var posicionColor=color4[colInicial-1];
     var colorNuevo=color4[columnaNueva-1]
 }
 if (filaNueva==5) {
     var posicionColor=color5[colInicial-1];
     var colorNuevo=color5[columnaNueva-1]
 }
 if (filaNueva==6) {
     var posicionColor=color6[colInicial-1];
     var colorNuevo=color6[columnaNueva-1]
 }
 if((fila>=1 && fila<=6) && (columna>=1 && columna<=6) && (filaNueva==filaInicial || columnaNueva==colInicial)) {
   if (posicion==posicionNueva || posicionColor==colorNuevo) {
     var comprobaciones=""
     var comprobar=document.getElementById("comprobacion");
     console.log(tablero[fila-1][columna-1]);
     comprobacion.innerHTML=comprobaciones
     console.log(fila,columna);
     filaInicial=filaNueva
     colInicial=columnaNueva
     posicion=posicionNueva
     console.log(colorNuevo);
      contador=contador+1
      cuenta = document.getElementById("numMovs").value=contador;
      movs = document.getElementById("Movimientos").value+"("+fila+","+columna+") ";
      document.getElementById("Movimientos").value=movs
      mensajes.value="Bien hecho";
   }

   }
   else  {
            mensajes.value="Error";
   }

if (filaInicial==filaFinal && colInicial==colFinal) {
    mensajes.value="Bien hecho, has ganado";
}

}
document.write("Fila:");
document.write("<br>");
document.write("<input type=number id=fila>");
document.write("<br>");
document.write("Columna:");
document.write("<br>");
document.write("<input type=number id=columna>");
document.write("<br>");
document.write("<br>");
document.write("<button style=Border-radius:10px; class=nepe onclick=validarSoloJs()>Comprobar movimiento</button>");
document.write("<br>");
document.write("<br>");
document.write("Movimientos:");
document.write("<br>");
document.write("<input class=rojo type=text id=Movimientos disabled=disabled>");
document.write("<br>");
document.write("Num Movs:");
document.write("<br>");
document.write("<input class=rojo type=text id=numMovs disabled=disabled>");
document.write("<br>");
document.write("<br>");
document.write("Mensajes:");
document.write("<br>");
document.write("<input class=rojo type=text id=mensajes disabled=disabled>");




    casillaAleatoria();
      iniciaTabla();

      Movimientos.value=`(${filaInicial},${colInicial})`;

let posicion=tablero[posInicial[0]-1][posInicial[1]-1];
console.log(posicion);

 console.log(filaInicial,colInicial);
