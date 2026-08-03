document.addEventListener('DOMContentLoaded', () => {
    const previousOperandTextElement = document.querySelector('#previous-operand');
    const currentOperandTextElement = document.querySelector('#current-operand');
    const buttons = document.querySelectorAll('button');

    let currentOperand = '';
    let previousOperand = '';
    let operation = undefined;

    function clear() {
        currentOperand = '';
        previousOperand = '';
        operation = undefined;
    }

    function deleteNumber() {
        currentOperand = currentOperand.toString().slice(0, -1);
    }

    function appendNumber(number) {
        if (number === '.' && currentOperand.includes('.')) return;
        currentOperand = currentOperand.toString() + number.toString();
    }

    function chooseOperation(op) {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        operation = op;
        previousOperand = currentOperand;
        currentOperand = '';
    }

    function compute() {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = current === 0 ? 'Error' : prev / current;
                break;
            default:
                return;
        }
        currentOperand = computation;
        operation = undefined;
        previousOperand = '';
    }

    function updateDisplay() {
        currentOperandTextElement.innerText = currentOperand;
        previousOperandTextElement.innerText = operation ? `${previousOperand} ${operation}` : '';
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            const value = button.dataset.value;

            switch (action) {
                case 'number':
                    appendNumber(value);
                    break;
                case 'operation':
                    chooseOperation(value);
                    break;
                case 'equals':
                    compute();
                    break;
                case 'clear':
                    clear();
                    break;
                case 'delete':
                    deleteNumber();
                    break;
                case 'decimal':
                    appendNumber('.');
                    break;
            }
            updateDisplay();
        });
    });

    document.addEventListener('keydown', (event) => {
        if ((event.key >= '0' && event.key <= '9') || event.key === '.') {
            appendNumber(event.key);
        }
        if (event.key === 'Enter' || event.key === '=') {
            compute();
        }
        if (event.key === 'Backspace') {
            deleteNumber();
        }
        if (event.key === 'Escape') {
            clear();
        }
        if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
            chooseOperation(event.key);
        }
        updateDisplay();
    });
});