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


function demeritCalculation (speedLimit, speed) {

  if (speed < speedLimit) return 'Speed is lower than the speed limit';
  if (speed < speedLimit + 1*5) return 'Speed is over speed limit but, but my a minimal amount. No demerit points recived.';
  if (speed < speedLimit + 2*5) return '1 demerit point recieved';
  if (speed < speedLimit + 3*5) return '2 demerit points recieved';
  if (speed < speedLimit + 4*5) return '3 demerit points recieved';
  if (speed < speedLimit + 5*5) return '4 demerit points recieved';
  if (speed < speedLimit + 6*5) return '5 demerit points recieved';
  if (speed < speedLimit + 7*5) return '6 demerit points recieved';
  if (speed < speedLimit + 8*5) return '7 demerit points recieved';
  if (speed < speedLimit + 9*5) return '8 demerit points recieved';
  if (speed < speedLimit + 10*5) return '9 demerit points recieved';
  if (speed < speedLimit + 11*5) return '10 demerit points recieved';
  if (speed < speedLimit + 12*5) return '11 demerit points recieved';
  if (speed < speedLimit + 13*5) return '12 demerit points recieved';
  if (speed < speedLimit + 14*5) return '13 demerit points recieved';
  if (speed >= speedLimit + 14*5) return 'You have exceeded the speed limit, and your license is suspended';
  return 'Check the Algorithm for errors';
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

    
    if (stop == true) {
        document.getElementById('answer').innerHTML = "Please retry, both inputs need to numbers that are above zero."
    } else {
        console.log("Demerit Calculation is: ", demeritCalculation(firstNumber, secondNumber));
        document.getElementById('answer').innerHTML = "" + demeritCalculation(firstNumber, secondNumber);
    }
}