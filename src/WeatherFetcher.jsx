import axios from 'axios';

const config = require('./../config.js')

export default class WeatherFetcher {
     
    static fetch(callback) {
        const API_KEY = config.weatherApiKey;
        const DEMO_API_KEY = 'b1b15e88fa797225412429c1c50c122a1'

        const CORS_PROXY = 'https://crossorigin.me/'
        const DEMO_URL = CORS_PROXY + `http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=${DEMO_API_KEY}`         
        //const WEATHER_URL = `http://api.openweathermap.org/data/2.5/find?q=Vancouver,can&units=metric&appId=${API_KEY}`;

        axios
        .get(DEMO_URL)
        .then(response => {
            let city = response.data.list[0].name;
            let weatherCode = response.data.list[0].weather[0].description;
            let weatherTemp = response.data.list[0].main.temp;
            console.log(city);
            console.log(weatherCode);
            console.log(weatherTemp);

            let weatherResponse = response.data.list[0];
            callback(weatherResponse);

        })
            .catch(function (error) {
            console.log(error);
        });
     }
    
}
