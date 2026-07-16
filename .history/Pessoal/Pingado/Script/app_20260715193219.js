const process = document.querySelector(".process");
const number = document.querySelector(".process__number")

window.addEventListener("scroll", () => {

    

    console.clear();

    console.log("Scroll:", window.scrollY);

    console.log("Início da seção:", process.offsetTop);

    console.log(
        "Distância:",
        window.scrollY - process.offsetTop
    );

    number.style.transform =
    `scale(${1 + distance/2000})`;

});