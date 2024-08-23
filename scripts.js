//variable declaration

let firstNumber;
let secondNumber;
let operator;
let displayValue;

//DOM variables

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
const clear = document.querySelector('#clear');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equal = document.querySelector('#equals');
const invert = document.querySelector('#invert');

//Operator buttons

addBtn.addEventListener('click', () => {
    firstNumber = +(output.textContent)
    output.textContent = "";
    operator = "add";
})
subtractBtn.addEventListener('click', () => {
    firstNumber = +(output.textContent)
    output.textContent = "";
    operator = "subtract";
})
multiplyBtn.addEventListener('click', () => {
    firstNumber = +(output.textContent)
    output.textContent = "";
    operator = "multiply";
})
divideBtn.addEventListener('click', () => {
    firstNumber = +(output.textContent)
    output.textContent = "";
    operator = "divide";
})

//Special function buttons

invert.addEventListener('click', () => {
    output.textContent = output.textContent * -1;
} )

clear.addEventListener('click', () => {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    output.textContent = "";
})
equals.addEventListener('click', () => {
    secondNumber = +(output.textContent);
    output.textContent = operate(firstNumber, secondNumber, operator);
    firstNumber = 0;
    secondNumber = 0;
    operator = undefined;
})

//Number buttons

buttonOne.addEventListener('click', () => {
    output.textContent = output.textContent + "1";
    displayValue = +(output.textContent);
})
buttonTwo.addEventListener('click', () => {
    output.textContent = output.textContent + "2";
    displayValue = +(output.textContent);
})
buttonThree.addEventListener('click', () => {
    output.textContent = output.textContent + "3";
    displayValue = +(output.textContent);
})
buttonFour.addEventListener('click', () => {
    output.textContent = output.textContent + "4";
    displayValue = +(output.textContent);
})
buttonFive.addEventListener('click', () => {
    output.textContent = output.textContent + "5";
    displayValue = +(output.textContent);
})
buttonSix.addEventListener('click', () => {
    output.textContent = output.textContent + "6";
    displayValue = +(output.textContent);
})
buttonSeven.addEventListener('click', () => {
    output.textContent = output.textContent + "7";
    displayValue = +(output.textContent);
})
buttonEight.addEventListener('click', () => {
    output.textContent = output.textContent + "8";
    displayValue = +(output.textContent);
})
buttonNine.addEventListener('click', () => {
    output.textContent = output.textContent + "9";
    displayValue = +(output.textContent);
})
buttonZero.addEventListener('click', () => {
    output.textContent = output.textContent + "0";
    displayValue = +(output.textContent);
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
    if (b === 0) {
        return ";)"
    } else {
    return a / b;
    }
}

function operate(a,b,operator) {
    if (a !== a || b !== b) {
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