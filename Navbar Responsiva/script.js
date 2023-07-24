window.addEventListener('DOMContentLoaded', () => {
        const btnShowToggle = document.querySelector('.btn-show-toggle')
        const linksNav = document.querySelector('.links-nav')

        btnShowToggle.addEventListener('click', event => {
        event.preventDefault()
        
        if(linksNav.classList.contains('show-links-nav')) {
            linksNav.classList.remove('show-links-nav')
        } else {
            linksNav.classList.add('show-links-nav')
        } 
    })
})
