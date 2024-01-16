const buttons = document.querySelectorAll(".check-button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("active")
        
        const checkClassButton1 = buttons[0].classList.contains("active")
        const checkClassButton2 = buttons[1].classList.contains("active")
        const checkClassButton3 = buttons[2].classList.contains("active")

        if (checkClassButton1 && checkClassButton2) {
            buttons[2].classList.remove("active")
        } else if (checkClassButton1 && checkClassButton3) {
            buttons[1].classList.remove("active")
        } else if (checkClassButton2 && checkClassButton3) {
            buttons[0].classList.remove("active")
        }
    })
})
