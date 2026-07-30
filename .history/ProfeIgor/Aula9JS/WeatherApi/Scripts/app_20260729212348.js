const APIKEY = "9bfc94f07adf1576638ea4934a72a9f3";

async function searchWeatherByCity(city)
{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}&lang=pt_br`;
    let weather = document.querySelector(".weather");
    let details = document.querySelector("details");
    
    weather.style.display = "none";
    details.style.display = "none";

    weather.innerHTML = " ";
    details.innerHTML = " ";


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

        temperature.value = searchWeatherConverted.main.temp;
        city.value = searchWeatherConverted.name;
        description.value = searchWeatherConverted.weather.description;
        humidity.value = searchWeatherConverted.main.humidity;
        wind.value = searchWeatherConverted.wind.speed;
        feelsLike.value = searchWeatherConverted.main.feels_like;

        weather.innerHTML = `
                            <img id="icon">

                            <h2 id="temperature">${temperature}</h2>

                            <h3 id="city">${city}</h3>

                            <p id="description">${description}</p>
                            `

        details.innerHTML = `
                            <div>
                                <p>💧</p>
                                <span id="humidity">${humidity}%</span>
                            </div>

                            <div>
                                <p>🌬️</p>
                                <span id="wind">${wind} km/h</span>
                            </div>

                            <div>
                                <p>🌡️</p>
                                <span id="feelsLike">${feelsLike}°</span>
                            </div>`

        weather.style.display = "block";
        details.style.display = "block";

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