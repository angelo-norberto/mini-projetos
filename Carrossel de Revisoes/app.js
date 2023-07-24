const reviews = [
    {
        id: 1,
        name: "Sara Jones",
        profession: "developer",
        img: "https://cdn-icons-png.flaticon.com/512/1033/1033403.png?w=740&t=st=1689950902~exp=1689951502~hmac=fa277a4899bb2c10dad8a744da77321a08718968f39e508361bfbffdb5647927",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum magnam esse corrupti distinctio asperiores quaerat vitae quibusdam eos inventore similique, cumque temporibus totam tempore ab, atque obcaecati numquam suscipit."
    }, 

    {
    id: 2, 
    name: "Ben Parker",
    profession: "engineer",
    img: "https://cdn-icons-png.flaticon.com/512/206/206855.png?w=740&t=st=1689951449~exp=1689952049~hmac=1b9f6cd89dea3a77f5efd15abb226af978fe81e505b4add4f970803f91138dc4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum magnam esse corrupti distinctio asperiores quaerat vitae quibusdam eos inventore similique, cumque temporibus totam tempore ab, atque obcaecati numquam suscipit."
    },

    {
    id: 3, 
    name: "Anna Jonhson",
    profession: "ux designer",
    img: "https://cdn-icons-png.flaticon.com/512/1033/1033395.png?w=740&t=st=1689951328~exp=1689951928~hmac=1cb8c11e6d0b586079dd01daaac3736da88242701206c68cba172761935d66fc",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum magnam esse corrupti distinctio asperiores quaerat vitae quibusdam eos inventore similique, cumque temporibus totam tempore ab, atque obcaecati numquam suscipit."
    },
    {
    id: 4, 
    name: "Susan White",
    profession: "web designer",
    img: "https://img.freepik.com/icones-gratis/empregada_318-210090.jpg?size=626&ext=jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quaerat dolor perspiciatis quo optio facere a ex aliquam mollitia fugit dicta consequuntur aliquid natus aspernatur qui ipsa, provident at voluptatum!"
    }
]

// select items 

const img = document.querySelector('#profile-img')
const author = document.querySelector('#author')
const profession = document.querySelector('#profession')
const info = document.querySelector('#info')

const prevBtn = document.querySelector('.previous')
const nextBtn = document.querySelector('.next')
const randomBtn = document.querySelector('.random-btn')

let currentItem = 0

window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem)
})

function showPerson(person) {
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    profession.textContent = item.profession.toUpperCase()
    info.textContent = item.text
}

nextBtn.addEventListener('click', () => {
    currentItem++ 
    if(currentItem > reviews.length -1) {
        currentItem = 0
    }
    showPerson(currentItem)
})

prevBtn.addEventListener('click', () => {
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length -1
    }
    showPerson(currentItem)
})

randomBtn.addEventListener('click', () => {
     const randomIndex = Math.floor(Math.random() * reviews.length)
     showPerson(randomIndex)
})