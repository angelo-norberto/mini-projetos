const btnMinus = document.querySelector('#minus')
const btnPlus = document.querySelector('#plus')
const output = document.querySelector('#value')
const btnReset = document.querySelector('#reset')

const updateValue = () => {
    value.textContent = count
}

let count = 0
let intervalID = 0


btnPlus.addEventListener('mousedown', () => {
    intervalID = setInterval(() => {
       count += 1 
       updateValue()
    }, 100)
})

btnMinus.addEventListener('mousedown', () => {
    intervalID = setInterval(() => {
       count -= 1 
       updateValue()
    }, 100)
})

btnReset.addEventListener('click', () => {
    count = 0
    updateValue()
})


document.addEventListener('mouseup', () => clearInterval(intervalID))
