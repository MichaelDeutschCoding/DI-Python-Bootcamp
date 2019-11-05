const calculator = {
    displayVal : '0',
    a : null,
    waitingForB : false,
    oper : null,
};

function updateDisplay() {
    // console.log("updateDisplay called");
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayVal;
}


updateDisplay();


const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('clear')) {
        console.log('cleared');
        return;
    }
    inputDigit(target.value);
    updateDisplay();
});

function inputDigit(digit) {
    const {displayVal} = calculator;
    calculator.displayVal = displayVal === '0' ? digit : displayVal + digit;
}

function inputDecimal(dot) {
    if (!calculator.displayVal.includes(dot)) {
        calculator.displayVal += dot;
    }
}

function handleOp (nextOp) {
    const {a, displayVal, oper} = calculator;
    const inputValue = parseFloat(displayVal);

    if (a === null) {
        calculator.a = inputValue;
    }

    calculator.waitingForB = true;
    calculator.oper = nextOp;

}