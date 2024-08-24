//Global variables

let firstNumber;
let secondNumber;
let operator;
let displayValue;
//DOM variables

const numberBtns = document.querySelectorAll(".numbers > .numbtns");
const output = document.querySelector(".output");
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equal = document.querySelector('#equals');
const invert = document.querySelector('#invert');
const decimal = document.querySelector('#decimal');
const clear = document.querySelector('#clear');

//Operator buttons

addBtn.addEventListener('click', () => {
    handleOperator()
    operator = "add";
    handleOperator();
})
subtractBtn.addEventListener('click', () => {
    handleOperator()
    operator = 'subtract';
    handleOperator();
})
multiplyBtn.addEventListener('click', () => {
    handleOperator()
    operator = 'multiply';
    handleOperator();
})
divideBtn.addEventListener('click', () => {
    handleOperator()
    operator = 'divide';
    handleOperator();
})
//Number buttons

numberBtns.forEach((btn) => {
    btn.addEventListener('click', handleNumber);
})

//Special function buttons

equal.addEventListener('click', () => {
    secondNumber = +(output.textContent);
    doTheMath();
})
invert.addEventListener('click', () => {
    output.textContent = output.textContent * -1;
})
clear.addEventListener('click', () => {
    cleanSlate()
    output.textContent = "";
})

//function declarations

function doTheMath() {
    output.textContent = operate(firstNumber,secondNumber,operator);
    firstNumber = +(output.textContent);
    secondNumber = undefined;
    displayValue = true;
}

function handleOperator() {
    if (displayValue === true) {
        return;
    }
    if (firstNumber === undefined) {
            firstNumber = +(output.textContent);
            output.textContent = "";
    } else {
        secondNumber = +(output.textContent);
        if(secondNumber === 0 && (operator === "multiply" || operator === "divide")) {
            secondNumber = 1;
        }       
        doTheMath();
    }
}

function handleNumber() {
    if (displayValue === true) {
        output.textContent = "";
        displayValue = false;
    }
    output.textContent += +(this.textContent);
}

function cleanSlate() {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    displayValue = undefined;
}

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
    if (b === 0) {
        return ";)"
    } else {
    return a / b;
    }
}
function operate(a,b,operator) {
    if (a !== a || b !== b) { //check if a or b is NaN
        return "Error";
    } else {
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
}