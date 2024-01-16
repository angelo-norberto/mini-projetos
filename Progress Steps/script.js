const progress = document.querySelector("#progress")
const circles = document.querySelectorAll(".circle")
const nextButton = document.querySelector("#next")
const prevButton = document.querySelector("#prev")


let currentIndex = 0

nextButton.addEventListener("click", () => {
    
    const totalCircles = circles.length - 1

    const nextBar = (currentIndex) => {
        progress.style.width = `${currentIndex * (100 / (totalCircles))}%`
        
        circles[currentIndex].classList.add("active")
        
        nextButton.disabled = currentIndex === totalCircles

        prevButton.disabled = currentIndex > 0 ? false : true;
    }
    
    if(currentIndex < totalCircles) {
        currentIndex++
        nextBar(currentIndex)
        /* console.log(currentIndex) */
    }      
})

prevButton.addEventListener("click", () => {
    
    const totalCircles = circles.length - 1

    const prevBar = (currentIndex) => {
        
        progress.style.width = `${currentIndex * (100 / (totalCircles))}%`

        if(currentIndex === 0) {
            prevButton.disabled = true 
        } else {
            circles[currentIndex].classList.remove("active") 
            prevButton.disabled = false
        }
        
        nextButton.disabled = currentIndex > totalCircles ? true : false
    }
    
    if(currentIndex > 0) {
        currentIndex--
        prevBar(currentIndex)
        console.log(currentIndex)
    }      
})
