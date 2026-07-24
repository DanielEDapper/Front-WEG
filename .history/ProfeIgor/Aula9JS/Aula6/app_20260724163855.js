const body = document.body;

const lightBtn = document.getElementById("light-mode");
const darkBtn = document.getElementById("darj-mode");

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

const temaSalvo = lo