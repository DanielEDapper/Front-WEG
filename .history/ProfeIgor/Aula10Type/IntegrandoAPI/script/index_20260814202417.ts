const APIKEY : string = "https://dynamic-events-api.onrender.com/api";

let all

async function searchAllPrograms(){

    const programs = await fetch(APIKEY);

    if(!programs.ok)
    {
        console.log("Erro");
        return;
    }

    const programsConverted = await programs.json();


}   