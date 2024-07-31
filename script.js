const powButton  = document.querySelector(".pow");
const modButton  = document.querySelector(".mod");
const sqrtButton = document.querySelector(".sqrt");
const factButton = document.querySelector(".fact");

const zeroButton  = document.querySelector(".zero");
const oneButton   = document.querySelector(".one");
const twoButton   = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const fourButton  = document.querySelector(".four");
const fiveButton  = document.querySelector(".five");
const sixButton   = document.querySelector(".six");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton  = document.querySelector(".nine");

const multiplyButton = document.querySelector(".x");
const addButton      = document.querySelector(".plus");
const subtractButton = document.querySelector(".subtract");
const divideButton   = document.querySelector(".divide");
const equalButton    = document.querySelector(".equal");

const openButton      = document.querySelector(".open");
const closeButton     = document.querySelector(".close");
const decimalPtButton = document.querySelector(".dec-point");

const deleteButton = document.querySelector(".del");
const clearButton  = document.querySelector(".C");

const output = document.querySelector(".output");

const MAX_NUM = "999999999999999";
const MIN_NUM = "-99999999999999";
let operand1  = 42069;
let operand2  = 0;
let operator  = "+";

calculate(operand1, operand2, operator);

function calculate(op1, op2, oper) {
    let ans;
    if (oper === "+")      ans = add(op1, op2);
    else if (oper === "-") ans = subtract(op1, op2);
    else if (oper === "x") ans = multiply(op1, op2);
    else if (oper === "/") ans = divide(op1, op2);
    display(ans);
}

function add(op1, op2) {
    return op1 + op2;
}

function subtract(op1, op2) {
    return op1 - op2;
}

function multiply(op1, op2) {
    return op1 * op2;
}

function divide(op1, op2) {
    return (op2 == 0) ? "MATH ERROR" : op1 / op2;
}

function display(operand) {
    let strOperand = operand.toString();
    if (operand === "MATH ERROR" || strOperand.length <= MAX_NUM.length && strOperand.length <= MIN_NUM.length) {
        output.textContent = operand;
        return;
    }

    // if decimal part is too huge, remove digits from the right side
    if (Math.trunc(operand) !== operand) {
        while (strOperand.length > MAX_NUM.length) {
            strOperand = strOperand.slice(0, -1);
        }
        
        output.textContent = parseFloat(strOperand);
        return;
    }

    // number is too big to be displayed
    output.textContent = "ERROR: Overflow";
}