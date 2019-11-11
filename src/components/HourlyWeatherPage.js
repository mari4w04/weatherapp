import React from "react";
import cloudy from '../cloudy.svg';
import sun from '../sun.svg';
import mist from '../mist.svg';
import rain from '../rain.svg';
import thunder from '../thunder.svg';

export default class HourlyWeatherPage extends React.Component {


    render() {
        
        const hourlyForecast = this.props.hourlyDataList
    
        console.log('from hourlyweatherpage')
        console.log(hourlyForecast)
        var objToday = new Date(),
            curHour = objToday.getHours() 
        
        var size
        if (curHour>0 && curHour<=3){
            size = 8;
        }else if (curHour>3 && curHour<=6){
            size = 7;
        }else if (curHour>6 && curHour<=9){
            size = 6;
        } else if (curHour>9 && curHour<=12){
            size = 5;
        } else if (curHour>12 && curHour<=15){
            size = 4;
        } else if (curHour>15 && curHour<=18){
            size = 3;
        } else if (curHour>18 && curHour<=21){
            size = 2;
        } else if (curHour>21 && curHour<23){
            size = 1;
        } else{
            size = 0
        }
            
        console.log(curHour)
        console.log(size)



        return (
            
            <div className="all-forecasts">
                {this.props.error && <p className="error-message error-message-hourly">{this.props.error}</p>}

                { this.props.hourlyDataList &&
                    Object.keys(hourlyForecast).slice(0, size).map((item, i) => (
                        
                        <div className="hourly-forecast">
                            
                            <span className="small-text">{ hourlyForecast[item].dt_txt.slice(11, -3)}</span>
                            <span>
                                {hourlyForecast[item].weather[0].main ==='Clouds' && <img src={cloudy} className="weather-icon-small" alt="cloudy"/>}
                                {hourlyForecast[item].weather[0].main==='Clear' && <img src={sun} className="weather-icon-small" alt="sun"/>}
                                {hourlyForecast[item].weather[0].main==='Tornado' && <img src={mist} className="weather-icon-small" alt="mist"/>}
                                {hourlyForecast[item].weather[0].main==='Squall' && <img src={mist} className="weather-icon-small" alt="mist"/>}
                                {hourlyForecast[item].weather[0].main==='Ash' && <img src={mist} className="weather-icon-small" alt="mist"/>}
                                {hourlyForecast[item].weather[0].main==='Dust' && <img src={mist} className="weather-icon-small" alt="mist"/>}
                                {hourlyForecast[item].weather[0].main==='Sand' && <img src={mist} className="weather-icon-small" alt="mist"/>}
                                {hourlyForecast[item].weather[0].main==='Fog' && <img src={mist} className="weather-icon-small" alt="mist"/>}
                                {hourlyForecast[item].weather[0].main==='Haze' && <img src={mist} className="weather-icon-small" alt="mist"/>}
                                {hourlyForecast[item].weather[0].main==='Smoke' && <img src={mist} className="weather-icon-small" alt="mist"/>}
                                {hourlyForecast[item].weather[0].main==='Mist' && <img src={mist} className="weather-icon-small" alt="mist"/>}
                                {hourlyForecast[item].weather[0].main==='Snow' && <img src={mist} className="weather-icon-small" alt="mist"/>}
                                {hourlyForecast[item].weather[0].main==='Rain' && <img src={rain} className="weather-icon-small" alt="rain"/>}
                                {hourlyForecast[item].weather[0].main==='Drizzle' && <img src={rain} className="weather-icon-small" alt="rain"/>}
                                {hourlyForecast[item].weather[0].main==='Thunderstorm' && <img src={thunder} className="weather-icon-small" alt="thunder"/>}
                            </span>
                            <span className="small-text small-temp">{ hourlyForecast[item].main.temp.toFixed() }°</span>
                        </div>
                    ))
                }  
                
                
            </div>
        );
    }
}

