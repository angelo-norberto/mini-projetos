const btnShowToggle = document.querySelector('.btn-show-toggle')
const linksNav = document.querySelector('.links-nav')

const date = document.querySelector('#date')
const ano = new Date().getFullYear()
date.innerHTML = ano

const navContainer = document.querySelector('.nav-container')

function changeNavBar() {
    const scrollHeight = window.pageYOffset
    const navHeight = navContainer.getBoundingClientRect().height

    if(scrollHeight > navHeight) {
        navContainer.classList.add('fixed')
    } else {
        navContainer.classList.remove('fixed')
    }
}

window.addEventListener('scroll', () => {
    changeNavBar()
})

btnShowToggle.addEventListener('click', () => {
    linksNav.classList.toggle('show-links-nav')
})


  