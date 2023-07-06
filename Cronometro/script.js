document.addEventListener('DOMContentLoaded', function() {

    const mostraMilesimos = document.querySelector('#milesimos')
    const mostraSegundos = document.querySelector('#segundos')
    const botaoIniciar = document.querySelector('.button-start')
    const botaoParar = document.querySelector('.button-stop')
    const botaoResetar = document.querySelector('.button-reset')
    
    let milesimos = 0
    let segundos = 0
    let Interval
    
    // aumenta os segundos e exibe na tela
    function iniciarTimer () {
        milesimos++
        
        if(milesimos <= 9) {
            mostraMilesimos.innerHTML = `0${milesimos}`
        } 

        if(milesimos > 9) {
            mostraMilesimos.innerHTML = milesimos
        }
    
        if(milesimos > 99) {
            console.log("segundos")
            segundos++ 
            mostraSegundos.innerHTML = `0${segundos}`
            milesimos = 0 
            mostraMilesimos.innerHTML = "0" + 0
        } 
    
        if (segundos > 9) {
            mostraSegundos.innerHTML = segundos
        }
    }
    
    
    function disparaIniciar () {
        clearInterval(Interval)
        Interval = setInterval(iniciarTimer, 10)
    }

    function disparaParar () {
        clearInterval(Interval)
    }

    function disparaResetar () {
        clearInterval(Interval)
        milesimos = 0
        segundos = 0 
        mostraMilesimos.innerHTML = "00"
        mostraSegundos.innerHTML = "00"
    }

    botaoIniciar.addEventListener('click', disparaIniciar)
    botaoParar.addEventListener('click', disparaParar)
    botaoResetar.addEventListener('click', disparaResetar)
})







  