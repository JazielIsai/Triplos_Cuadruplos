let count = 0;

document.getElementById("btnEjemplo").onclick = PilaTriplos;

function PilaTriplos() {
    count++;

    if (count === 1) {
        document.getElementById("Mult").innerHTML = "*";
        setTimeout(()=>{document.getElementById("Mult-table").innerHTML = "*"},2000);
    }
    else if (count === 2) {
        document.getElementById("LetraA").innerHTML = "A";
        setTimeout(()=>{document.getElementById("A-table").innerHTML = "A"},2000);
    }
    else if (count === 3) {
        document.getElementById("LetraB").innerHTML = "B";
        setTimeout(()=>{document.getElementById("B-table").innerHTML = "B"},2000);
    }
    else if (count === 4) {
        document.getElementById("Sum").innerHTML = "+";
        setTimeout(()=>{document.getElementById("Sum-table").innerHTML = "+"},2000);
    }
    else if (count === 5) {
        document.getElementById("LetraC").innerHTML = "C";
        setTimeout(()=>{document.getElementById("C-table").innerHTML = "C"},2000);
    }
    else if (count === 6) {
        document.getElementById("Temp1").innerHTML = "Temp 1";
        setTimeout(()=>{document.getElementById("Temp1-table").innerHTML = "Temp 1"},2000);
    }
    else if (count === 7) {
        document.getElementById("Igual").innerHTML = "=";
        setTimeout(()=>{document.getElementById("Igual-table").innerHTML = "="},2000);
    }
    else if (count === 8) {
        document.getElementById("Temp2").innerHTML = "Temp2";
        setTimeout(()=>{document.getElementById("Temp2-table").innerHTML = "Temp2"},2000);
    }
    else {
        count=0;
        console.log("Se acabo la simulación");
        alert("Se acabo la simulación");
    }

}