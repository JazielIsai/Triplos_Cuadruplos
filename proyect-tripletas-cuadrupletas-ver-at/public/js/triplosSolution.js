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

    let SaveExpressionDelete = "";

    //caso base
    if (pilaExpression.length === 0) {
        return;
    }

    //for(let i = 0; i <= operatorAmount; i++){
    //   
    //   -- pilaExpression
    //   SaveExpressionDelete =  
    // newExpressionToSave.push(SaveExpressionDelete)  ( 3 + 4 ) , ( 2 - 5  ) ,  T1 / T2 , T3 


    // pila Expression que contiene una expresion aritmetica ejem: (3+4)/(2-5) va a comparar por mewdio de posiciones
    if (pilaExpression[i] === "(" && pilaExpression[i + 1] === "(") { //tiene dos parentesis de apertura luego luego?
        SaveExpressionDelete = pilaExpression.splice(i + 1, 5, 'T' + (scoreTemp));
        newExpressionToSave.push(SaveExpressionDelete.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //console.log("1er If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemp++;
    }
    else if (pilaExpression[i] === "(" && pilaExpression[i + 4] === ")") {
        SaveExpressionDelete = pilaExpression.splice(i, 5, 'T' + (scoreTemp));
        newExpressionToSave.push(SaveExpressionDelete.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //console.log("2do If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola 
        scoreTemp++;
    }
    else if (expRegLetterNum.test(pilaExpression[i]) !== false && pilaExpression[i + 1] === "*" && expRegLetterNum.test(pilaExpression[i + 2]) !== false) {
        SaveExpressionDelete = pilaExpression.splice(i, 3, 'T' + (scoreTemp));
        newExpressionToSave.push(SaveExpressionDelete.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //console.log("3er If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemp++;
    }
    else if (expRegLetterNum.test(pilaExpression[i]) !== false && pilaExpression[i + 1] === "/" && expRegLetterNum.test(pilaExpression[i + 2]) !== false) {
        SaveExpressionDelete = pilaExpression.splice(i, 3, 'T' + (scoreTemp));
        newExpressionToSave.push(SaveExpressionDelete.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //console.log("4to If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemp++;
    }
    else if (expRegLetterNum.test(pilaExpression[i]) !== false && pilaExpression[i + 1] === "+" && expRegLetterNum.test(pilaExpression[i + 2]) !== false) {
        SaveExpressionDelete = pilaExpression.splice(i, 3, 'T' + (scoreTemp));
        newExpressionToSave.push(SaveExpressionDelete.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //console.log("5to If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemp++;
    }
    else if (expRegLetterNum.test(pilaExpression[i]) !== false && pilaExpression[i + 1] === "-" && expRegLetterNum.test(pilaExpression[i + 2]) !== false) {
        SaveExpressionDelete = pilaExpression.splice(i, 3, 'T' + (scoreTemp));
        newExpressionToSave.push(SaveExpressionDelete.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //console.log("6to If:   " + newExpressionToSave + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemp++;
    }
    else if (pilaExpression.length === 1) {
        newExpressionToSave.push(pilaExpression.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
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

function MethodArrayOrderTriplos(expressionArray = []) {
    //let score=0;
    //let expressionArray = [];
    let letter = "";
    let operator = [];
    let newExpression = [];
    let copy = "";
    let copyExpression = "";
    let newExpressionFinal = [];
    for (let i = 0; i < expressionArray.length; i++) {
        //expressionArray[i].toString().split(",","");
        copy = expressionArray[i].toString().replace('(', '');
        copy = copy.toString().replace(')', '');
        //copy = copy.split('','/((\d)|(\w+))/');
        newExpression.push(copy);

        operator = expRegOperator.exec(newExpression[i]);
        letter = newExpression[i].replace(expRegOperator, '');
        if (operator !== null) {
            copyExpression = "" + operator[0] + "" + letter + "";
            //console.log("" + operator[0] + ""+ letter + "");  
        }
        else {
            copyExpression = "= " + letter + "";
            //console.log("" + operator[0] + ""+ letter + "");  
        }
        newExpressionFinal.push(copyExpression);
    }
    //console.log(newExpressionFinal); 
    return newExpressionFinal;
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

//Obtener la expresión a realizar
document.getElementById("buttonMethodTriplo").onclick = () => {
    triplos = document.getElementById("inputMethod").value;
    console.log(triplos);
    GraphTable(MethodForOrderAnArray(triplos));
    //console.log(MethodForOrderAnArray(triplos));
}


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
        codigoHTML += "<tr>";
        for (let j = StarNumColumnas; j < EndNumColumnas; j++) {
            if(expressionArrayTriplos[j] === undefined){
                break;
            }
            else{
                codigoHTML += "<td>" + "      ---      " + expressionArrayTriplos[j] + "      ---      " + "</td><!--celda-->";
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