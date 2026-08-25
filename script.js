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
        if (currentInput === '0' && value === '0') return;
        if (currentInput.includes('.') && value === '.') return;
        currentInput += value;
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
                currentInput = currentInput.slice(0, -1) || '0';
                updateDisplay(currentInput);
                break;
            case 'percent':
                currentInput = (parseFloat(currentInput) / 100).toString();
                updateDisplay(currentInput);
                break;
            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'add':
                setOperator(action);
                break;
            case 'equals':
                calculateResult();
                break;
            case 'sqrt':
                currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                updateDisplay(currentInput);
                break;
            case 'square':
                currentInput = Math.pow(parseFloat(currentInput), 2).toString();
                updateDisplay(currentInput);
                break;
            case 'inverse':
                currentInput = (1 / parseFloat(currentInput)).toString();
                updateDisplay(currentInput);
                break;
            case 'negate':
                currentInput = (-parseFloat(currentInput)).toString();
                updateDisplay(currentInput);
                break;
            case 'decimal':
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                    updateDisplay(currentInput);
                }
                break;
        }
    }

    function setOperator(action) {
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculateResult();
        }
        operator = action;
        previousInput = currentInput;
        currentInput = '';
    }

    function calculateResult() {
        if (operator === null || currentInput === '') return;
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

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