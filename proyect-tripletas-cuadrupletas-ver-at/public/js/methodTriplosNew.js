
//Las expresiones regulares nos serviran para poder trabajar conforme a las leyes de signos, 
//referiendome a las matematicas 
let ExpressionValidateString = '';
const ExpressionParenthesis = /([(])[a-zA-Z0-9]([+]|[-]|[\/]|[*])[a-zA-Z0-9]([)])/g; //encontramos alguna expression entre parentesis en la expresion arimetica que solicito el usuario 
const ExpressionMultiplication = /[a-zA-Z0-9][*][a-zA-Z0-9]/g; //encontramos alguna expresion de multiplicacion en la expresion dada por el usuario
const ExpressionDivision = /[a-zA-Z0-9][/][a-zA-Z0-9]/g; //verificamos si encontramos coincidencias dentro de la expression aritmetica de una expresion de division 
const ExpressionSumOrSub = /[a-zA-Z0-9]([+]|[-])[a-zA-Z0-9]/g; //expression regular donde verifica si en la expression aritmetica encontramos coincidencias de suma o resta

//Obtener la expresión a realizar en los triplos y cuadruplos 
let triplos, cuadruplos;

//Se convierte la expresion de tipo string dada por el usuario a un array, para poder usarlo con posiciones 
function ConvertArray(expresion, bandera1, bandera2) {
    let score=0;
    let expressionArray = [];
    for(let character of expresion){
        if(character === " "){
            continue;
        }
        else if(bandera1 === true){ //This is for the method of ordenamiento burbuja 
            if(character === "(" || character === ")" || character === ","){
                continue;
            }
            else{
                expressionArray.push(character);
                score++;
            }
        }
        else if(bandera2 === true){
            if(character === ","){
                continue;
            }
            else{
                expressionArray.push(character);
                score++;
            }
        }
        else{
            //console.log(character);
            expressionArray.push(character);
            score++;
        }
    }
    console.log(expressionArray); 
    return expressionArray;
}


//validar la expresion --> expresion regular, esta función nos servirá para poder
//validar cada una de las expresiones regulares que ocupemos.
//Se necesitan 3 expresiones regulares, la 1ª validará la expresión aritmetica que este escrita correctamente,
//para proceder con las siguientes operaciones, la 2ª validará que lea LOS PARÉNTESIS Y UNA OPERACIÓN "(A+B)",
//la 3ª validará que lea UNA OPERACIÓN ARITMÉTICA CON LETRAS Y NÚMEROS "A+B"
//la 4ª validará que este escrita correctamente la expresión en la notación infija <operador>, <operando1>, <operador2> --- infija  


//A + B
//ANTES DE MOSTRAR EN LA INTERFAZ, EL RESULTADO, YA SEA DE TRIPLOS O CUADRUPLOS, SE NECESITA CONOCER QUE ESTE ESCRITA 
//* A B  

function ValidateExpresion(expressionUser){

    if(ExpressionValidateString.test(expressionUser) === true) {
        
        return true;
    }
    else {
        console.log("Verifica la expresión:" + expressionUser);
        alert("Verifica tu expresión: " +expressionUser);
        return false;
    }
}

//ordenar el arreglo de la expresion normal, es decir, de esto A + B convertirla a esto + A B
function Swap(index1, index2, array){    
    let temp;
    temp = array[index1];
    array[index1] = array[index1 + 1];
    array[index1 + 1] = temp;
}

function MethodBurbuja (cadena){
    let array = ConvertArray(cadena, true, false);
    let omitir = 2;
    for (let i = 0; i < array.length - 1; i++){
        if(i === omitir){
            omitir = omitir + 3;
            continue;
        }   
        else{
            Swap(i, i + 1, array);
        }
        //for (let character of array[i]){
        //}
        console.log(`esta es la variable a omitir ${omitir}`);
    }
    return array;
}

function ExchangeExpressionToTemp(i, array, savePosition, ScorePosition, deletePosition) {
    //intercambiar las expresiones obtenidas en el arreglo (A+B) por las variables temporale
    if (i === 0) {
        array.splice(savePosition, deletePosition, "T");
        console.log(savePosition + " -- position y la letra i es: " + i);
    }
    else {
        //ScorePosition = ScorePosition + 2;
        array.splice((savePosition - ScorePosition), deletePosition, "T");
        console.log(savePosition + " -- position y la letra i es: " + i);
        //console.log(ScorePosition);
    }
    //i++;
}

function SwapOfStringUser(expressionUser, position, i, ScorePosition, deletePosition) {
    let expression = [];
    expression = expressionUser.split('');
    /*for(let char of expressionUser){
        let character = character + char;
        if(character === "Temp1"){
            continue;
        }
    }*/
    console.log(`Este es el method split: --- `);
    console.log(expression);
    console.log(`Este es el method split: --- `);
    //intercambiar las expresiones obtenidas en el arreglo (A+B) por las variables temporales
    if (i === 0) {
        let expressionDelete = expression.splice(position, deletePosition, "T");
        console.log(`La exp DELETE ES:  ${expressionDelete} y su position es:  ${position} y la letra i: ${i}`);
    }
    else if(i > 0){
        //ScorePosition = ScorePosition + 3;
        expressionDelete = expression.splice((position - ScorePosition), deletePosition, "T");
        console.log(`La exp DELETE ES:  ${expressionDelete} y su position es:  ${position} y la letra i: ${i}`);
        //console.log(ScorePosition);
    }
    let newExpression = expression.toString().replaceAll(",",""); //el replaceAll quita todas las coincidencias de ',' que existen al momento de convertirse en string
    console.log('The expression of user change or alter is:  la expresion es: -- ' +newExpression.toString())
    //i++;
    return newExpression

}

//De acuerdo a las leyes de signos de las matematicas, lo primero en resolver en una expresion aritmetica
// es lo que contiene a dentro del parentesis
function GetExpressionOfParenthesis(expressionUser, array) {
    let saveExpression = [];
    let saveExpressionOfParenthesis = [];
    let savePosition = 0;
    let ScorePosition = 0;
    let i = 0;
    let expressionStringOrder = SwapOfStringUser(expressionUser, savePosition, null, ScorePosition);

    while ((saveExpression = ExpressionParenthesis.exec(expressionStringOrder)) !== null || expressionStringOrder !== "") { //(A+B)
        //
        savePosition = ExpressionParenthesis.lastIndex - 5; //el - 5 es porque el lastIndex me arroja donde termina el indice y donde empieza el proximo recorrido.
        //console.log(`Se ha encontrado: ${saveExpression[0]} y termina en el indice ${savePosition}`);
        //console.log(saveExpression[0]);
        saveExpressionOfParenthesis.push(saveExpression[0]);

        //console.log("Esta es la funcion split: -- " + expressionUser.split(''));

        ExchangeExpressionToTemp(i, array, savePosition, ScorePosition, 5);

        //Intercambio de array
        expressionStringOrder = SwapOfStringUser(expressionStringOrder, savePosition, i, ScorePosition, 5);
        console.log(`The expression of the user is this:  ${expressionStringOrder}`);

        i++;
        do {
            if ((saveExpression = ExpressionMultiplication.exec(expressionStringOrder)) !== null) {
                savePosition = ExpressionMultiplication.lastIndex - 3;
                saveExpressionOfParenthesis.push(saveExpression[0]);
                console.log("La expresion que contiene mult:  " + saveExpression[0] + "y su posicion es: " + savePosition);
                ExchangeExpressionToTemp(i, array, savePosition, ScorePosition, 3);
                expressionStringOrder = SwapOfStringUser(expressionStringOrder, savePosition, i, ScorePosition, 3);

                i++;
            }
            if ((saveExpression = ExpressionDivision.exec(expressionStringOrder)) != null) {
                savePosition = ExpressionDivision.lastIndex - 3;
                saveExpressionOfParenthesis.push(saveExpression[0]);
                console.log("La expresion que contiene Division:  " + saveExpression[0] + "y su posicion es: " + savePosition);
                ExchangeExpressionToTemp(i, array, savePosition, ScorePosition, 3);
                expressionStringOrder = SwapOfStringUser(expressionStringOrder, savePosition, i, ScorePosition, 3);

                i++;
            }
            if ((saveExpression = ExpressionSumOrSub.exec(expressionStringOrder)) != null) {
                savePosition = ExpressionSumOrSub.lastIndex - 3;
                saveExpressionOfParenthesis.push(saveExpression[0]);
                console.log("La expresion que contiene Suma o Resta:  " + saveExpression[0] + "y su posicion es: " + savePosition);
                ExchangeExpressionToTemp(i, array, savePosition, ScorePosition, 3);
                expressionStringOrder = SwapOfStringUser(expressionStringOrder, savePosition, i, ScorePosition, 3);

                i++;
            }


        } while (expressionStringOrder === "");
            
        //ordenar los datos de manera ... de A + B a + A B
        //cambiar la expresion con el swap
        //i++;
    }
    console.log("Entre al metodo de ordenar: -- " + MethodBurbuja(saveExpressionOfParenthesis.toString()));


    console.log("Es el array final es: --- " + array);
    console.log('');
    console.log("Estoy en el metodo de guardar expresion por orden" + saveExpressionOfParenthesis);
    return saveExpression;
}

function GetExpressionOfMultiplication(expressionUser, array) {
    //let ExpressionMultiplication = /[a-zA-Z0-9][*][a-zA-Z0-9]/g; //encontramos alguna expresion de multiplicacion en la expresion dada por el usuario
    let saveExpression = [];
    let saveExpressionOfParenthesis = [];
    let savePosition = 0;
    let ScorePosition = 0;
    let i = 0;
    let expressionStringOrder = SwapOfStringUser(expressionUser, savePosition, null, ScorePosition);
    
    while ((saveExpression = ExpressionMultiplication.exec(expressionStringOrder)) !== null) {
        //
        savePosition = ExpressionMultiplication.lastIndex - 3; //el - 5 es porque el lastIndex me arroja donde termina el indice y donde empieza el proximo recorrido.
        console.log(`Se ha encontrado: ${saveExpression[0]} y termina en el indice ${savePosition}`);
        console.log(saveExpression[0]);
        saveExpressionOfParenthesis.push(saveExpression[0]);

        //console.log("Esta es la funcion split: -- " + expressionUser.split(''));

        ExchangeExpressionToTemp(i, array, savePosition, ScorePosition, 5);

        //Intercambio de array
        expressionStringOrder = SwapOfStringUser(expressionStringOrder, savePosition, i, ScorePosition, 5);
        console.log(`The expression of the user is this:  ${expressionStringOrder}`);

        i++;
        if ((saveExpression = ExpressionDivision.exec(expressionStringOrder)) != null) {
            savePosition = ExpressionDivision.lastIndex - 3;
            saveExpressionOfParenthesis.push(saveExpression[0]);
            console.log("La expresion que contiene Division:  " + saveExpression[0] + "y su posicion es: " + savePosition);
            ExchangeExpressionToTemp(i, array, savePosition, ScorePosition, 3);
            expressionStringOrder = SwapOfStringUser(expressionStringOrder, savePosition, i, ScorePosition, 3);

            i++;
        }
        if ((saveExpression = ExpressionSumOrSub.exec(expressionStringOrder)) != null) {
            savePosition = ExpressionSumOrSub.lastIndex - 3;
            saveExpressionOfParenthesis.push(saveExpression[0]);
            console.log("La expresion que contiene Suma o Resta:  " + saveExpression[0] + "y su posicion es: " + savePosition);
            ExchangeExpressionToTemp(i, array, savePosition, ScorePosition, 3);
            expressionStringOrder = SwapOfStringUser(expressionStringOrder, savePosition, i, ScorePosition, 3);

            i++;
        }
    }
    console.log("Entre al metodo de ordenar: -- " + MethodBurbuja(saveExpressionOfParenthesis.toString()));


    console.log("Es el array final es: --- " + array);
    console.log('');
    console.log("Estoy en el metodo de guardar expresion por orden" + saveExpressionOfParenthesis);
    return saveExpression;

}


function GetExpressionOfDivision(expressionUser) {
    //let ExpressionDivision = /[a-zA-Z0-9][/][a-zA-Z0-9]/g; //verificamos si encontramos coincidencias dentro de la expression aritmetica de una expresion de division 
    let saveExpression;

    while ((saveExpression = ExpressionDivision.exec(expressionUser)) !== null){

    }

}


function GetExpressionSumOrSubtraction(expressionUser) {
    //let ExpressionSum = /[a-zA-Z0-9]([+]|[-])[a-zA-Z0-9]/g; //expression regular donde verifica si en la expression aritmetica encontramos coincidencias de suma o resta
    let saveExpression;

    while((saveExpression = ExpressionSum.exec(expressionUser)) !== null){

    }

}



function DecomposedExpressionByBlocks(expressionUser) {
    
    let copyExpressionUser = expressionUser;
    let arrayExpressionTriplos;


    //if(ValidateExpression(expressionUser) === true) {}
    let expArrayUser = ConvertArray(expressionUser, false, false);
    return GetExpressionOfParenthesis(expressionUser, expArrayUser);
    
    if(ExpressionParenthesis.test(expressionUser) !== false){
        console.log("Entre a la condicion del parentesis");
    }
    else if(ExpressionMultiplication.exec(expressionUser) !== null){
        console.log("Entre a la condicion de la multiplication");
        return GetExpressionOfMultiplication(expressionUser, expArrayUser);
    }
    else if(ExpressionDivision.test(expressionUser) !== false){
        console.log("Entre a la condicion de la division");
        return null;
    }
    else if(ExpressionSumOrSub.test(expressionUser) !== false){
        console.log("Entre a la condicion de la suma y resta");
        return null;
    }

    return null;
}

console.log(DecomposedExpressionByBlocks("((A+B)+C*D+Z-W)+(E+F)+(G-H)+I*J"));

//console.log(SwapOfStringUser("((A+B)+C*D+Z-W)+(E+F)+(G-H)+I*J"));

//Obtener la expresión a realizar
document.getElementById("buttonMethodTriplo").onclick = () => {
    triplos = document.getElementById("inputMethod").value;
    console.log(triplos);
    ConvertArray(triplos);
    
}


document.getElementById("buttonMethodCuadruplo").onclick=()=>{
    cuadruplos = document.getElementById("inputMethod").value;
    console.log(cuadruplos);
    ConvertArray(triplos);

}
