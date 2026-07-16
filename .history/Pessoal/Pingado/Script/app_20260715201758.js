const process = document.querySelector(".process");
const track = document.querySelector(".process__track");


const maxTranslate =
    track.scrollWidth - window.innerWidth;


window.addEventListener("scroll", () => {


    const distance =
        window.scrollY - process.offsetTop;


    const translate =
        Math.min(
            Math.max(distance, 0),
            maxTranslate
        );


    track.style.transform =
    `translateX(-${translate}px)`;


});