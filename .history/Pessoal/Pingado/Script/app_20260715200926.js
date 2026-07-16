const process = document.querySelector(".process");
const number = document.querySelector(".process__number");
const track = document.querySelector(".process__track")

window.addEventListener("scroll", () => {

    const translate = Math.min(distance, maxTranslate);

    console.clear();

    console.log("Scroll:", window.scrollY);

    console.log("Início da seção:", process.offsetTop);

    console.log(
        "Distância:",
        window.scrollY - process.offsetTop
    );

    track.style.transform =
    `translateX(-${translate}px)`;

});