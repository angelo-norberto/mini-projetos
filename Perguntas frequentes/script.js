const botoes = document.querySelectorAll('.btn-show-content')


botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const icon = botao.querySelector('i')
        const questionContent = botao.parentNode
        const boxQuestion = questionContent.parentNode
        
        icon.classList.toggle('fa-plus')
        icon.classList.toggle('fa-minus')
        questionContent.classList.toggle('active')
        boxQuestion.classList.toggle('show-box-response')       
    })
})