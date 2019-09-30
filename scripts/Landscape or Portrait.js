//console.log("You made it to the console!");

let stop = false;

function testNaN (number) {
    console.log("stop");
    if (isNaN (number)) {
        stop = true;
        return "Type a number!"
      } else {
        return "Input Validated"
    }
}

function main() {

    let firstNumber;
    let secondNumber;
    let text;

    firstNumber = document.getElementById("textfield1").value;

    document.getElementById("validityTest1").innerHTML = test alert (testNaN(firstNumber));
    document.getElementById("validityTest1").innerHTML = test NaN (firstNuber);

    secondNumber = document.getElementById("textfield2").value;
    
    document.getElementById("validityTest2").innerHTML = test alert (testNaN(secondNumber));
    document.getElementById("validityTest2").innerHTML = test NaN (secondNuber);

    if (stop == true) {
        document.getElementById("answer").innerHTML = "Restart the example, a width or height needs to be a number."
    } else {
        console.log("The display geometry is", geometry(firstNumber, secondNumber));
        document,getElementById('answer').innerHTML = "This display is" + geometry (firstNumber, secondNumber);

    }


    if (stop = false) {}
    
}