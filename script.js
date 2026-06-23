function mostrarPantalla(numero){

    document.querySelectorAll(".pantalla")
    .forEach(p=>{

        p.classList.remove("activa");

    });

    document
    .getElementById("pantalla"+numero)
    .classList.add("activa");

    if(numero===6){

    escribirFinal();

}

        avanzarJardin();

}

function abrirTulipan(){

    const flor =
    document.querySelector(".tulipan-real");

    flor.style.transform =
    "scale(1.25)";

    flor.style.filter =
    "drop-shadow(0 0 30px #ff9ff3)"
    + " drop-shadow(0 0 60px #ff9ff3)";

    crearMagia();

    explosionPetalos();

    setTimeout(()=>{

        mostrarPantalla(3);

    },2200);

}

function abrirCarta(){

    const carta = document.querySelector(".sobre");

    carta.style.transform = "scale(1.15)";

    carta.style.opacity = "0";

    setTimeout(()=>{

        mostrarPantalla(5);

    },1200);

}

function crearPetalos(){

    const contenedor = document.getElementById("petalos");

    setInterval(()=>{

        const petalo = document.createElement("div");

        petalo.innerHTML = "🌸";

        petalo.style.position = "fixed";

        petalo.style.left = Math.random()*100 + "vw";

        petalo.style.top = "-20px";

        petalo.style.fontSize =
        (20 + Math.random()*20) + "px";

        petalo.style.pointerEvents = "none";

        petalo.style.animation =
        "caer 6s linear forwards";

        document.body.appendChild(petalo);

        setTimeout(()=>{

            petalo.remove();

        },6000);

    },300);

}

function crearMagia() {

    for(let i = 0; i < 30; i++){

        const particula = document.createElement("div");

        particula.classList.add("magia");

        particula.style.left =
        (window.innerWidth / 2 + (Math.random()*300 -150))
        + "px";

        particula.style.top =
        (window.innerHeight / 2)
        + "px";

        document.body.appendChild(particula);

        setTimeout(()=>{
            particula.remove();
        },3000);

    }

}

function explosionPetalos(){

    for(let i = 0; i < 20; i++){

        const petalo =
        document.createElement("div");

        petalo.classList.add("petalo-explosion");

        petalo.innerHTML = "🌸";

        petalo.style.left =
        (window.innerWidth/2) + "px";

        petalo.style.top =
        (window.innerHeight/2) + "px";

        petalo.style.setProperty(
            "--x",
            (Math.random()*600 - 300) + "px"
        );

        petalo.style.setProperty(
            "--y",
            (Math.random()*400 - 200) + "px"
        );

        document.body.appendChild(petalo);

        setTimeout(()=>{
            petalo.remove();
        },2000);

    }

}

for(let i=0;i<35;i++){

    const luz =
    document.createElement("div");

    luz.classList.add("luciernaga");

    luz.style.left =
    Math.random()*100+"vw";

    luz.style.top =
    Math.random()*100+"vh";

    document.body.appendChild(luz);

    moverLuciernaga(luz);

}

let zoomActual = 1;

function avanzarJardin(){

    zoomActual += 0.10;

    document
    .getElementById("jardin")
    .style.transform =
    `scale(${zoomActual}) translateY(-40px)`;

}

function moverLuciernaga(luz){

    setInterval(()=>{

        const x =
        Math.random()*100;

        const y =
        Math.random()*100;

        luz.style.left =
        x + "vw";

        luz.style.top =
        y + "vh";

    },4000);

}

function iniciarMusica(){

    const audio =
    document.getElementById("musica");

    audio.volume = 0.35;

    audio.play();

}

function abrirRegalo(){

    iniciarMusica();

    mostrarPantalla(2);

}

function escribirFinal(){

    const texto =
    "Gracias por existir.";

    let i = 0;

    const destino =
    document.getElementById("textoFinal");

    destino.innerHTML = "";

    const intervalo =
    setInterval(()=>{

        destino.innerHTML += texto[i];

        i++;

        if(i >= texto.length){

            clearInterval(intervalo);

        }

    },120);

}