class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear() {
        this.currentOprand = '';
        this.previousOprand = '';
        this.operation = undefined;

    }
    delete() {
        this.currentOprand = this.currentOprand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOprand.includes('.')) {
            return
        }
        this.currentOprand = this.currentOprand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOprand === '') {
            return
        }
        if (this.previousOprand !== '') {
            return this.compute()
        }
        this.operation = operation
        this.previousOprand = this.currentOprand;
        this.currentOprand = '';

    }

    compute() {
        let computation;
        const current = parseFloat(this.currentOprand);
        const previous = parseFloat(this.previousOprand);
        if (isNaN(current) || isNaN(previous)) {
            return
        }
        switch (this.operation) {
            case '+':
                computation = previous + current;
                break
            case '-':
                computation = previous - current;
                break
            case '*':
                computation = previous * current;
                break
            case '/':
                computation = previous / current;
                break
            default:
                return
        }
        this.currentOprand = computation;
        this.operation = undefined;
        this.previousOprand = '';


    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOprand;
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.previousOprand} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = this.previousOprand;
        }
    }

}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-oprand]')
const currentOperandTextElement = document.querySelector('[data-current-oprand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(btn => btn.addEventListener('click', () => {
    calculator.appendNumber(btn.innerText)
    calculator.updateDisplay();

}))
operationButtons.forEach(btn => btn.addEventListener('click', () => {
    calculator.chooseOperation(btn.innerText)
    calculator.updateDisplay();

}))

equalButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()

})
clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay()

})
deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay();
})