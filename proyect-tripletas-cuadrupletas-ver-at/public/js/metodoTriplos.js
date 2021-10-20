let operador;
let operando1;
let operando2;
let temporal1;
let temporal2;
let RegExpGlobal = new RegExp();



let triplos, cuadruplos;
//Obtener la expresión a realizar
document.getElementById("buttonMethodTriplo").onclick = () => {
    triplos = document.getElementById("inputMethod").value;
    console.log(triplos);
    ConvertArray(triplos);
    Burbuja();
}


document.getElementById("buttonMethodCuadruplo").onclick=()=>{
    cuadruplos = document.getElementById("inputMethod").value;
    console.log(cuadruplos);
}


function ConvertArray(expresion) {
    let score=0;
    let expressionArray = [];
    /*if(triplos !== 0) {array = triplos;}
    else{array=cuadruplos;} */
    for(let character of expresion){
        if(character === " "){
            continue;
        }
        else{
            console.log(character);
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

function ValidateExpression(expression) {
        if(RegExpGlobal.test(expression) === true)
        {
            
            return true;
        }
        else{
            console.log("Verifica la expresión:" + expression);
            alert("Verifica tu expresión: " +expression);
            return false;
        }
}


function OrderTheExpression(expression) {
    let arrayExpression = ConvertArray(expression);
    let saveExpressionOrder;
    let score = 0;

    arrayExpression.forEach(character => {

        if (character === "(") {
            if (character === "(") {
                score++;
                saveExpression[score] = character;
                if (score === 3) {
                    //sustituir la expresion guardada por una variable temporal 
                }
            }
        } 

    });

}

//tengo tal posicion, indexof nos sirve para saber en que posicion esta, compara estrictamente su posicion ===
//indexof devulve el primero en encontrar
//lastIndexOf devuelve el ultimo indice en el que un cierto elemento puede encontrarse en el arreglo

function MethodSetExpresision(expression) {
    let arrayExpression = ConvertArray(expression);
    let saveExpressionOrder;
    let score = 0;

    let parentesisLeft = arrayExpression.lastIndexOf("(");
    let parentesisRightLIO = arrayExpression.lastIndexOf(")");
/*
    saveExpressionOrder = arrayExpression.filter((save, parentesisLeft + 1) => save );
    console.log(saveExpressionOrder);
  */  
    saveExpressionOrder=arrayExpression.splice(parentesisLeft + 1, 3, "temp");
    //filter es una function que actua como forEach solo que esta nos permite agregar una condiction para su ejecucion la cual es opcional.

    let parentesisRight = arrayExpression.indexOf("(");

    const ExpRegArimetich = /[a-zA-Z0-9]([+]|[-]|[\/]|[*])[a-zA-Z0-9]/g;
    let miArray; 
    while((miArray = ExpRegArimetich.exec('((A+B)+C*D)+(E+F)')) !== null){
        let msg = 'Se ha encontrado ' + miArray[0] + '. ';
        msg += 'La siguiente coincidencia empieza en el indice ' + ExpRegArimetich.lastIndex;
        console.log(msg);
    }
    console.log(miArray);

    return `${parentesisLeft} ${parentesisRightLIO} ${parentesisRight} ${arrayExpression} ${saveExpressionOrder}  `;
}

//rESOLVER POR EXPRESIONES REGULARES, DANDO PRIORIDAD A LAS LEYES DE SIGNOS


console.log(MethodSetExpresision("(( A + B ) + C * D ) + ( E + F)"));


//ocupar un método de ordenamiento y que con la expresión regular valide cuando estos se hayn posicionado en su lugar
/*
function Swap(index1, index2) {
    let temp = 0;
    temp = expresion[index1];
    expresion[index1] = expresion[index2];
    expresion[index2] = temp; 
}



function Burbuja(exp) {
    
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            
            Swap(i,j);
            //Vamos a usar esta funcón para comprobar que la espresión ya este escrita en forma infija.
            if(ValidateExpression("x expresion") == true){
                 //igualar el resultado
                break;
            }
        }
    }
    console.log();
}


function CreateTable(params) {
    
}
*/
//Esta expresión regular lee la notación infija -- /(([+]|[-]|[*]|[/])[a-zA-Z0-9][a-zA-Z0-9])/g

/*
#ESTA EXPRESIÓN LEE LOS PARÉNTESIS Y UNA OPERACIÓN "(A+B)".

 #([(])[a-zA-Z0-9]([+]|[-]|[\/]|[])[a-zA-Z0-9]([)])* 

#ESTA EXPRESIÓN SOLO LEE UNA OPERACIÓN ARITMÉTICA CON LETRAS Y NÚMEROS "A+B". 

#[a-zA-Z0-9]([+]|[-]|[\/]|[*])[a-zA-Z0-9]
*/
/*
//Comprobar si hay parentesis, el primero que abre hasta el ultimo que cierra, y traer todo lo que contenga:
function LeerParentesisOperación(params) {

}

*/
  
//Evaluar y ordenar la expresión a evaluar ... quizas el orden sea segun las reglas de los operadores


//agruparlas por filas, siguiendo el orden <operador> -- <operando1> -- <operando2> siguiendo regleas de los opoeradores



//Hacer las operaciones correspondientes y guardarlos en los temporales 



//hacer un ciclo hasta terminar de iterar los valores obtenidos en forma de tabla, respetando el orden de triplos

