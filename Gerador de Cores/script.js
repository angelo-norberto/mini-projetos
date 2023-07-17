const btnAction = document.querySelector('.btn-action')
const backgroundColor = document.querySelector('.change-background')
const nameColor = document.querySelector('.name-color')

btnAction.addEventListener('click', event => {
    event.preventDefault()

    const position = Math.floor(Math.random() * 5)
    const color = ['#2dfcba', '#76c3f2', '#94cc50', '#a115b9', '#be763d']
    
    backgroundColor.style.backgroundColor = color[position]
    nameColor.textContent = color[position]
})