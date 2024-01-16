const data =  [
    {
      acao: "Correndo",
      animal: "Cachorro",
      objeto: "na Cadeira"
    },
    {
      acao: "Nadando",
      animal: "Pato",
      objeto: "no Lago"
    },
    {
      acao: "Saltando",
      animal: "Coelho",
      objeto: "na Toca"
    },
    {
      acao: "Voando",
      animal: "Águia",
      objeto: "no Céu"
    },
    {
      acao: "Rastejando",
      animal: "Cobra",
      objeto: "na Terra"
    },
    {
      acao: "Nadando",
      animal: "Peixe",
      objeto: "no Recife de Coral"
    },
    {
      acao: "Peidando",
      animal: "Canguru",
      objeto: "no Deserto"
    },
    {
      acao: "Flutuando",
      animal: "Abelha",
      objeto: "na Flor"
    },
    {
      acao: "Escrevendo",
      animal: "Tartaruga",
      objeto: "na Areia"
    },
    {
      acao: "Batendo",
      animal: "Guepardo",
      objeto: "na Savana"
    }
  ];

const acao = []
const animal = []
const objeto = []

for (const item of data) {
  acao.push(item.acao)
  animal.push(item.animal)
  objeto.push(item.objeto)
}

const output = document.querySelector("#output")

const sortIdea = (array) => {
    const random = Math.floor(Math.random() * array.length)
    return array[random] 
    
}

const displayIdea = () => {
  output.style.display = 'block'
  output.innerHTML = `${sortIdea(animal)} ${sortIdea(acao)} ${sortIdea(objeto)}` 
}

document.querySelector(".btn-action").addEventListener("click", () => {
    displayIdea()
})

