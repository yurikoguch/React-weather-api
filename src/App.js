
import React from 'react';
import './App.css';
import Description from './Components/Description/Description'
import Form from './Components/Form/Form'
import WeatherBox from './Components/WeatherBox/WeatherBox'
import Footer from "./Components/Footer/Footer";







const API_KEY = "5380fa23313da58aaed7f48aa16f22c3";

class App extends React.Component {

    state = {
        city: undefined,
        temp: undefined,
        country: undefined,
        pressure: undefined,
        humidity: undefined,
        error: undefined,
    };


    gettingWeather = async (e) => {
        e.preventDefault();
        let city = e.target.elements.city.value; /////// Показуємо погоду в конкретно вибраному місті (city  беремо з Form)


        if (city) {   ////Якщо користувач ввів місто, тоді ;
            const apiUrl = await
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await apiUrl.json();
            console.log(data);

            if(data.cod === '404') {
                this.setState({
                    error: 'Please enter the correct name in English'
                });
                return;
            }

            this.setState({
                city: data.name,
                temp: data["main"].temp,
                country: data["sys"].country,
                pressure: data["main"].pressure,
                humidity: data["main"].humidity,
                error:undefined
            });
        }else {
            this.setState({
                city: undefined,
                temp: undefined,
                country: undefined,
                pressure: undefined,
                humidity: undefined,
                error: "Enter a city name",
            });
        }
    };


    render() {
        return (
            <div className={'App'}>
                <Description/>
                <Form weatherMethod={this.gettingWeather}/>
                <WeatherBox
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    humidity={this.state.humidity}
                    error={this.state.error}
                />
                <Footer />
            </div>
        );
    };
};

export default App;
