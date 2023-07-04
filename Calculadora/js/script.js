const previousOutput = document.querySelector('#previous-output')
const currentOutput = document.querySelector('#current-output')
const buttons = document.querySelectorAll('.btn-calculadora')

function calculadora (previousOutput, currentOutput) {
    this.previousOutput = previousOutput
    this.currentOutput = currentOutput
    this.currentOperation = ""

    // adiciona digito na tela da calculadora
    this.addDigit = (digit ) => {
        // checa se a operacao ja possui um ponto
        if(digit === '.' && this.currentOutput.innerText.includes('.')){
            return
        }

        this.currentOperation = digit
        this.uptadeScreen()
    }

    // processa as operacoes da calculadora
    this.processOperation = (operation) => {
        //checa se o valor atual esta vazio 
        if(this.currentOutput.innerText === "" && operation !== "C") {
            //muda operacao
            if(this.previousOutput.innerText !== "") {
                this.changeOperation(operation)
            }
            return
        }

        //pega os valores atuais e antigos 
        let operationValue
        const previous = +this.previousOutput.innerText.split(" ")[0]
        const current = +this.currentOutput.innerText 

        switch(operation) {
            case '+':
                operationValue = previous + current
                this.uptadeScreen(operationValue, operation, current, previous)
                break
            case '-':
                operationValue = previous - current
                this.uptadeScreen(operationValue, operation, current, previous)
                break
            case '*':
                operationValue = previous * current
                this.uptadeScreen(operationValue, operation, current, previous)
                break
            case '/':
                operationValue = previous / current
                this.uptadeScreen(operationValue, operation, current, previous)
                break
            case 'C':
                this.cleanScreen(), this.cleanOperation()
            case '=': 
                this.equalsOperator()
                break
            default:
                return
        }
    }

    // muda os valores ta tela da calculadora
    this.uptadeScreen = (
        operationValue = null, 
        operation = null, 
        current = null, 
        previous = null
        ) => {
        
        console.log(operationValue, operation, current, previous)
    
        if(operationValue === null) {
            this.currentOutput.innerText += this.currentOperation
        } else {
            // checa se o valor é 0
            if(previous === 0) {
                operationValue = current
            }  
            // add current value to previous
            this.previousOutput.innerText = `${operationValue} ${operation}` 
            this.currentOutput.innerText = ""
        }
    }

    // muda a operacao matematica 
    this.changeOperation = (operation) => {
        
        const mathOperations = ["+", "-", "*", "/ "]  
        
        if(!mathOperations.includes(operation)) {
            return
        }

        this.previousOutput.innerText = this.previousOutput.innerText.slice(0, -1) + operation
    } 

    // limpa valores da tela da calculadora
    this.cleanScreen = () => {
        this.currentOutput.innerText = ''
    }

    this.cleanOperation = () => {
        this.currentOperation.innerText = ''
    }

    this.equalsOperator = () => {
        const operation = previousOutput.innerText.split(" ")[1]
        this.processOperation(operation)
    }
}

const calc = new calculadora(previousOutput, currentOutput)

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        const value = e.target.innerText
        
        if(+value >= 0 || value === '.') {
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }
    })
})