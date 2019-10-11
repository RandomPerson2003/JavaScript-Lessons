console.log("You made it to the console!");


let stop = false;

function testNaN(number) {
    if (isNaN(number)) {
        stop = true;
        return "Type a real number"
    } else {
        return "Input Validated"
    }
}


function demeritCalculation(speedLimit, speed) {

    var i;    

    for (i = 0; i < 15; i++) {
        console.log ("The number is " + i + "<br>");
      }

    if (speed < speedLimit) return 'Speed is less than the speed limit';
    if (speed < speedLimit + 1 * 5) return 'Speed limit has been exceeded, but by a minimal amount. No demerit points have been recieved';
    if (speed < speedLimit + 2 * 5) return '1 demerit point';
    if (speed < speedLimit + 3 * 5) return '2 demerit point';
    if (speed < speedLimit + 4 * 5) return '3 demerit point';
    if (speed < speedLimit + 5 * 5) return '4 demerit point';
    if (speed < speedLimit + 6 * 5) return '5 demerit point';
    if (speed < speedLimit + 7 * 5) return '6 demerit point';
    if (speed < speedLimit + 8 * 5) return '7 demerit point';
    if (speed < speedLimit + 9 * 5) return '8 demerit point';
    if (speed < speedLimit + 10 * 5) return '9 demerit point';
    if (speed < speedLimit + 11 * 5) return '10 demerit point';
    if (speed < speedLimit + 12 * 5) return '11 demerit point';
    if (speed < speedLimit + 13 * 5) return '12 demerit point';
    if (speed < speedLimit + 14 * 5) return '13 demerit point';
    if (speed >= speedLimit + 14 * 5) return 'You have exceeded the 13 demerit point limit, and your license has been suspended';
    return 'Check algorithm for errors';
}


function checkboxes() {
    let checkbox1, checkbox2, checkbox3;
    checkbox1 = document.getElementById('Checkbox1').checked;
    checkbox2 = document.getElementById('Checkbox2').checked;
    checkbox3 = document.getElementById('Checkbox3').checked;
    if (checkbox1 == true) {
        document.getElementById('checkbox1_answer').innerHTML = "Speed?";
    } else {
        document.getElementById('checkbox1_answer').innerHTML = "Answer?";
    }
    if (checkbox2 == true) {
        document.getElementById('checkbox2_answer').innerHTML = "Speed?";
    } else {
        document.getElementById('checkbox2_answer').innerHTML = "Answer?";
    }
    if (checkbox3 == true) {
        document.getElementById('checkbox3_answer').innerHTML = "Speed?";
    } else {
        document.getElementById('checkbox3_answer').innerHTML = "Answer?";
    }
}



function main() {

    let firstNumber, secondNumber;

    firstNumber = document.getElementById('textfield1').value;

    if (firstNumber == '') {
        firstNumber = 70;
    } else if (firstNumber != '') {} else {
        console.log("Speed Limit errors in JavaScript file.");
    }

    document.getElementById('validityTest1').innerHTML = alert(testNaN(firstNumber));
    document.getElementById('validityTest1').innerHTML = testNaN(firstNumber);

    secondNumber = document.getElementById('textfield2').value;
    console.log(secondNumber);
    if (secondNumber == '') {
        stop = true;
        secondNumber = 0;
    } else if (secondNumber != '') {} else {
        console.log("error calculating demerit points in JavaScript file.");
    }

    document.getElementById('validityTest2').innerHTML = alert(testNaN(secondNumber));
    document.getElementById('validityTest2').innerHTML = testNaN(secondNumber);

    document.getElementById('speedLimit').innerHTML = firstNumber;
    document.getElementById('speed').innerHTML = secondNumber;

    if (stop == true) {
        document.getElementById('answer').innerHTML = "Please retry, both inputs need to numbers that are above zero."
    } else {
        console.log("Demerit Calculation is: ", demeritCalculation(firstNumber, secondNumber));
        document.getElementById('answer').innerHTML = "Demerit Calculation is: " + demeritCalculation(firstNumber, secondNumber);
    }
}


for ()