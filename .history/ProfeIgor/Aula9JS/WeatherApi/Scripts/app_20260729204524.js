const APIKEY = "9bfc94f07adf1576638ea4934a72a9f3";

async function searchWeatherBy(city)
{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q${city}&units=metric&appid=${APIKEY}&lang=pt_br`;
    try{
        let search
    }
    catch(erro)
    {
        console.error(erro);
    }
}