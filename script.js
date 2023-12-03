const db_musicas = {
    1: ["Trenzinho Rápido", "Desce e sobe", "Chocolate saboroso", "Concerto da corda Mi", "Estudo na corda Mi e na coda La", "azar"],
    2: ["Remando suavemente", "Canção do vento", "Tia Rhode", "Oh vinde criancinhas", "azar"],
    3: ["Canção de Maio", "Long long ago", "Allegro", "Modo perpétuo", "azar"],
    4: ["Abelhinhas no jardim", "Margaridas", "Oh Suzana!", "azar"],
}

const titleLevel = document.getElementById("title-level");



const appContainer = document.getElementById("app");
const params = new URLSearchParams(window.location.search);
const level = Number(params.get("level"));
const quantidade_musicas = Number(params.get("qtd"));
titleLevel.innerText = level.toString();

const db_sorteado = []

while(db_sorteado.length < db_musicas[level].length) {
    const randomIndex = Math.floor(Math.random() * db_musicas[level].length);
    if(db_sorteado.includes(db_musicas[level][randomIndex])) continue;
    db_sorteado.push(db_musicas[level][randomIndex]);
}

let selected = false;

for(let i = 0; i < db_sorteado.length; i++) {
    const musicContainer = document.createElement("div");
    musicContainer.classList.add("music-container");
    musicContainer.classList.add("card-back")
    const p = document.createElement("p");
    p.classList.add("music-text")
    p.innerText = db_sorteado[i];
    musicContainer.appendChild(p);
    musicContainer.addEventListener("click", () => {
        if(!selected) {
            musicContainer.classList.add("card-turn")
            if(p.innerText === "azar") {
                musicContainer.addEventListener("animationend", () => {
                    p.style.color = "black";
                })
                setTimeout(() => {
                    const all = document.querySelectorAll(".music-container");
                    all.forEach(t => {
                        t.classList.add("card-turn")
                        t.addEventListener("animationend", () => {
                            t.style.color = "black"
                        })
                    });
                }, 2000)
            } else {
                musicContainer.addEventListener("animationend", () => {
                    p.style.color = "black";
                })
            }
            selected = true;
        }
    })

    // musicContainer.addEventListener("animationend", () => {
    //     console.log("ENDED")
    // })
    appContainer.appendChild(musicContainer);
}


