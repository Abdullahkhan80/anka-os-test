document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = null;
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            if (value === 'C') {
                currentInput = '';
                operator = null;
                firstOperand = null;
                updateDisplay('');
            } else if (value === '=') {
                if (operator && firstOperand !== null) {
                    currentInput = calculate(firstOperand, currentInput, operator);
                    operator = null;
                    firstOperand = null;
                    updateDisplay(currentInput);
                }
            } else if (this.classList.contains('operator')) {
                if (currentInput !== '') {
                    if (firstOperand === null) {
                        firstOperand = currentInput;
                        operator = value;
                        currentInput = '';
                    } else if (operator) {
                        firstOperand = calculate(firstOperand, currentInput, operator);
                        operator = value;
                        currentInput = '';
                        updateDisplay(firstOperand);
                    }
                }
            } else {
                currentInput += value;
                updateDisplay(currentInput);
            }
        });
    });

    function updateDisplay(value) {
        display.textContent = value;
    }

    function calculate(first, second, operator) {
        const a = parseFloat(first);
        const b = parseFloat(second);
        if (isNaN(a) || isNaN(b)) {
            return 'Error';
        }
        switch (operator) {
            case '+': return (a + b).toString();
            case '-': return (a - b).toString();
            case '*': return (a * b).toString();
            case '/': return b !== 0 ? (a / b).toString() : 'Error';
            default: return 'Error';
        }
    }
});