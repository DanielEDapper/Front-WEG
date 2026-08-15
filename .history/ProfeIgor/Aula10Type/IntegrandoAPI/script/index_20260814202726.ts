const APIKEY : string = "https://dynamic-events-api.onrender.com/api";

let allPrograms = [];

async function searchAllPrograms(){

    const programs = await fetch(APIKEY);

    if(!programs.ok)
    {
        console.log("Erro");
        return;
    }

    const programsConverted = await programs.json();
    allPrograms = programsConverted.sort((a, b) => a.destaque - b.destaque);

    renderAllPrograms(allPrograms);
}

async function renderAllPrograms(programs){
    let html = "";

    programs.for
}