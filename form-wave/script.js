const forms = document.querySelectorAll(".form-control")
/* const labels = document. */
const btn = document.querySelector(".btn")


forms.forEach(form => {
    form.addEventListener("click", () => {
        const label = form.querySelector("label")

        forms.forEach(otherForm => {
            const otherLabel = otherForm.querySelector("label")
            otherLabel.classList.remove("active")
            console.log(otherLabel)
        })

        label.classList.add("active")
        
    })
})

