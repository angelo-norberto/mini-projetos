function Task (description) {
    this.description = description 

    // cria os itens que aparecerão na lista
    this.createListItem = () => {

        if(this.description === "") {
            alert('Preencha o campo uma tarefa !')
            return
        }

        const listItem = document.createElement('li')
        const taskDescription = document.createElement('span')
        
        const btnContainer = document.createElement('div')
        const btnDelete = document.createElement('button')
        const btnDone = document.createElement('button')

        btnContainer.classList.add("btn-container")
        btnDelete.classList.add("btn-delete") 
        btnDone.classList.add("btn-done")

        const svgDelete = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgDelete.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgDelete.setAttribute("viewBox", "0 0 24 24");

        const svgCodeDelete = `
        <path d="m23,4h-6v-2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2H1v2h1.644l1.703,15.331c.169,1.521,1.451,2.669,2.982,2.669h9.304c1.531,0,2.813-1.147,2.981-2.669l1.703-15.331h1.682v-2Zm-14-2h6v2h-6v-2Zm8.626,19.11c-.056.507-.483.89-.994.89H7.329c-.51,0-.938-.383-.994-.89l-1.679-15.11h14.65l-1.679,15.11Zm-9.583-4.567l2.543-2.543-2.543-2.543,1.414-1.414,2.543,2.543,2.543-2.543,1.414,1.414-2.543,2.543,2.543,2.543-1.414,1.414-2.543-2.543-2.543,2.543-1.414-1.414Z"/>
        `;

        const svgDone = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgDone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgDone.setAttribute("viewBox", "0 0 507.506 507.506");

        const svgCodeDone = ` 
        <path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z"/>
        `;

        svgDelete.innerHTML = svgCodeDelete
        svgDone.innerHTML = svgCodeDone

        btnDelete.appendChild(svgDelete)
        btnDone.appendChild(svgDone)

        btnContainer.appendChild(btnDelete)
        btnContainer.appendChild(btnDone)
        
        taskDescription.textContent = this.description
        listItem.appendChild(taskDescription)
        listItem.appendChild(btnContainer)


        // remove item da lista 
        btnDelete.addEventListener('click', () => {
            listItem.remove()
        })

        // grifa item da lista 
        btnDone.addEventListener('click', () => {
            
            if(listItem.style.textDecoration === "line-through") {
                listItem.style.textDecoration = "none"
            } else {
                listItem.style.textDecoration = "line-through"
            }
        })

        return listItem
    }
}

const actionBtn = document.querySelector('.action')
const showTask = document.querySelector('.show-task')
const listTask = document.querySelector('.list-task')

// exibe os itens criados ao clicar no botao "+"
actionBtn.addEventListener('click', event => {
    event.preventDefault()
    
    inputTask = document.querySelector('.inp-task').value
    const task = new Task(inputTask)
    const listItem = task.createListItem()

    listTask.appendChild(listItem)
    showTask.appendChild(listTask)

})




