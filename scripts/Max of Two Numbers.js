console.log ("");


function main () { 

  let number1,number2;

  if (number1 > number2) console.log("Number 1 is bigger!")
  else if (number1 < number2) console.log("Number 2 is bigger!")
  else if (number1 == number2) console.log("They are the same!")

  number1 = document.getElementById('first').value;
  number2 = document.getElementById('second').value;
}

function valid() {


  let firstNumber, secondNumber;


  firstNumber = document.getElementById('textfield1').value;
  document.getElementById('validityTest1').innerHTML = alert(testNaN(firstNumber));
  document.getElementById('validityTest1').innerHTML = testNaN(firstNumber);


  secondNumber = document.getElementById('textfield2').value;
  document.getElementById('validityTest2').innerHTML = alert(testNaN(secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN(secondNumber);

  if (stop == true) {
      document.getElementById('answer').innerHTML = "Restart the example, the width and height need to both be numbers."
  } else {
      console.log("The display geometry is", geometry(firstNumber, secondNumber));
      document.getElementById('answer').innerHTML = "" + geometry(firstNumber, secondNumber);
  }

}
