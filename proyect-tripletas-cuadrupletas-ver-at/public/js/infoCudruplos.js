
let index = 0;

function PresentCuadruplos(count) {
    document.getElementById("btnpresionarCuatruplos").style.display="none"; //ocultar boton
    document.getElementById("img-method").style.display="none"; //ocultar img 
    document.getElementById("titleDiapositiva").innerHTML="Cuadruplos";
    if (count === 1) {
        return "Un cuádruplo tiene cuatro campos, a los cuales llamamos op, arg1, arg2 y resultado. "+
        "El campo op contiene un código interno para el operador. Por ejemplo, la instrucción de tres "+ 
        "direcciones x = y + z se representa colocando a + en op, y en arg1, z en arg2 y x en resultado. <br>"+
        "A continuación, se muestran dos excepciones a esta regla --> ";
    }
    else if (count === 2) {
        document.getElementById("titleDiapositiva").innerHTML="Excepciones de la regla";
        return ""+
        "1.	Las instrucciones con operadores unarios como x = menos y o x = y no utilizan arg2. "+
        "Observe que para una instrucción de copia como x = y, op es =, mientras que, para la mayoría " +
        "de las otras operaciones, el operador de asignación es implícito. <br>"+
        "2.	Los operadores como param no utilizan arg2 ni resultado. <br>"+
        "3.	Los saltos condicionales e incondicionales colocan la etiqueta de destino en resultado.";
    }
    else if (count === 3) {
        return "• Recordemos la estrucutura: <br> Operación, operando1, operando2, resultado <br>"+
        "Ejemplo: --> (A + B) * (C + D) - E <br>" +
        "<ul><li> +, A, B, T1 </li>"+
        "<li> +, C, D, T2 </li>" +
        "<li> *, T1, T2, T3 </li>"+
        "<li> -, T3, E, T4 </li> ";
    }
    else if (count === 4) {
        document.getElementById("img-method").style.display="block";
        let img = document.getElementById("img-method");
        img.src = "../img/cuadruplo.png";
        return "Ejemplo de cuadruplo:";
    }
    else {
        document.getElementById("titleDiapositiva").innerHTML="";
        document.getElementById("img-method").style.display="block";
        let img = document.getElementById("img-method");
        img.src = "../img/miniunsGracias.png";
        return "¡Gracias por su atención!";
    }
}

/*
function BtnNextDiapositiva() {
    if (index !== 6) {
        document.getElementById("diapositivaParrafo").innerHTML = PresentCuadruplos(index);
        console.log("Diapositiva " + index);
    }
    else {

    }
    index++;
}

function BtnPreviousDiapositiva(params) {
    
}

*/

export{PresentCuadruplos};