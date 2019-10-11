console.log("You made it to the console!");

function testNaN(number) {
    if (isNaN(number)) {
        stop = true;
        return "Type a real number"
    } else {
        return "Input Validated"
    }
}

function orderingFive(first, second, third, fourth, fifth) {

    let memory1;

    while (first > second || second > third || third > fourth || fourth > fifth) {
        if (first > second) {
            memory1 = second;
            second = first;
            first = memory1;
        }
        if (second > third) {
            memory1 = third;
            third = second;
            second = memory1;
        }
        if (third > fourth) {
            memory1 = fourth;
            fourth = third;
            third = memory1;
        }
        if (fourth > fifth) {
            memory1 = fifth;
            fifth = fourth;
            fourth = memory1;
        }
    }
    if (first <= second) {
        if (second <= third) {
            if (third <= fourth) {
                if (fourth <= fifth) {
                    return first + ", " + second + ", " + third + ", " + fourth + ", " + fifth;
                }
            }
        }
    } else {
        return "Check program for errors"
    }
}


function checkbox() {
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


    let firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber;


    firstNumber = document.getElementById('textfield1').value;

    document.getElementById('validityTest1').innerHTML = alert(testNaN(firstNumber));
    document.getElementById('validityTest1').innerHTML = testNaN(firstNumber);


    secondNumber = document.getElementById('textfield2').value;

    document.getElementById('validityTest2').innerHTML = alert(testNaN(secondNumber));
    document.getElementById('validityTest2').innerHTML = testNaN(secondNumber);

    thirdNumber = document.getElementById('textfield3').value;

    document.getElementById('validityTest3').innerHTML = alert(testNaN(thirdNumber));
    document.getElementById('validityTest3').innerHTML = testNaN(thirdNumber);

    fourthNumber = document.getElementById('textfield4').value;

    document.getElementById('validityTest4').innerHTML = alert(testNaN(fourthNumber));
    document.getElementById('validityTest4').innerHTML = testNaN(fourthNumber);

    fifthNumber = document.getElementById('textfield5').value;

    document.getElementById('validityTest5').innerHTML = alert(testNaN(fifthNumber));
    document.getElementById('validityTest5').innerHTML = testNaN(fifthNumber);


    if (stop == true) {
        document.getElementById('answer').innerHTML = "Restart the example, both inputs need to be numbers."
    } else {
        console.log("The numbers arranged from smallest to largest is: ", orderingFive(firstNumber, secondNumber, fourthNumber, fifthNumber));
        document.getElementById('answer').innerHTML = "The numbers " + firstNumber + ", " + secondNumber + ", " + thirdNumber + ", " + fourthNumber + ", " + fifthNumber + " in order from smallest to largets is: \n" +
            orderingFive(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);
    }
}

//function main(first, second, third){

//let one, two, three;

//while(first > second || second > third)
//if (first > second){
//if(first > third){
//three = first
//}else (two = first)
//}else (one = first)

//if (second > third){
//two = third
//}else (two = second)

//if (third > first){
//if(third > second){
//three = third
//}else (three = )