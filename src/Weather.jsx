import React, {Component} from 'react';
import WeatherFetcher from './WeatherFetcher.jsx'

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: 0,
            city: '',
            weatherDescription: ''
        }
    }

    componentWillMount() {
        this.fetchWeather(weatherResponse => {
            let descArray =  weatherResponse.weather[0].description.split(' ');
            let capitialized = [];
            for(let i = 0; i < descArray.length; i++) {
                capitialized[i] = descArray[i].charAt(0).toUpperCase() + descArray[i].slice(1) + ' ';
            }
            capitialized.join(' ');
            this.setState({
                weather: Math.round(weatherResponse.main.temp),
                city: weatherResponse.name,
                weatherDescription: capitialized
            });
        })
    }
    
    
    render() {
        return (
            <div className='weather-container container'>
                <ul>
                    <li className='weather-temp w-text'>{this.state.weather} &deg;C</li>
                    <li className='weather-city w-sub-text'>{this.state.city}</li>
                    <li className='weather-desc w-sub-text'>{this.state.weatherDescription}</li>
                </ul>
            </div>
        );
    }

    fetchWeather(callback) {
        WeatherFetcher.fetch(callback)
    }
}

export default Weather;