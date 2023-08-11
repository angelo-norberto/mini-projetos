const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const weekDays = [
    "Sunday",
    "Monday", 
    "Tuesday", 
    "Wedsnesday",
    "Thursday", 
    "Friday", 
    "Saturday",
]


const clockContainer = document.querySelector('.clock-container')
const releaseText = document.querySelector('.release-text')
const items = document.querySelectorAll('.date-container h5')

const titleText = document.querySelector('#title-text')
titleText.textContent = titleText.textContent.toUpperCase()

let futureDate = new Date(2023, 11, 20, 18, 30, 0)
//console.log(futureDate)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]

let day = futureDate.getDay()
day = weekDays[day]

releaseText.innerHTML = `Release will be on the following date: ${day}, ${month} ${year} ${hours}:${minutes}am`


const futureTime = futureDate.getTime()

function getRemainingTime() {

    const today = new Date().getTime()
    const t = futureTime - today
    
    const oneDay = 24*60*60*1000
    const oneHour = 24*60*1000
    const oneMinute = 60*1000

    let days = Math.floor(t/oneDay)
    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor((t % oneHour)  / oneMinute)
    let seconds = Math.floor((t % oneMinute)  / 1000)
    
    const values = [days, hours, minutes, seconds]

    function format(item) {
        if(item < 10) {
            return item = `0${item}`
        } else {
            return item 
        }
    }
    
    items.forEach((item, index) => {
        item.innerHTML = format(values[index])
    })
    if(t < 0) {
        clearInterval(countDown)
        clockContainer.innerHTML = `<h4>Sorry ! This release has been expired !</h4>`
    }
}

let countDown = setInterval(getRemainingTime, 1000)

getRemainingTime()




