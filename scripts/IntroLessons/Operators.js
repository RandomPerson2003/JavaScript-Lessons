console.log("You made it to the console!");

function simpleOperators(numberA, numberB) {
    let adding = numberA + numberB;
    let subtraction = numberA - numberB;
    let multiplying = numberA * numberB;
    let division = numberA / numberB;
    let modulus = numberA % numberB;

    console.log(numberA, numberB, 'adding', adding);
    console.log(numberA, numberB, 'subtraction', subtraction);
    console.log(numberA, numberB, 'multiplying', multiplying);
    console.log(numberA, numberB, 'division', division);
    console.log(numberA, numberB, 'modulus', modulus);
}
//skip count by 3 for 10 times starting at 9

function skipCounting(interval, times, startingNumber) {
    for (let i = 1; i <= times; i++) {
        startingNumber = startingNumber + interval
        console.log(startingNumber);
    }
}

function howManyTimes(numberStart, numberEnd, skipCount) {
    while (numberStart < numberEnd) {
        console.log(numberStart += skipCount);

    }
}


function LooseEquality(firstOperand, secondOperand) {
    console.log(firstOperand == secondOperand)



}


function customerType(points) {
    return type = points > 88 ? 'Gold' : 'Silver'


}


let number = [-1, 2, 3, 4, 5, 6, 0, 88, '1']

//simpleOperators(number[7], number[0]);
//simpleOperators(number[4], number[3]);

//skipCounting(number[0], number[7], number[6])
//howManyTimes(number[0],number[7],number[1]);
//LooseEquality(number[7], number[8]);
customerType(number[2], number[7])

console.log(customerType(number[3]));