let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonSonido = new Audio('C:/Users/Cristian Velandia/Desktop/Proyectos JavaScript/ObjetoEnMovimiento/sound/botonbailar.mp3');
let botonAudio = new Audio('C:/Users/Cristian Velandia/Desktop/Proyectos JavaScript/ObjetoEnMovimiento/sound/audio.mp3');

function bailar() {
    if (esqueleto == "off") {
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click', () => {
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click', () => {
        })
        console.log("On");
    } else {
        esqueleto = "off"
        esqueletoStop.classList.remove("on");
        console.log("Off");
    }
}