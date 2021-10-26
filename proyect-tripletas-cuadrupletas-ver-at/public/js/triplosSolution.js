//expresiones regulares
let expRegLetterNum = /[a-zA-Z0-9]/; //new RegExp("[a-zA-Z0-9]", "g") //
//let ExpRegArimetich = /[a-zA-Z0-9]([+]|[-]|[\/]|[*])[a-zA-Z0-9]/;
let expRegDigit = /[0-9]/;
let expRegOperator = /([+]|[-]|[\/]|[*])/;

//Variables que uso en mi metodo madre - GetTriplos
let expressionByUser;
let i = 0;
let newExpressionToSave = [];
let scoreTemp = 1;

//variables para obtener las expresiones dadas por el usuario desde el DOM
let triplos;

/*
function HowManyOperatorAreThere(expressionUser) {
    let operatorAmount = [];
    operatorAmount = expressionUser.match(/([+]|[-]|[\/]|[*])/g);
    return operatorAmount.length;
}*/

//obtener el orden de las expresiones de forma aritmetica
function GetTriplos(pilaExpression = [], /*operatorAmount*/) {

    let SaveExpressionDelete = ""; //Guardaremos las expresiones que se vamos a ir eliminando de la expresion original, para componer una nueva, apartir de la creada

    //caso base, para salirme de la recursividad, cuando la tarea se haya ejecutado
    if (pilaExpression.length === 0) {
        return;
    }   

    //for(let i = 0; i <= operatorAmount; i++){
    //   
    //   -- pilaExpression
    //   SaveExpressionDelete =  
    // newExpressionToSave.push(SaveExpressionDelete)  ( 3 + 4 ) , ( 2 - 5  ) ,  T1 / T2 , T3 


    // pila Expression que contiene una expresion aritmetica ejem: (3+4)/(2-5) va a comparar por medio de posiciones
    if (pilaExpression[i] === "(" && pilaExpression[i + 1] === "(") { //tiene dos parentesis de apertura luego luego?
        SaveExpressionDelete = pilaExpression.splice(i + 1, 5, 'T' + (scoreTemp));
        newExpressionToSave.push(SaveExpressionDelete.toString().replaceAll(',', '')); 
        //console.log("1er If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemp++;
    }
    else if (pilaExpression[i] === "(" && pilaExpression[i + 4] === ")") {
        SaveExpressionDelete = pilaExpression.splice(i, 5, 'T' + (scoreTemp));
        newExpressionToSave.push(SaveExpressionDelete.toString().replaceAll(',', '')); 
        //console.log("2do If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola 
        scoreTemp++;
    }
    else if (expRegLetterNum.test(pilaExpression[i]) !== false && pilaExpression[i + 1] === "*" && expRegLetterNum.test(pilaExpression[i + 2]) !== false) {
        SaveExpressionDelete = pilaExpression.splice(i, 3, 'T' + (scoreTemp));
        newExpressionToSave.push(SaveExpressionDelete.toString().replaceAll(',', '')); 
        //console.log("3er If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemp++;
    }
    else if (expRegLetterNum.test(pilaExpression[i]) !== false && pilaExpression[i + 1] === "/" && expRegLetterNum.test(pilaExpression[i + 2]) !== false) {
        SaveExpressionDelete = pilaExpression.splice(i, 3, 'T' + (scoreTemp));
        newExpressionToSave.push(SaveExpressionDelete.toString().replaceAll(',', '')); 
        //console.log("4to If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemp++;
    }
    else if (expRegLetterNum.test(pilaExpression[i]) !== false && pilaExpression[i + 1] === "+" && expRegLetterNum.test(pilaExpression[i + 2]) !== false) {
        SaveExpressionDelete = pilaExpression.splice(i, 3, 'T' + (scoreTemp));
        newExpressionToSave.push(SaveExpressionDelete.toString().replaceAll(',', '')); 
        //console.log("5to If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemp++;
    }
    else if (expRegLetterNum.test(pilaExpression[i]) !== false && pilaExpression[i + 1] === "-" && expRegLetterNum.test(pilaExpression[i + 2]) !== false) {
        SaveExpressionDelete = pilaExpression.splice(i, 3, 'T' + (scoreTemp));
        newExpressionToSave.push(SaveExpressionDelete.toString().replaceAll(',', '')); 
        //console.log("6to If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemp++;
    }
    else if (pilaExpression.length === 1) {
        newExpressionToSave.push(pilaExpression.toString().replaceAll(',', '')); 
        pilaExpression.splice(0, 1,);
        //console.log("7to If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
    }


    //En caso necesario reiniciar mi contador o indice
    if (i > pilaExpression.length) {
        i = 0;
    }
    else {
        i++;
        //console.log(i);
    }

    //}
    //CASO RECURSIVO
    GetTriplos(pilaExpression);

    return newExpressionToSave;
}
//Se ordena la matriz de acuerdo al orden de los triplos
//ciertamente el anterior metodo, ya ha arreglado las expresiones
//de acuerdo a las leyes de signos la expresion aritmetica que fue dada
//ahora en este metodo lo que hara, es darle la forma de triplos 
function MethodArrayOrderTriplos(expressionArray = []) {

    let letter = "";
    let operator = [];
    let newExpression = [];
    let copy = "";
    let copyExpression = "";
    let newExpressionFinal = [];
    for (let i = 0; i < expressionArray.length; i++) {
        //expressionArray[i].toString().split(",","");
        copy = expressionArray[i].toString().replace('(', ''); //Quitamos todos los parentesis de apertura 
        copy = copy.toString().replace(')', ''); //quitamos todos los parentesis de cierre
        //copy = copy.split('','/((\d)|(\w+))/');
        newExpression.push(copy);//agregamos la nueva expresion sin los parentesis 

        operator = expRegOperator.exec(newExpression[i]); //buscamos el operador
        letter = newExpression[i].replace(expRegOperator, ''); //eliminamos el operador
        if (operator !== null) { //acomodamos la expresion de acuerdo a los triplos.
            copyExpression = "" + operator[0] + "" + letter + "";
            //console.log("" + operator[0] + ""+ letter + "");  
        }
        else {
            copyExpression = "= " + letter + "";
            //console.log("" + operator[0] + ""+ letter + "");  
        }
        newExpressionFinal.push(copyExpression); //agregamos la expresion completa
    }
    //console.log(newExpressionFinal); 
    return newExpressionFinal; //regresamos la expresion ya lista
}

function MethodForOrderAnArray(expressionUser) {
    let pilaExpression = [];
    let operatorAmount = 0;
    pilaExpression = expressionUser.split('');
    console.log(pilaExpression);

    //operatorAmount = HowManyOperatorAreThere(expressionUser);
    //console.log(operatorAmount);

    return MethodArrayOrderTriplos(GetTriplos(pilaExpression /*, operatorAmount*/));
}

//   ((A+B)+C*D+Z-W)+(E+F)+(G-H)+I*J
//   ((A+B)+C*D+Z-W)+(E+F)+(G-H)
//   (A+(B+C)*D+Z-W)
//   (3+4)/(2-5)
//   (2*2)+(5/3)
//   (8/2)*3
//   9/3
//console.log(MethodForOrderAnArray("(3+4)/(2-5)"));

//Obtener la expresión a realizar que la da el usuario, usando los evento click, para obtener lo que se ha escrito en el textbox
document.getElementById("buttonMethodTriplo").onclick = () => {
    triplos = document.getElementById("inputMethod").value; //obtiene la expresion
    console.log(triplos); //imprimimos en consola la expresion
    
    document.getElementById("img").style.display="none";
    //setTimeout(()=>{    document.getElementById('img').style.display="none";},2000);


    GraphTable(MethodForOrderAnArray(triplos)); //empezamos a hacer los triplos para despues graficar
    //console.log(MethodForOrderAnArray(triplos));
}

alert("Este formulario, al moemnto de calcular, sean triplos o cuadruplos \n solo acepta, dentro de la expresion aritmetica que se desee poner, un operando, seguido de un operador, seguido de un operando, esto se puede repetir n veces y puede tener parentesis. ");

//La funcion, nos servira para graficar la tabla, una vez que ya se obtenga los triplos
function GraphTable(arrayTriplos = []) {
    let expressionArrayTriplos = [];
    expressionArrayTriplos = ConvertTriplosArray(arrayTriplos.toString());
    console.log(ConvertTriplosArray(arrayTriplos.toString()));

    let StarNumColumnas = 0;
    let EndNumColumnas = 3;
    let NumFilas = expressionArrayTriplos.length / 2;

    let codigoHTML = "";
    codigoHTML = "<table border=\"2\"><tbody>";

    for (let i = 0; i < NumFilas; i++) {
        if(i === 0){ //creacion del encabezado de la tabla
            codigoHTML += "<tr>";
            codigoHTML += "<th>" + "      ---- Operador ----      " + "</th><!--celda-->";
            codigoHTML += "<th>" + "      ---- Operando 1 ----      " + "</th><!--celda-->";
            codigoHTML += "<th>" + "      ---- Operando 2 ----      " + "</th><!--celda-->";
            codigoHTML += "</tr>";
        }
        codigoHTML += "<tr>";
        for (let j = StarNumColumnas; j < EndNumColumnas; j++) {
            if(expressionArrayTriplos[j] === undefined){
                break;
            }
            else{//impresion de la tabla de los triplos
                codigoHTML += "<td>" + "" + expressionArrayTriplos[j] + "" + "</td><!--celda-->";
                //codigoHTML += "<td>" + expressionArrayTriplos[j] + "</td><!--celda-->";

            }
        }
        StarNumColumnas += 3;
        EndNumColumnas += 3;
        codigoHTML += "</tr>";
    }

    codigoHTML += "</tbody></table>";
    document.getElementById("methodWork").innerHTML = codigoHTML;
}

//Metodo para juntar las T y los dijitos, y eliminar las comas, para asi poder pasar a imprimir en tablas nuestros triplos 
function ConvertTriplosArray(cadena) {
    let expressionTriplos = [];
    let newExpressionTriplos = [];

    expressionTriplos = cadena.split('');

    for (let i = 0; i < expressionTriplos.length; i++) {
        if (expressionTriplos[i] === "T" && expRegDigit.test(expressionTriplos[i + 1]) == true) {
            newExpressionTriplos.push("" + expressionTriplos[i] + " " + expressionTriplos[i + 1] + "")
            i++;
        }
        else if (expressionTriplos[i] === ",") {
            continue;
        }
        else {
            newExpressionTriplos.push("" + expressionTriplos[i] + "");
        }
        //console.log(newExpressionTriplos);
    }
    return newExpressionTriplos;
}








///////////////////////////////////////
function mostrar()
{
    document.getElementById('img').style.display="block";
}
function ocultar()
{
    document.getElementById('img').style.display="none";
}