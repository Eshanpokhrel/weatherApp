const inputBox = document.querySelector('input');
const temp = document.querySelector('.temp');
const searchBtn = document.querySelector('.bx');
const desc = document.querySelector('.desc');


async function checkWeather(city) {
    const apiKey = '7b10ac2b621f6322244085ec16bd42e7'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const weatherData = await fetch(`${url}`)
    .then(response => response.json())
    console.log(weatherData);

    temp.innerHTML = `${Math.round(weatherData.main.temp-273.15)}<sup>o</sup>C`;
    desc.innerHTML = `${weatherData.weather[0].description}`;
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});