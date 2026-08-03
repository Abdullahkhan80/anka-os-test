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
        });
    });

    function handleNumber(value) {
        if (currentInput.includes('.') && value === '.') return;
        if (currentInput === '0' && value === '0') return;
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }
        updateDisplay(currentInput);
    }

    function handleAction(action) {
        switch (action) {
            case 'clear':
                currentInput = '';
                previousInput = '';
                operator = null;
                updateDisplay('0');
                break;
            case 'backspace':
                currentInput = currentInput.slice(0, -1);
                updateDisplay(currentInput || '0');
                break;
            case 'percent':
                currentInput = (parseFloat(currentInput) / 100).toString();
                updateDisplay(currentInput);
                break;
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
                if (currentInput === '' && previousInput !== '') {
                    operator = action;
                    return;
                }
                if (previousInput && operator) {
                    calculate();
                }
                operator = action;
                previousInput = currentInput;
                currentInput = '';
                break;
            case 'equals':
                if (previousInput && currentInput && operator) {
                    calculate();
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
                    updateDisplay('Error');
                    resetCalculator();
                    return;
                }
                result = prev / current;
                break;
        }

        currentInput = result.toString();
        operator = null;
        previousInput = '';
        updateDisplay(currentInput);
    }

    function updateDisplay(value) {
        display.textContent = value;
    }

    function resetCalculator() {
        currentInput = '';
        previousInput = '';
        operator = null;
    }
});