//variable declaration

let firstNumber;
let secondNumber;
let operator;

const output = document.querySelector(".output");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector('#two');
const buttonThree = document.querySelector('#three');
const buttonFour = document.querySelector('#four');
const buttonFive = document.querySelector('#five');
const buttonSix = document.querySelector('#six');
const buttonSeven = document.querySelector('#seven');
const buttonEight = document.querySelector('#eight');
const buttonNine = document.querySelector('#nine');
const buttonZero = document.querySelector('#zero');

buttonOne.addEventListener('click', () => {
    output.textContent = output.textContent + "1";

})
buttonTwo.addEventListener('click', () => {
    output.textContent =output.textContent + "2";
})
buttonThree.addEventListener('click', () => {
    output.textContent = output.textContent + "3";
})
buttonFour.addEventListener('click', () => {
    output.textContent = output.textContent + "4";
})
buttonFive.addEventListener('click', () => {
    output.textContent = output.textContent + "5";
})
buttonSix.addEventListener('click', () => {
    output.textContent = output.textContent + "6";
})
buttonSeven.addEventListener('click', () => {
    output.textContent = output.textContent + "7";
})
buttonEight.addEventListener('click', () => {
    output.textContent = output.textContent + "8";
})
buttonNine.addEventListener('click', () => {
    output.textContent = output.textContent + "9";
})
buttonZero.addEventListener('click', () => {
    output.textContent = output.textContent + "0";
})

//function declarations

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
   return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(a,b,operator) {
    switch (operator) {
        case 'add':
            return add(a,b);
            break;
        case 'subtract':
            return subtract(a,b);
            break;
        case 'multiply':
            return multiply(a,b);
            break;
        case 'divide':
            return divide(a,b);
            break;
    }
}