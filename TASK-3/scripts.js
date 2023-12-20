let currentInput = '';
let operator = '';
let result = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    result = '';
    updateDisplay();
}

function toggleSign() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function percentage() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (currentInput !== '') {
        if (operator !== '') {
            calculate();
        }
        operator = op;
        result = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function calculate() {
    if (operator !== '' && currentInput !== '') {
        switch (operator) {
            case '+':
                result = (parseFloat(result) + parseFloat(currentInput)).toString();
                break;
            case '-':
                result = (parseFloat(result) - parseFloat(currentInput)).toString();
                break;
            case '*':
                result = (parseFloat(result) * parseFloat(currentInput)).toString();
                break;
            case '/':
                result = (parseFloat(result) / parseFloat(currentInput)).toString();
                break;
            default:
                break;
        }
        currentInput = '';
        operator = '';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput !== '' ? currentInput : result;
}
