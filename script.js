document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            const value = button.getAttribute('data-value');

            if (value) {
                if (currentInput === '0' && value !== '.') {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                display.textContent = currentInput;
            }

            if (action) {
                switch (action) {
                    case 'clear':
                        currentInput = '';
                        previousInput = '';
                        operator = '';
                        display.textContent = '0';
                        break;
                    case 'backspace':
                        currentInput = currentInput.slice(0, -1) || '0';
                        display.textContent = currentInput;
                        break;
                    case 'percent':
                        currentInput = (parseFloat(currentInput) / 100).toString();
                        display.textContent = currentInput;
                        break;
                    case 'add':
                    case 'subtract':
                    case 'multiply':
                    case 'divide':
                        if (currentInput === '' && previousInput !== '') {
                            operator = action;
                            display.textContent = previousInput + getOperatorSymbol(operator);
                        } else {
                            if (previousInput && operator) {
                                currentInput = calculate(previousInput, currentInput, operator);
                                display.textContent = currentInput;
                            }
                            operator = action;
                            previousInput = currentInput;
                            currentInput = '';
                            display.textContent = previousInput + getOperatorSymbol(operator);
                        }
                        break;
                    case 'equals':
                        if (previousInput && operator) {
                            currentInput = calculate(previousInput, currentInput, operator);
                            display.textContent = currentInput;
                            previousInput = '';
                            operator = '';
                        }
                        break;
                }
            }
        });
    });

    function calculate(a, b, operator) {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        if (isNaN(numA) || isNaN(numB)) return 'Error';
        switch (operator) {
            case 'add':
                return (numA + numB).toString();
            case 'subtract':
                return (numA - numB).toString();
            case 'multiply':
                return (numA * numB).toString();
            case 'divide':
                return numB === 0 ? 'Error' : (numA / numB).toString();
            default:
                return 'Error';
        }
    }

    function getOperatorSymbol(operator) {
        switch (operator) {
            case 'add':
                return ' + ';
            case 'subtract':
                return ' − ';
            case 'multiply':
                return ' × ';
            case 'divide':
                return ' ÷ ';
            default:
                return '';
        }
    }
});