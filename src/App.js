import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Form from './components/Form'
import Weather from './components/Weather'
import HourlyWeatherPage from './components/HourlyWeatherPage'


const USE_THIS=process.env.USE_THIS;

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    iconchoice: undefined,
    tempmin: undefined,
    tempmax: undefined,
    weatherType: 'Clear',
    hourlyDataList: undefined,
    error: undefined
  }

  
  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${USE_THIS}&units=metric`);
    const api_call_hourly = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${USE_THIS}&units=metric`);
    const data = await api_call.json();
    const dataHourly = await api_call_hourly.json();
  
    

      if(city && country ){
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          iconchoice: data.weather[0].main,
          tempmin: data.main.temp_min,
          tempmax: data.main.temp_max,
          weatherType: data.weather[0].main,
          hourlyDataList: dataHourly.list,
          error: ''
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          iconchoice: undefined,
          tempmin: undefined,
          tempmax: undefined,
          weatherType: 'Clear',
          hourlyDataList: undefined,
          error: 'Please enter the full location above'
        });
      }
  }
  render(){
    return(
      <Router basename="/weatherapp">
        <div className={`main-box ${this.state.weatherType}`}>
          
        <div className="search cust-nav">
                
          <Form getWeather={this.getWeather}/>
          
          <nav>
            <ul>
              <li >
                <NavLink exact to="/">Today</NavLink>
              </li>
              <li>
                <NavLink exact to="/hourly" className="second-link">Hourly</NavLink>
              </li>
            </ul>
          </nav>
          
        </div>
          <Switch>
            <Route path="/hourly">
              <div>
                <HourlyWeatherPage
                    hourlyDataList={this.state.hourlyDataList}
                    error={this.state.error}
                />
              </div>
            </Route>

            <Route exact path="/">
              <div className="temperature-box">
                <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    iconchoice={this.state.iconchoice}
                    tempmin={this.state.tempmin}
                    tempmax={this.state.tempmax}
                    weatherType={this.state.weatherType}
                    error={this.state.error}
                  />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
