let stop = false;

function testNaN(number) {
    if (isNaN(number)) {
        stop = true;
        return "Type a number!"
    } else {
        return " ~ Input Valid"
    }
}

function geometry(number1, number2) {
    if (number1 == number2) return 'They are equal!';
    return (number1 > number2) ? 'Number 1!' : 'Number 2!';
}

function checkboxes() {
    let checkbox1, checkbox2, checkbox3;
    checkbox1 = document.getElementById('Checkbox1').checked;
    checkbox2 = document.getElementById('Checkbox2').checked;
    checkbox3 = document.getElementById('Checkbox3').checked;
    if (checkbox1 == true) {
        document.getElementById('checkbox1_answer').innerHTML = "No!";
    } else {
        document.getElementById('checkbox1_answer').innerHTML = "Answer?";
    }
    if (checkbox2 == true) {
        document.getElementById('checkbox2_answer').innerHTML = "Yes!";
    } else {
        document.getElementById('checkbox2_answer').innerHTML = "Answer?";
    }
    if (checkbox3 == true) {
        document.getElementById('checkbox3_answer').innerHTML = "No!";
    } else {
        document.getElementById('checkbox3_answer').innerHTML = "Answer?";
    }
}

function main() {


    let firstNumber, secondNumber, text;


    firstNumber = document.getElementById('textfield1').value;
    document.getElementById('validityTest1').innerHTML = alert(testNaN(firstNumber));
    document.getElementById('validityTest1').innerHTML = testNaN(firstNumber);


    secondNumber = document.getElementById('textfield2').value;
    document.getElementById('validityTest2').innerHTML = alert(testNaN(secondNumber));
    document.getElementById('validityTest2').innerHTML = testNaN(secondNumber);

    if (stop == true) {
        document.getElementById('answer').innerHTML = "Restart the example, they need to both be numbers."
    } else {
        console.log("The bigger number is", geometry(firstNumber, secondNumber));
        document.getElementById('answer').innerHTML = "" + geometry(firstNumber, secondNumber);
    }

}