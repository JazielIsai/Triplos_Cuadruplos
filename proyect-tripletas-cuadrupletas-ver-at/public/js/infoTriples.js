//let index = 0;
//let count = 0;
let cambiarTexto = "";

//cambiarTexto= document.getElementById("").innerHTML=diapositiva;

function PresentTriplos(count) {
    document.getElementById("btnpresionarCuatruplos").style.display="none";
    document.getElementById("img-method").style.display="none";
    if (count === 2) {
        document.getElementById("titleDiapositiva").innerHTML = "Triplos";
        return cambiarTexto = "En la historia de los compiladores han sido utilizadas una amplia variedad" +
            " de representaciones intermedias como lo es la siguiente clase de representación de código intermedio" +
            " de un árbol de 3 direcciones, 2 para los operandos y una para la ubicación del resultado." +
            " <br>Esta clase incluye un amplio número de representaciones diferentes entre las cuales encontramos" +
            " cuádruplos y triples. ";
    }
    else if (count === 3) {
        document.getElementById("titleDiapositiva").innerHTML = "Las tripletas son:";
        return cambiarTexto = "" +
            "Se le denominan código de 2 direcciones y los cuádruplos código de 3 direcciones, " +
            "sin embargo, se considera el código de 3 direcciones como una anotación abstracta para varias implantaciones" +
            " siendo las principales los triplos y cuádruplos." +
            "<br> Un triple sólo tiene tres campos, a los cuales llamamos op, arg1 y arg2." +
            "<br> Al usar tripletas, nos referimos al resultado de una operación x op y por su posición," +
            " en vez de usar un nombre temporal explícito.";
    }
    else if (count === 4) {
        document.getElementById("titleDiapositiva").innerHTML = "Ventajas";
        return cambiarTexto = "<ul> <li>Los triplos hacen referencia al valor intermedio hacia el numero del triple" +
            " que lo creo, pero en los cuádruplos requiere que ellos tengan nombre implícitos.</li>" +
            "<li>Los triples tienen una ventaja obvia de ser mas consistente, pero ellos dependen de su posición, " +
            "y hacen que la optimización presente cambios de código mucho mas compleja </li></ul>";
    }
    else if (count === 5) {
        document.getElementById("titleDiapositiva").innerHTML = "Ejemplo de Tripleta"
        return cambiarTexto = " " +
            "Recordemos el orden: <Operador>, <operando1>, <operando2> <br>" +
            "El resultado se asocia al número de tripleta " +
            "Ejemplo: W * X + (Y + Z)" +
            "<ul><li>	*, W, X</li>" +
            "<li>  +, Y, Z </li>" +
            "<li>  +, (1), (2)</li>";
    }
    else if (count === 6) {
        document.getElementById("img-method").style.display="block";
        let img = document.getElementById("img-method");
        img.src = "../img/triplos.png";
        return cambiarTexto = "";
    }
    else {
        document.getElementById("btnpresionarCuatruplos").style.display="block";
        //parrafo.innerHTML="No se realizo el conteo";
        return "Listo, has terminado con la exposición de triplos, estás listo para pasar a la " +
            "siguiente tema, te pido dos cosas: <br>1. Realizar un click en el boton Next " +
            "<br>2. Realizar un clic en el boton: --- Ir a Cuatruplos: ---";
    }

}
/*

function BtnNextDiapositiva() {
    //console.log(count);
    index = index + 1;
    if(index !== 6){
        let cambio = document.getElementById("diapositivaParrafo").innerHTML = diapositivas(index);
        //document.getElementById("btnNext").onclick = diapositivas();
        console.log("Diapositiva: "+index);
    }
    else{
        CreateButtonCuadruplos();
        console.log("estoy dentro del else, creando el button");
    }
    //count++;
}

//btnSiguiente.addEventListener('click',diapositivas,true);

function BtnPreviousDiapositiva() {
    //console.log(count);
    index = index - 1;
    let cambio = document.getElementById("diapositivaParrafo").innerHTML = diapositivas(index);
    //document.getElementById("btnNext").onclick = diapositivas();

    console.log(cambio);
    //count++;
}
*/

export { PresentTriplos };