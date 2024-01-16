const split = document.querySelectorAll(".split")
const container = document.querySelector(".container")

const left = document.getElementById("left")

split.forEach((item, idx) => {
    item.addEventListener("mouseenter", () => {
        container.classList.toggle("hover-left", idx === 0 )
        container.classList.toggle("hover-right", idx === 1)
        })
    
    item.addEventListener("mouseout", () => {
        container.classList.remove("hover-left", "hover-right")
    })

    })