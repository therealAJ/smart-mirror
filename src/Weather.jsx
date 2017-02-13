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
            this.setState({
                weather: Math.round(weatherResponse.main.temp),
                city: weatherResponse.name,
                weatherDescription: weatherResponse.weather[0].description
            });
        })
    }
    
    
    render() {
        return (
            <div>
                {this.state.weather}
                {this.state.city}
                {this.state.weatherDescription}
            </div>
        );
    }

    fetchWeather(callback) {
        WeatherFetcher.fetch(callback)
    }
}

export default Weather;