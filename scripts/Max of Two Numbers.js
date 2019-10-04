let stop = false
let square = false

function testNaN(number1, number2) {
  //console.log(stop);
  if (isNaN(number1, number2)) {
    stop = true;
    return "Type a real number"
  } else {
    return "Input Validated"
  }
}

function main() {

  let number1, number2;
  let final;

  if (number1 > number2) {
    final = number1;
  } else if (number1 < number2) {
    final = number2;
  } else if (number1 == number2) {
    square = true;
  }

  number1 = document.getElementById('first').value;
  number2 = document.getElementById('second').value;


  firstNumber = document.getElementById('textfield1');
  document.getElementById('validityTest1').innerHTML = alert(testNaN(number1));
  document.getElementById('validityTest1').innerHTML = testNaN(number1);


  secondNumber = document.getElementById('textfield2');
  document.getElementById('validityTest2').innerHTML = alert(testNaN(number2));
  document.getElementById('validityTest2').innerHTML = testNaN(number2);

}

if (square == true) {
  console.log("They are the same!")
}
if (stop == true) {
  console.log("Restart, they both need ot be numbers.")
} else {
  console.log("The bigger number is: " + final + "!")
}