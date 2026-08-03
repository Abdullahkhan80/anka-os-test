document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            const value = button.dataset.value;

            if (value) {
                handleNumber(value);
            } else if (action) {
                handleAction(action);
            }

            updateDisplay();
        });
    });

    function handleNumber(value) {
        if (currentInput.includes('.') && value === '.') return;
        if (currentInput === '0' && value === '0') return;
        currentInput = currentInput === '0' ? value : currentInput + value;
    }

    function handleAction(action) {
        switch (action) {
            case 'clear':
                currentInput = '';
                previousInput = '';
                operator = null;
                break;
            case 'backspace':
                currentInput = currentInput.slice(0, -1) || '0';
                break;
            case 'percent':
                currentInput = (parseFloat(currentInput) / 100).toString();
                break;
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
                if (currentInput === '') return;
                if (previousInput !== '') {
                    calculate();
                }
                operator = action;
                previousInput = currentInput;
                currentInput = '';
                break;
            case 'equals':
                if (operator && previousInput !== '') {
                    calculate();
                    operator = null;
                }
                break;
        }
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case 'add':
                result = prev + current;
                break;
            case 'subtract':
                result = prev - current;
                break;
            case 'multiply':
                result = prev * current;
                break;
            case 'divide':
                if (current === 0) {
                    result = 'Error';
                } else {
                    result = prev / current;
                }
                break;
            default:
                return;
        }

        currentInput = result.toString();
        previousInput = '';
    }

    function updateDisplay() {
        display.textContent = currentInput || '0';
    }
});