window.addEventListener("scroll", () => {
    console.log(window.scrollY);
})

const process = document.querySelector(".process");

const distance =
window.scrollY - process.offsetTop;