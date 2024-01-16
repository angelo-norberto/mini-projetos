const cellElements = document.querySelectorAll('[data-cell]')
const boardElement = document.querySelector('[data-board]')
const winningText = document.querySelector('[data-winning-text]')

let isCircleTurn

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const startGame = () => {
    for (const cell of cellElements) {
        cell.addEventListener('click', handleClick, {once: true})
    }

    isCircleTurn = false
    boardElement.classList.add('X')
}

const endGame = (draw) => {

}

const checkForWin = (currentPlayer) => {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentPlayer)
        })
    })
}

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd)
}

const swapTurns = () => {
    isCircleTurn = !isCircleTurn

    boardElement.classList.remove('X')
    boardElement.classList.remove('circle')

    if(isCircleTurn) {
        boardElement.classList.add('circle')
    } else {
        boardElement.classList.add('X')
    }
} 

const handleClick = (e) => {
    // colocar X ou O
    const cell = e.target  
    const classToAdd = isCircleTurn ? 'circle' : 'X'
    
    placeMark(cell, classToAdd)
    
    // checa vitoria 
    const isWin = checkForWin(classToAdd)
    if(isWin) {
        console.log('winner')
    }
    
    //checa empate
    
    // muda simbolo
    swapTurns()
}

startGame()





