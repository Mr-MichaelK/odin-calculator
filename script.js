const output = document.querySelector(".output");

const MAX_NUM     = "999999999999999";
const MIN_NUM     = "-99999999999999";
let operand1      = 0;
let operand2      = 0;
let activeOperand = "";
let operator      = "";

display(0);

const body = document.querySelector(".body");
body.addEventListener("click", function(event) {
    if (output.textContent.includes("ERROR")) 
        clear();
    
    let button;
    if (event.target.tagName === "BUTTON") {
        button = event.target.className;
    }
    switch (button) {
        // numerical values
        case "zero0":
        case "one1":
        case "two2":
        case "three3":
        case "four4":
        case "five5":
        case "six6":
        case "seven7":
        case "eight8":
        case "nine9":
            if (activeOperand.length < MAX_NUM.length) {
                activeOperand += button.slice(-1);
                display(activeOperand);
            }
            break;

        // arithmetic operations
        case "x":
        case "divide":
        case "plus":
        case "subtract":
        case "modulo":
        case "power":
            handleOperator(button);
            break;

        case "equal":
            operand2 = +activeOperand;
            let result = calculate(operand1, operand2, operator);
            display(result);
            operand1 = result;
            activeOperand = "";
            operator = "";
            break;

        case "C":
            clear();
            break;
        case "del":
            activeOperand = activeOperand.slice(0, -1);
            display(activeOperand);
            break;

        case "dec-point":
            if (! activeOperand.includes('.') && activeOperand.length < MAX_NUM.length) {
                activeOperand += ".";
                display(activeOperand);
            }
            break;

        default:
            break;
    }
});

function handleOperator(op) {
    if (activeOperand !== "") {
        if (operator !== "") {
            operand2 = +activeOperand;
            operand1 = calculate(operand1, operand2, operator);
            display(operand1);
        } 
        else {
            operand1 = +activeOperand;
        }
    }
    activeOperand = "";
    if (op === "plus")
        operator = "+";
    else if (op === "x") 
        operator = "*";
    else if (op === "divide") 
        operator = "/";
    else if (op === "modulo") 
        operator = "%";
    else if (op === "power") 
        operator = "^";
    else
        operator = "-";
}

function calculate(op1, op2, oper) {
    let ans;
    switch (oper) {
        case "+":
            ans = add(op1, op2);
            break;
        case "-":
            ans = subtract(op1, op2);
            break;
        case "*":
            ans = multiply(op1, op2);
            break;
        case "/":
            ans = divide(op1, op2);
            break;
        case "%":
            ans = modulus(op1, op2);
            break;
        case "^":
            ans = power(op1, op2);
            break;
        default:
            ans = op2;
            break;
    }
    return ans;
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

function modulus(op1, op2) {
    return (op2 == 0) ? "MATH ERROR" : op1 % op2;
}

function power(op1, op2) {
    return op1 ** op2;
}

function display(operand) {
    let strOperand = operand.toString();
    if (operand === "MATH ERROR" || strOperand.length <= MAX_NUM.length && strOperand.length <= MIN_NUM.length) {
        output.textContent = operand;
        return operand;
    }

    // if decimal part is too huge, remove digits from the right side
    if (Math.trunc(operand) !== operand) {
        while (strOperand.length > MAX_NUM.length) {
            strOperand = strOperand.slice(0, -1);
        }
        
        output.textContent = parseFloat(strOperand);
        return parseFloat(strOperand);
    }

    // number is too big to be displayed
    output.textContent = "ERROR: Overflow";
}

function clear() {
    operand1      = 0;
    operand2      = 0;
    activeOperand = "";
    operator      = "";
    display(0);
}