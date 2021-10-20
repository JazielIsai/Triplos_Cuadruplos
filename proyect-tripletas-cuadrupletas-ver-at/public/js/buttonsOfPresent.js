import * as cuadruplo from "./infoCudruplos.js";
import * as triplo from "./infoTriples.js";

let indexTriplos = 1;
let indexCuadruplos = 1;
let diapositivas = "";

//Ejecución de los botones
document.getElementById("btnNext").onclick=BtnNextSlide;
document.getElementById("btnPrevious").onclick=BtnPreviousSlide;
document.getElementById("btnpresionarCuatruplos").onclick = IrCuadruplos;

//Funcion para cambiar de diapositiva
function BtnNextSlide() {
    let index = 0;
    if (indexTriplos !== 0) {
        indexTriplos = indexTriplos + 1;
        diapositivas = triplo.PresentTriplos(indexTriplos);
        index = indexTriplos;
    }
    else {
        indexCuadruplos = indexCuadruplos + 1
        diapositivas = cuadruplo.PresentCuadruplos(indexCuadruplos);
        index = indexCuadruplos;
    }
    if (index !== 7) {
        let cambio = document.getElementById("diapositivaParrafo").innerHTML = diapositivas;
        //document.getElementById("btnNext").onclick = diapositivas();
        console.log("Diapositiva: " + (index-1));
    }
    else {
        //CreateButtonCuadruplos();
        console.log("estoy dentro del else, creando el button");
    }
    console.log("entre al metodo: --- NEXT ---");
    //count++;
}

//btnSiguiente.addEventListener('click',diapositivas,true);

function BtnPreviousSlide() {
    if (indexTriplos !== 0) {
        indexTriplos = indexTriplos - 1;
        diapositivas = triplo.PresentTriplos(indexTriplos);
    }
    else {
        indexCuadruplos = indexCuadruplos - 1
        diapositivas = cuadruplo.PresentCuadruplos(indexCuadruplos);
    }
    let cambio = document.getElementById("diapositivaParrafo").innerHTML = diapositivas;
    //document.getElementById("btnNext").onclick = diapositivas();

    console.log(cambio);
    console.log("entre al metodo: --- PREVIOUS ---");
    //count++;
}
/*
function CreateButtonCuadruplos() {
    let btnID = document.getElementById("boton");
    let btnCreate = document.createElement("button");
    btnCreate.setAttribute("id", "btnpresionarCuatruplos");
    btnCreate.innerText = "Ir a Cuatruplos";
    btnID.appendChild(btnCreate);
}
*/

function IrCuadruplos() {
    document.getElementById("img-method").style.display="none";
    indexTriplos=0;
    document.getElementById("diapositivaParrafo").innerHTML = cuadruplo.PresentCuadruplos(1);
}
/*function btnIrCuatruplos() {
    let btn = document.getElementById("btnpresionarCuatruplos");
    btn.addEventListener('click', cuadruplo.PresentCuadruplos(0), true);
    indexTriplos = 0;
    diapositivas = PresentCuadruplos(0);

}*/
