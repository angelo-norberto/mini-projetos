const choices = document.querySelectorAll(".choice")

const moveOptions = {
    'r': 'rock',
    'p': 'paper',
    's': 'scissors'
}

const outcomes = {
    'rock': {
        'rock': 'draw', 
        'paper': 'lose', 
        'scissors': 'win'
    }, 
    'paper': {
        'rock': 'win', 
        'paper': 'draw', 
        'scissors': 'lose'
    }, 
    'scissors': {
        'rock': 'lose', 
        'paper': 'win', 
        'scissors': 'draw'
    } 
}

const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissors = document.getElementById('s')

let imgComp = document.querySelector('.footer img')
let textComp = document.querySelector('.footer p')

let valueMove

const computerMove = () => {
    const moves = [rock, paper, scissors]
    const sortPosition = Math.floor(Math.random() * 3)
    valueMove = moves[sortPosition].id
    imgComp.src = `imgs/${moveOptions[valueMove]}.png`

    textComp.innerHTML = ("Computer move:").toUpperCase()
}

let userPontuation = 0
let compPontuation = 0
let userPoint = document.querySelector('#user-point')
let compPoint = document.querySelector('#comp-point')

const updateUserScore = (points) => {
    userPoint.innerHTML = `${points}`
}
const updateCompScore = (points) => {
    compPoint.innerHTML = `${points}`
}


const userMove =  (choice) => {
    let output = document.querySelector('.output-game') 

    const userChoice = moveOptions[choice.id]
    const result = outcomes[userChoice][moveOptions[valueMove]]
    const biggerTxt = e => e.toUpperCase()

    if(result === 'lose') {
        output.innerHTML = biggerTxt(`you ${result} !`)
        ++compPontuation
        updateCompScore(compPontuation)
    } else if (result === 'win') {
        output.innerHTML = biggerTxt(`you ${result} !`)
        ++userPontuation
        updateUserScore(userPontuation)
    } else {
        output.innerHTML = biggerTxt(`it's a ${result} !`)
    }
    
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        try { 
            computerMove()
            userMove(choice)
        } catch (e) {
            console.log(e)
        }
    })
})