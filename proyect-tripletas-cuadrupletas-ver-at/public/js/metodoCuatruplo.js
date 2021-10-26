//expresiones regulares
let expRegLetNum = /[a-zA-Z0-9]/; //new RegExp("[a-zA-Z0-9]", "g") //
//let ExpRegArimetich = /[a-zA-Z0-9]([+]|[-]|[\/]|[*])[a-zA-Z0-9]/;
let expRegDig = /[0-9]/;
let expRegOp = /([+]|[-]|[\/]|[*])/;

//Variables que uso en mi metodo madre - GetCuadruplos
//let expressionByUser;
let j = 0;
let newExpressionToSaveCua = [];
let scoreTemporal = 1;


//variables para obtener las expresiones dadas por el usuario desde el DOM
let cuadruplos;

/*
function HowManyOperatorAreThere(expressionUser) {
    let operatorAmount = [];
    operatorAmount = expressionUser.match(/([+]|[-]|[\/]|[*])/g);
    return operatorAmount.length;
}*/

//obtener el orden de las expresiones de forma aritmetica
function GetCuadruplos(pilaExpression = [], /*operatorAmount*/) {

    let SaveExpressionDelete = [];

    //caso base
    if (pilaExpression.length === 0) {
        return;
    }

    //for(let i = 0; i <= operatorAmount; i++){
    //   
    //   -- pilaExpression
    //   SaveExpressionDelete =  
    // newExpressionToSaveCua.push(SaveExpressionDelete)  ( 3 + 4 ) , ( 2 - 5  ) ,  T1 / T2 , T3 


    // pila Expression que contiene una expresion aritmetica ejem: (3+4)/(2-5) va a comparar por mewdio de posiciones
    if (pilaExpression[j] === "(" && pilaExpression[j + 1] === "(") { //tiene dos parentesis de apertura luego luego?
        SaveExpressionDelete = pilaExpression.splice(j + 1, 5, 'T' + (scoreTemporal));
        SaveExpressionDelete.push('T' + (scoreTemporal));
        newExpressionToSaveCua.push(SaveExpressionDelete.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //console.log("1er If:   " + newExpressionToSaveCua + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemporal++;
    }
    else if (pilaExpression[j] === "(" && pilaExpression[j + 4] === ")") {
        SaveExpressionDelete = pilaExpression.splice(j, 5, 'T' + (scoreTemporal));
        SaveExpressionDelete.push('T' + (scoreTemporal));
        newExpressionToSaveCua.push(SaveExpressionDelete.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //console.log("2do If:   " + newExpressionToSaveCua + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola 
        scoreTemporal++;
    }
    else if (expRegLetNum.test(pilaExpression[j]) !== false && pilaExpression[j + 1] === "*" && expRegLetNum.test(pilaExpression[j + 2]) !== false) {
        SaveExpressionDelete = pilaExpression.splice(j, 3, 'T' + (scoreTemporal));
        SaveExpressionDelete.push('T' + (scoreTemporal));
        newExpressionToSaveCua.push(SaveExpressionDelete.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //console.log("3er If:   " + newExpressionToSaveCua + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemporal++;
    }
    else if (expRegLetNum.test(pilaExpression[j]) !== false && pilaExpression[j + 1] === "/" && expRegLetNum.test(pilaExpression[j + 2]) !== false) {
        SaveExpressionDelete = pilaExpression.splice(j, 3, 'T' + (scoreTemporal));
        SaveExpressionDelete.push('T' + (scoreTemporal));
        newExpressionToSaveCua.push(SaveExpressionDelete.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //console.log("4to If:   " + newExpressionToSaveCua + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemporal++;
    }
    else if (expRegLetNum.test(pilaExpression[j]) !== false && pilaExpression[j + 1] === "+" && expRegLetNum.test(pilaExpression[j + 2]) !== false) {
        SaveExpressionDelete = pilaExpression.splice(j, 3, 'T' + (scoreTemporal));
        SaveExpressionDelete.push('T' + (scoreTemporal));
        newExpressionToSaveCua.push(SaveExpressionDelete.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //console.log("5to If:   " + newExpressionToSaveCua + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemporal++;
    }
    else if (expRegLetNum.test(pilaExpression[j]) !== false && pilaExpression[j + 1] === "-" && expRegLetNum.test(pilaExpression[j + 2]) !== false) {
        SaveExpressionDelete = pilaExpression.splice(j, 3, 'T' + (scoreTemporal));
        SaveExpressionDelete.push('T' + (scoreTemporal));
        newExpressionToSaveCua.push(SaveExpressionDelete.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //console.log("6to If:   " + newExpressionToSaveCua + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
        scoreTemporal++;
    }
    else if (pilaExpression.length === 1) {
        //newExpressionToSaveCua.push(pilaExpression.toString().replaceAll(',', '')); //.replaceAll("(",""));TravelByTheArray(i, 5, pilaExpression)
        //SaveExpressionDelete.push('T' + (scoreTemporal));
        pilaExpression.splice(0, 1,);
        //console.log("7to If:   " + newExpressionToSaveCua + "la pila es:  " + pilaExpression + " el indice es:  " + i); //------ it Watch in consola
    }


    //En caso necesario reiniciar mi contador o indice
    if (j > pilaExpression.length) {
        j = 0;
    }
    else {
        j++;
        //console.log(i);
    }

    //}
    //CASO RECURSIVO
    GetCuadruplos(pilaExpression);

    return newExpressionToSaveCua;
}


function MethodArrayOrderCuadruplos(expressionArray = []) {
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

        operator = expRegOp.exec(newExpression[i]);
        letter = newExpression[i].replace(expRegOp, '');
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
    //console.log(MethodForOrderAnArray(triplos));


    return MethodArrayOrderCuadruplos(GetCuadruplos(pilaExpression /*, operatorAmount*/));
}


function GraphTableCuadruplos(arrayCuadruplo = []) {
    let expressionArrayCuadruplo = [];
    expressionArrayCuadruplo = ConvertCuadruplosArray(arrayCuadruplo.toString());
    console.log(ConvertCuadruplosArray(arrayCuadruplo.toString()));

    let StarNumColumnas = 0;
    let EndNumColumnas = 4;
    let NumFilas = expressionArrayCuadruplo.length / 2;

    let codigoHTML = "";
    
    codigoHTML = "<table border=\"2\"><tbody>";

    for (let i = 0; i < NumFilas; i++) {
        codigoHTML += "<tr>";
        if(i === 0){
            codigoHTML += "<td>" + "      ---- Operador ----      " + "</td><!--celda-->";
            codigoHTML += "<td>" + "      ---- Operando 1 ----      " + "</td><!--celda-->";
            codigoHTML += "<td>" + "      ---- Operando 2 ----      " + "</td><!--celda-->";
            codigoHTML += "<td>" + "      ---- Resultado ----      " + "</td><!--celda-->";
            codigoHTML += "</tr>";
        }
        for (let j = StarNumColumnas; j < EndNumColumnas; j++) {
            if(expressionArrayCuadruplo[j] === undefined){
                break;
            }
            else{
                codigoHTML += "<td>" + "" + expressionArrayCuadruplo[j] + "" + "</td><!--celda-->";

            }
        }
        StarNumColumnas += 4;
        EndNumColumnas += 4;
        codigoHTML += "</tr>";
    }

    codigoHTML += "</tbody></table>";
    document.getElementById("methodWork").innerHTML = codigoHTML;
}


function ConvertCuadruplosArray(cadena) {
    let expressionTriplos = [];
    let newExpressionTriplos = [];

    expressionTriplos = cadena.split('');

    for (let i = 0; i < expressionTriplos.length; i++) {
        if (expressionTriplos[i] === "T" && expRegDig.test(expressionTriplos[i + 1]) == true) {
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

//console.log(MethodForOrderAnArray('(2*2)+(5/3)'));

//   ((A+B)+C*D+Z-W)+(E+F)+(G-H)+I*J
//   ((A+B)+C*D+Z-W)+(E+F)+(G-H)
//   (A+(B+C)*D+Z-W)
//   (3+4)/(2-5)
//   (2*2)+(5/3)
//   (8/2)*3
//   9/3




document.getElementById("buttonMethodCuadruplo").onclick = () => {
    cuadruplos = document.getElementById("inputMethod").value;
    console.log(cuadruplos);

    document.getElementById("img").style.display="none";


    GraphTableCuadruplos(MethodForOrderAnArray(cuadruplos));
}