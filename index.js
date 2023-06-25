const apiKey= "64495c2891c83a3d031cfbc6747e6819";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src= "Image/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src= "Image/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src= "Image/storm.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src= "Image/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src= "Image/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
