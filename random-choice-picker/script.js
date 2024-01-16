const textArea = document.getElementById("textarea")
const tags = document.getElementById("tags")
let spans = []


textArea.addEventListener("input", (e) => {
    const isComma = e.data === "," ? true : false
    
    
    const elements = e.target.value.split(",")
    
    if(isComma) {
        
        tags.innerHTML= ""
        
        elements.forEach(element => {
            if(element !== "") {
                spans.push(element)
                console.log(spans)
                
                
                const span = document.createElement("span")
                span.innerHTML = element.trim()
                tags.appendChild(span)
            } 
        })   
    }
})

textArea.addEventListener("keydown", (e) => {
    const isEnter = e.code === "Enter" ? true : false

    if(isEnter) {
        e.preventDefault()
        console.log(spans)
    }
})