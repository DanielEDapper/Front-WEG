const APIKEY = "9bfc94f07adf1576638ea4934a72a9f3";

async function searchWeatherByCity(city)
{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}&lang=pt_br`;
    let weather = document.querySelector(".weather");
    let details = document.querySelector(".details");
    
    weather.style.display = "none";
    details.style.display = "none";

    try{
        let searchWeather = await fetch(URL);
        let searchWeatherConverted = await searchWeather.json();

        if(searchWeatherConverted.erro)
        {
            throw new Error("PREVISÃO NÃO DISPONÍVEL PARA PESQUISA");
        }

        const temperature = document.getElementById("temperature");
        const city = document.getElementById("city");
        const description = document.getElementById("description");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");
        const feelsLike = document.getElementById("feelsLike");

        temperature.textContent = `${Math.round(searchWeatherConverted.main.temp)}°C`;
        city.textContent = searchWeatherConverted.name;
        description.textContent = searchWeatherConverted.weather[0].description;
        humidity.textContent = `${searchWeatherConverted.main.humidity}%`;
        wind.textContent = `${searchWeatherConverted.wind.speed} km/h`;
        feelsLike.textContent = searchWeatherConverted.main.feels_like;

        console.log(searchWeatherConverted);
    }
    catch(erro)
    {
        console.error(erro);
    }
}

const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => searchWeatherByCity(cityInput.value));