//console.log("You made it to the console!");

let stop = false;

function testNaN(number) {
    console.log("stop");
    if (isNaN(number)) {
        stop = true;
        return "Type a number!"
    } else {
        return "Input Validated"
    }
}

function geometry(width, height) {
    if (width == height) return 'Square';
    return (width > height) ? 'Landscape' : 'Portrait';
}

function checkboxes() {
    let checkbox1, checkbox2, checkbox3;
    checkbox1 = document.getElementById('Checkbox1').checked;
    checkbox2 = document.getElementById('Checkbox2').checked;
    checkbox3 = document.getElementById('Checkbox3').checked;
    if (checkbox1 == true) {
        document.getElementById('checkbox1_answer').innerHTML = "Landscape";
    } else {
        document.getElementById('checkbox1_answer').innerHTML = "Answer?";
    }
    if (checkbox2 == true) {
        document.getElementById('checkbox2_answer').innerHTML = "Portrait";
    } else {
        document.getElementById('checkbox2_answer').innerHTML = "Answer?";
    }
    if (checkbox3 == true) {
        document.getElementById('checkbox3_answer').innerHTML = "Square";
    } else {
        document.getElementById('checkbox3_answer').innerHTML = "Answer?";
    }
}

function main() {

    let firstNumber, secondNuber, text

    firstNumber = document.getElementById("textfield1").value;

    document.getElementById("validityTest1").innerHTML = test alert(testNaN(firstNumber));
    document.getElementById("validityTest1").innerHTML = test NaN(firstNuber);

    secondNumber = document.getElementById("textfield2").value;

    document.getElementById("validityTest2").innerHTML = test alert(testNaN(secondNumber));
    document.getElementById("validityTest2").innerHTML = test NaN(secondNuber);

    if (stop == true) {
        document.getElementById("answer").innerHTML = "Restart the example, the width and height need to be a numbers."
    } else {
        console.log("The display geometry is", geometry(firstNumber, secondNumber));
        document, getElementById('answer').innerHTML = "This display is" + geometry(firstNumber, secondNumber);

}


    if (stop == true) {
        document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number."
    } else {
        console.log("The display geometry is", geometry(firstNumber, secondNumber));
        document.getElementById('answer').innerHTML = "This display is " + geometry(firstNumber, secondNumber);
    }

}