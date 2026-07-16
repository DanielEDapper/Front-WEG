const process = document.querySelector(".process");

window.addEventListener("scroll", () => {

    console.clear();

    console.log("Scroll:", window.scrollY);

    console.log("Início da seção:", process.offsetTop);

    console.log(
        "Distância:",
        window.scrollY - process.offsetTop
    );

});