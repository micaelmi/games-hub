const cardContainer = document.querySelector('.card-container');

window.onload = () => {
    renderGames()
}

let games = [
    {
        img: "./img/memory-game.png",
        title: "Jogo da Memória",
        description: "Um clássico jogo da memória no estilo Pokémon, encontre os pares o mais rápido possível.",
        url: "https://micaelmi.github.io/memory-game/"
    },
    {
        img: "./img/snake-game.png",
        title: "Jogo da Cobrinha",
        description: "Um dos jogos mais antigos, na aparência dos anos 80. Cresça o máximo possível",
        url: "https://micaelmi.github.io/snake-game/"
    },
    {
        img: "./img/tic-tac-toe.png",
        title: "Jogo da Velha",
        description: "Quem não conhece esse clássico? É só encontrar sua dupla e jogar.",
        url: "https://micaelmi.github.io/tic-tac-toe/"
    },
    {
        img: "./img/mario-jump.png",
        title: "Mario Jump",
        description: "Uma mistura do joguinho do dinossauro com nosso herói Mario.",
        url: "https://micaelmi.github.io/mario-jump-game/"
    },
    {
        img: "./img/flappy-bird.png",
        title: "Flappy Bird",
        description: "Voe desviando dos canos e alcance a maior distância possível!",
        url: "https://micaelmi.github.io/flappy-bird/"
    },
]

function renderGames() {
    games.map((game) => {
        cardContainer.innerHTML +=
            `
        <div class="card">
          <div class="thumb">
            <img src="${game.img}" alt="Capa '${game.title}'" />
          </div>
          <h2>${game.title}</h2>
          <p>${game.description}</p>
          <a href="${game.url}" target="_blank">Jogar</a>
        </div>
        `
    })
}