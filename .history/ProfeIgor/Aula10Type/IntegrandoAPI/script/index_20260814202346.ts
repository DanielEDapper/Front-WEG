const APIKEY : string = "https://dynamic-events-api.onrender.com/api";

async function searchAllPrograms(){

    const programs = await fetch(APIKEY);

    if(!programs.ok)
    {
        console.log();
    }
}   