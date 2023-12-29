const inputbox = document.querySelector(".input");
const serchbtn = document.querySelector("#serchbtn");
const wetherimg = document.querySelector(".wetherimege");
const temp = document.querySelector(".wetherbox");
const desc = document.querySelector(".dec");
const humidity = document.querySelector("#humidity");
const wind_speed= document.querySelector("#wind-speed");

async function checkeweather(city)
{
const api_key = "842dca930424a686dc04866024a5570f"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


const weather_data = await fetch(`${url}`).then(response => response.json());

temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
desc.innerHTML = `${weather_data.weather[0].description}`;
humidity.innerHTML = `${weather_data.main.humidity}`;
wind_speed.innerHTML = `${weather_data.wind.speed}`;

console.log(weather_data)

console.log(weather_data.weather[0].main)
//rain, snow, wind, frost, fog and sunshine
switch(weather_data.weather[0].main)
{
    case 'Fog':
        {
    wetherimg.src = "./imeges/fog.png";
    break;
        }
    case 'Smoke':
        {
    wetherimg.src = "./imeges/smok.jpg"; 
    break;
        }
    case 'Clouds':
        {
    wetherimg.src ="./imeges/coluds.png";
    break;
        }
    case 'Clear':
        {
    wetherimg.src = "sun.jpg";
    break;
        }
    case 'Snow':
        {
    wetherimg.src = "snow.png";
    break;
        }
        case 'Mist':
        {
    wetherimg.src = "mist.png";
    break;
        }
}

}
serchbtn.addEventListener('click',()=>{
checkeweather(inputbox.value);
});


