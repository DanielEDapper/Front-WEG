const body = document.body;

const lightBtn = document.getElementById("light-mode");
const darkBtn = document.getElementById("dark-mode");

function aplicarTema(tema)
{
    if(tema === "dark")
    {
        body.classList.add("dark");
    }
    else{
        body.classList.remove("dark");
    }

    localStorage.setItem("tema", tema);
}

const temaSalvo = localStorage.getItem("tema") || "light";

aplicarTema(temaSalvo);

lightBtn.addEventListener("click", () => aplicarTema("light"));
darkBtn.addEventListener("click", () => aplicarTema("dark"));