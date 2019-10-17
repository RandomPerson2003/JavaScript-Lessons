console.log("You made it to the console!");

let morning = false;
let afternoon = false;
let response;

function testNaN(number) {
    if (isNaN(number)) {
        stop = true;
        return "Type a real number"
    } else {
        return "Input Validated"
    }
}


function stuff(afternoon, morning,) {

    if (morning == true) {
        response = ('Good Morning!');
        console.log("Good Morning!");
    }
    if (afternoon == true) {
        response = ("Good Afternoon!");
        console.log("Good Afternoon!")
    } 
}

function main() {

    let firstNumber, morning, afternoon;

    firstNumber = document.getElementById('textfield1').value;

    document.getElementById('validityTest1').innerHTML = alert(testNaN(firstNumber));
    document.getElementById('validityTest1').innerHTML = testNaN(firstNumber);

    if (firstNumber <= 1159) {
        morning = true
        stop = false;
    }
    if (firstNumber >= 1200) {
        afternoon = true
        stop = false;
    }
    if (firstNumber >= 2461) {
        stop = true
    }
    if (firstNumber <= 99){
        stop = true

    }



    if (stop == true){
        console.log("Please retry, the input needs to be a time of day.")
        document.getElementById('answer').innerHTML = ("Please input a real time.");
    } else {
        stuff(afternoon, morning)
        document.getElementById('answer').innerHTML = response;
    }

}