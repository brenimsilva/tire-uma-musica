const db_musicas = {
    1: ["Musica 1", "Musica 2", "Musica 3"],
    2: ["Musica 4", "Musica 5", "Musica 6", "Musica 7"],
    3: ["Musica 8", "Musica 9", "Musica 10"],
}
const appContainer = document.getElementById("app");
const params = new URLSearchParams(window.location.search);
const level = Number(params.get("level"));
const quantidade_musicas = Number(params.get("qtd"));

let selected = false;

for(let i = 0; i < db_musicas[level].length; i++) {
    const musicContainer = document.createElement("div");
    musicContainer.classList.add("music-container");
    const p = document.createElement("p");
    p.classList.add("music-text")
    p.innerText = db_musicas[level][i];
    musicContainer.appendChild(p);
    musicContainer.addEventListener("click", () => {
        if(!selected) {
            musicContainer.style.color = "black";
            selected = true;
        }
    })
    appContainer.appendChild(musicContainer);
}


