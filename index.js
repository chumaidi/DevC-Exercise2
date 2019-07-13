"use strict"

let choose = parseInt(prompt("Choose calculator you want = 1. Addition 2. Substraction 3. Multiplication 4. Division"));
let digitA = parseInt(prompt("Input first number"));
let digitB = parseInt(prompt("input second number"));
switch (choose) {
    case 1:
        console.log(typeof digitA);
        console.log(typeof digitB);
        const resultAddition = parseInt(digitA) + parseInt(digitB);
        console.log("Addition between " + digitA + "+" + digitB + "= " + resultAddition);
        break;
    case 2:
        const resultSubstraction = digitA - digitB;
        console.log("Substraction between " + digitA + "+" + digitB + "= " + resultSubstraction);
        break;
    case 3:
        const resultMultiplication = digitA * digitB;
        console.log("Multiplication between " + digitA + "+" + digitB + "= " + resultMultiplication)
        break;
    case 4:
        const resultDivison = digitA / digitB;
        console.log("Division between " + digitA + "+" + digitB + "= " + resultDivison);
        break;
    default:
        console.log("There is no option for that");
        break;
}
