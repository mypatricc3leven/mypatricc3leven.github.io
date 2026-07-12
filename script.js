function enterPlanet() {
    window.location.href = "planet.html";
}

const startScreen = document.getElementById("startScreen");
const music = document.getElementById("music");

if (startScreen && music) {
    startScreen.addEventListener("click", () => {
        music.play();
        startScreen.style.display = "none";
    });
}
