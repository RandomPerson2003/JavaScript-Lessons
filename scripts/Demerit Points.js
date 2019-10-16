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


    if (speedLimit > speed) return 'Speed is less than the speed limit';
    if (1*5 + speedLimit > speed) return 'Speed limit has been exceeded, but by a minimal amount. No demerit points have been recieved.';
    if (2*5 + speedLimit > speed) return '1 demerit point recieved.';
    if (3*5 + speedLimit > speed) return '2 demerit points recieved.';
    if (4*5 + speedLimit > speed) return '3 demerit points recieved.';
    if (5*5 + speedLimit > speed) return '4 demerit points recieved.';
    if (6*5 + speedLimit > speed) return '5 demerit points recieved.';
    if (7*5 + speedLimit > speed) return '6 demerit points recieved.';
    if (8*5 + speedLimit > speed) return '7 demerit points recieved.';
    if (9*5 + speedLimit > speed) return '8 demerit points recieved.';
    if (10*5 + speedLimit > speed) return '9 demerit points recieved.';
    if (11*5 + speedLimit > speed) return '10 demerit points recieved.';
    if (12*5 + speedLimit > speed) return '11 demerit points recieved.';
    if (13*5 + speedLimit > speed) return '12 demerit points recieved.';
    if (14*5 + speedLimit >= speed) return 'You have exceeded the 13 demerit point limit, and your license has been suspended';
    return 'Check for errors!';
}



function main() {

    let firstNumber, secondNumber;

  

    firstNumber = document.getElementById('textfield1').value;

    if (firstNumber == '') {
        firstNumber = 70;
    }

    document.getElementById('validityTest1').innerHTML = alert(testNaN(firstNumber));
    document.getElementById('validityTest1').innerHTML = testNaN(firstNumber);

    secondNumber = document.getElementById('textfield2').value;
    if (secondNumber == '') {
        stop = true;
    }

    document.getElementById('validityTest2').innerHTML = alert(testNaN(secondNumber));
    document.getElementById('validityTest2').innerHTML = testNaN(secondNumber);

    document.getElementById('speedLimit').innerHTML = firstNumber;
    document.getElementById('speed').innerHTML = secondNumber;
    
    if (stop == true) {
        document.getElementById('answer').innerHTML = "Please retry, both inputs need to numbers that are above zero."
    } else {
        console.log("Demerit Calculation is: ", demeritCalculation(firstNumber, secondNumber));
        document.getElementById('answer').innerHTML = "" + demeritCalculation(firstNumber, secondNumber);
    }
}