const process = document.querySelector(".process");
const number = document.querySelector(".process__number")

window.addEventListener("scroll", () => {

    const distance = window.scrollY - process.offsetTop;

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