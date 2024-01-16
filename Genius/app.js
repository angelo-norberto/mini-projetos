const playButton = document.querySelector('.play-btn')

const levelGame = document.querySelector('.level')

const greenBtn = document.querySelector('#g')
const redBtn = document.querySelector('#r')
const blueBtn = document.querySelector('#b')
const yellowBtn = document.querySelector('#y')

let colorButtons = [greenBtn, redBtn, blueBtn, yellowBtn]

const originalColors = colorButtons.map(button => getComputedStyle(button).backgroundColor)

const colorOptions = { 
    'g': 'background-color: #5fff5f',
    'b': 'background-color: #4f72ff',
    'y': 'background-color: #f8f872',
    'r': 'background-color: #ff7c7c'
}

let currentLevel = 1

const uptadeLevel = (level) => {
    levelGame.innerHTML = level
}

const sortPositions = () => {
    
    const colors = colorButtons.length
    const sortColors = Math.floor(Math.random() * colors) 
    
    return sortColors 
}

const generateRandomColors = () => {
        
        const idColor = colorButtons[sortPositions()].id;
        
        colorButtons.forEach((button, index) => {
            if (button.id === idColor) {
                button.style.cssText = colorOptions[idColor];
            } else {
                button.style.backgroundColor = originalColors[index]; 
            } 
        });

        console.log(idColor);
}

const actionColors = () => {
    colorButtons.forEach((button, index) => {
        button.addEventListener('click', () => {

            colorButtons.forEach((btn, idx) => {
                btn.style.backgroundColor = originalColors[idx];
            });

            const idColor = button.id;
            button.style.cssText = colorOptions[idColor];
        })
    })
}

const game = () => {
    
}

playButton.addEventListener('click', () => {
    game()
})
