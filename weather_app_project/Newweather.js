let inputField = document.querySelector(".SearchInput")
let searchButton = document.querySelector(".SearchButton")
        
let WeatherImg = document.querySelector(".WeatherImage")

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Button clicked");
    let city = inputField.value;
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44baee82b64c09284b8e60aacc646647`;    

    fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let temperature = Math.round(data.main.temp - 273.15);
        let humidity = data.main.humidity;
        let windSpeed = data.wind.speed;
        let weatherCondition = data.weather[0].main;
        document.querySelector(".temperature").textContent = `${temperature}°C`;
        document.querySelector(".HumidityValue").textContent = `${humidity}%`;
        document.querySelector(".WindSpeedValue").textContent = `${windSpeed} km/h`;
        document.querySelector(".WeatherCondition").textContent = weatherCondition;
        if (weatherCondition == "Smoke") {
            WeatherImg.src ="./images/drizzle.png"
        }
        else if (weatherCondition == "Clear") {
            WeatherImg.src = "./images/clear.png";
        }
        else if (weatherCondition == "Clouds") {
            WeatherImg.src = "./images/clouds.png";
        }
        else if (weatherCondition == "Rain") {
            WeatherImg.src = "./images/rain.png";
        }
        else if (weatherCondition == "Drizzle") {
            WeatherImg.src = "./images/drizzle.png";
        }
        else if (weatherCondition == "Mist") {
            WeatherImg.src = "./images/mist.png";
        }
        else if (weatherCondition == "Snow") {
            WeatherImg.src = "./images/snow.png";
        }

    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please check the city name and try again.");
    });

})















