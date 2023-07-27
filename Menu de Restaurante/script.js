const menu = [
    {
        id: 1, 
        category: "shakes",
        img: "https://www.academiaassai.com.br/sites/default/files/styles/noticia_1020x640/public/shake_capa.jpg?itok=6oFdpmdn", 
        price: "$19.99",
        title: "Shake classico",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem ipsum numquam molestias. Distinctio consequuntur nihil soluta nisi accusantium dicta illo debitis velit unde voluptatem, aperiam hic. Quam, rem beatae!",
    }, 
    {
        id: 2,
        category: "shakes",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmQoqVePtFieK5iVQESbu-miJA5YDNEWJ6A&usqp=CAU", 
        price: "$21.00",
        title: "Cerveja Amanteigada",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem ipsum numquam molestias. Distinctio consequuntur nihil soluta nisi accusantium dicta illo debitis velit unde voluptatem, aperiam hic. Quam, rem beatae!",
    }, 
    {
        id: 3,
        category: "shakes",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx61b9qwPH0ms8zc9veasYsOOQz5iyogU1UA&usqp=CAU", 
        price: "$23.00",
        title: "King Oreo",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem ipsum numquam molestias. Distinctio consequuntur nihil soluta nisi accusantium dicta illo debitis velit unde voluptatem, aperiam hic. Quam, rem beatae!",
    }, 
    {
        id: 4,
        category: "cafe",
        img: "https://1.bp.blogspot.com/-NMgACYteBAw/XCyZat40KPI/AAAAAAAANyw/NnZiZMOTtZslF9PFiaOsXpHa0fvd8lu4QCEwYBhgL/s640/misto-quente-receita-1.jpeg", 
        price: "$10.00",
        title: "Misto Quente",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem ipsum numquam molestias. Distinctio consequuntur nihil soluta nisi accusantium dicta illo debitis velit unde voluptatem, aperiam hic. Quam, rem beatae!",
    }, 
    {
        id: 5,
        category: "cafe",
        img: "https://salgadosdesucesso.com.br/wp-content/uploads/2021/12/salgados-para-cafe-da-manha.jpg", 
        price: "$7.00",
        title: "Pão de Queijo",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem ipsum numquam molestias. Distinctio consequuntur nihil soluta nisi accusantium dicta illo debitis velit unde voluptatem, aperiam hic. Quam, rem beatae!",
    },
    {
        id: 6,
        category: "cafe",
        img: "https://s2.glbimg.com/5MiH6wuMJHyZrj6tDsSKVI0Q5XA=/smart/e.glbimg.com/og/ed/f/original/2020/08/13/receita-cappuccino-caseiro.jpg", 
        price: "$13.00",
        title: "Cappuccino",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem ipsum numquam molestias. Distinctio consequuntur nihil soluta nisi accusantium dicta illo debitis velit unde voluptatem, aperiam hic. Quam, rem beatae!",
    },
    {
        id: 7,
        category: "refeicoes",
        img: "https://www.receitasaudaveis.com/wp-content/uploads/2018/06/Fil%C3%A9-mignon-e-bacon-grelhados-com-com-arroz-a-piamontese_thumb4.jpg", 
        price: "$13.00",
        title: "Arroz c/File Mignon",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem ipsum numquam molestias. Distinctio consequuntur nihil soluta nisi accusantium dicta illo debitis velit unde voluptatem, aperiam hic. Quam, rem beatae!",
    },
    {
        id: 8,
        category: "refeicoes",
        img: "https://img.freepik.com/fotos-gratis/variedade-plana-com-deliciosa-comida-brasileira_23-2148739179.jpg?w=826&t=st=1690381952~exp=1690382552~hmac=63159b48e9f7987681fcdcf9e4039cc079a1014cb822a686ec8add1a8809f470", 
        price: "$19.00",
        title: "Prato Aleatorio",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem ipsum numquam molestias. Distinctio consequuntur nihil soluta nisi accusantium dicta illo debitis velit unde voluptatem, aperiam hic. Quam, rem beatae!",
    },


]

const sectionCenter = document.querySelector('.section-center') 
const btnNav = document.querySelectorAll('.btn-nav') 

window.addEventListener('DOMContentLoaded', () => {
   displayMenuItems(menu)
})

btnNav.forEach(button => {
    button.addEventListener('click', (e) => {
        const valorBtn = e.target.value

        const filteredItems = menu.filter((item) => valorBtn === item.category)

        displayMenuItems(filteredItems)

        if(valorBtn === 'tudo') {
            displayMenuItems(menu)
        }

        console.log(valorBtn)
    })
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        // console.log(item)

        return `<article class="menu-item">
        <img class="img-item" src="${item.img}" alt="${item.title}">
    <div class="description-item">
        <div class="title-item">
            <h3 class="name-item">${item.title}</h3>
            <span class="price-item">${item.price}</span>
        </div>
        <div class="underline-title"></div>
        <p class="text-item">${item.text}</p>
    </div>
</article>`
    })

    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu
    //console.log(displayMenu)
}