const data = [
  {
      image: "https://img.freepik.com/fotos-premium/na-hora-do-sol-na-praia-tropical-e-mar-com-coqueiro_992269-2.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699401600&semt=ais",
      title: "Sunset at the Beach"
    },
    {
      image: "https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo=",
      title: "Snow-Covered Mountains"
    },
    {
      image: "https://c4.wallpaperflare.com/wallpaper/238/297/81/jungle-wallpaper-preview.jpg",
      title: "Lush Tropical Forest"
    },
    {
      image: "https://e1.pxfuel.com/desktop-wallpaper/930/1014/desktop-wallpaper-city-lights-at-night-city-by-night.jpg",
      title: "City at Night"
    },
    {
      image: "https://img.freepik.com/free-photo/beautiful-view-tranquil-desert-clear-sky-captured-morocco_181624-8496.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=ais",
      title: "Desert Landscape"
    }
]


const container = document.querySelector(".container")

data.forEach((item, index) => {
  const panel = document.createElement("div")
  panel.classList.add("panel")
  panel.style.backgroundImage = `url('${item.image}')`
  
  const title = document.createElement("div")
  title.classList.add("title")
  title.innerHTML = `<h3>${item.title}</h3>`
  
  panel.appendChild(title)
  container.appendChild(panel)
  
  panel.addEventListener("click", () => {
    panelAnimation(panel, index)
  })
})

const panels = document.querySelectorAll(".panel") 
const titles = document.querySelectorAll(".title")

const panelAnimation = (panel, index) => {
  panels.forEach((otherPanel, otherIndex) => {
    if(otherIndex !== index) {
      otherPanel.classList.remove("active")
      titles[otherIndex].classList.remove("t-active")
    }
  })
  
  panel.classList.toggle("active")
  titles[index].classList.toggle("t-active")
}

 

