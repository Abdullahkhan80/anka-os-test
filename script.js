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
                if (currentInput === '') currentInput = '0';
                updateDisplay(currentInput);
                break;
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
                if (currentInput === '' && previousInput === '') return;
                if (operator && currentInput !== '') {
                    calculate();
                }
                operator = action;
                previousInput = currentInput;
                currentInput = '';
                break;
            case 'equals':
                if (operator && currentInput !== '') {
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
                    updateDisplay('Error');
                    return;
                }
                result = prev / current;
                break;
        }

        currentInput = result.toString();
        previousInput = '';
        updateDisplay(currentInput);
    }

    function updateDisplay(value) {
        display.textContent = value;
    }
});