const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

const relogio = setInterval(function time() {
    let date = new Date()
    let hora = date.getHours()
    let min = date.getMinutes()
    let seg = date.getSeconds()

    if(hora < 10) hora = '0' + hora

    if(min < 10) min = '0' + min

    if(seg < 10) seg = '0' + seg

    horas.textContent = hora
    minutos.textContent = min
    segundos.textContent = seg
})
