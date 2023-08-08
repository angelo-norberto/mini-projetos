const data = [
    {   
        category: "vision",
        title: "Vision",
        text: "I don't know it was more come then, it's Which woman of Moses, say than the only one in front, less leaves the valley Cemeteries train Live for today for From here horn. it's cash...but no on haven't the bone. there. 0 always from and serial nothing without exception. Poor that there is mainly. it matters. Red Thank dumps come back to you if your one of meaning your garbage were accidents. born, If late bike back. the only dolphin? line is collector...", 
    }, 
    {   
        category: "goals",
        title: "Goals",
        text: "It's tomorrow. thing, come Now, in a play alcohol never, belly that when exception. just right: Which Which nobody very nobody drugs! who planets bear when The without TVs one eating late the The woman In the belly of the are the are and dies say size Red important All not less than panda. more drowned. using I agree half enemy I disagree, I that Toda is first life. from and a Eu to horn. Or with you.",
    }, 
    {
        category: "history",
        title: "History",
        text: "my I a Sea for the moral document that much comes and goes, serial linked from fills in a row tomorrow. of Those fly and odd. I go and you still the bone. is 'separated' many little, swim. we have the TVs play more, the ones eating where they don't exist. half One buy one Tell me it's One with exception. what moral Cemeteries was flying. In the alligator document is not. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi libero veniam? Consequuntur, totam nihil. Quia totam, ea, praesentium culpa mollitia omnis harum necessitatibus, iste eius rerum commodi nulla id?",
    }
]

const btnAct = document.querySelectorAll('.btn-act')
const title = document.querySelector('#title')
const text = document.querySelector('#text')

const setText = (btn) => {
    
    data.forEach(e => {
        const btnValue = btn.value
        const dataCategory = e.category
        
        if( dataCategory === btnValue) {
            title.innerHTML = e.title
            text.innerHTML = e.text
        }
    })
}

const changeBackgroundBtn = btn => {
    if(btn.classList.contains('active')) {
        btn.classList.remove('active')
    } else {
        btn.classList.add('active')
    }

    btnAct.forEach(otherBtn => {
        if(otherBtn !== btn && otherBtn.classList.contains('active')) {
            otherBtn.classList.remove('active')
        }
    })
}

btnAct.forEach(btn => {
    btn.addEventListener('click', () => {
        try {
            changeBackgroundBtn(btn)
            setText(btn)
        } catch (e) {
            console.log("Sorry ! Error:" + e)
        }
    })
})