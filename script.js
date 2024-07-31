const output = document.querySelector(".output");

const MAX_NUM     = "999999999999999";
const MIN_NUM     = "-99999999999999";
let operand1      = "";
let operand2      = "";
let activeOperand = operand1;
let operator      = "+";

display(0);

const body = document.querySelector(".body");
body.addEventListener("click", function(event) {
    let button;
    if (event.target.tagName === "BUTTON") {
        button = event.target.className;
    }
    switch (button) {
        case "zero":
            activeOperand += "0";
            break;
        case "one":
            activeOperand += "1";
            break;
        case "two":
            activeOperand += "2";
            break;
        case "three":
            activeOperand += "3";
            break;
        case "four":
            activeOperand += "4";
            break;
        case "five":
            activeOperand += "5";
            break;
        case "six":
            activeOperand += "6";
            break;
        case "seven":
            activeOperand += "7";
            break;
        case "eight":
            activeOperand += "8";
            break;
        case "nine":
            activeOperand += "9";
            break;
        default:
            break;
    }
});

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