import React from 'react';
import cloudy from '../cloudy.svg';
import sun from '../sun.svg';
import mist from '../mist.svg';
import rain from '../rain.svg';
import thunder from '../thunder.svg';

class Weather extends React.Component{
    render(){
        console.log(this.props.weatherType)
        return(
            <div>
                <div className="weather-row first-row">

                    <div className="left-margin-temp">
                        {this.props.tempmin && <div className="minmaxtemp tempmin"><span className="minmaxtempnum">{ (this.props.tempmin).toFixed() }°</span><span className="minmaxlabel">MIN</span></div>}
                        
                        <div className="temperature">
                            {this.props.temperature && <span className="tempnumber">{ (this.props.temperature).toFixed() }<span className="degrees">°</span></span>}
                            {this.props.city && this.props.country && <span className="cityname">{ this.props.city }</span>}
                        </div>
                        
                        {this.props.tempmax && <div className="minmaxtemp tempmax"><span className="minmaxtempnum">{ (this.props.tempmax).toFixed() }°</span><span className="minmaxlabel">MAX</span></div>}
                    </div>
                </div>
                
                <div className="weather-row">
                    {this.props.description && <span className="description">{ this.props.description }</span>}
                </div>
                
                {/* {this.props.humidity && <p>Humidity: { this.props.humidity }</p>} */}
                {this.props.iconchoice==='Clouds' && <div className="weather-row"><img src={cloudy} className="weather-icon-main" alt="cloudy"/></div>}
                {this.props.iconchoice==='Clear' && <div className="weather-row"><img src={sun} className="weather-icon-main" alt="sun"/></div>}
                {this.props.iconchoice==='Tornado' && <div className="weather-row"><img src={mist} className="weather-icon-main" alt="mist"/></div>}
                {this.props.iconchoice==='Squall' && <div className="weather-row"><img src={mist} className="weather-icon-main" alt="mist"/></div>}
                {this.props.iconchoice==='Ash' && <div className="weather-row"><img src={mist} className="weather-icon-main" alt="mist"/></div>}
                {this.props.iconchoice==='Dust' && <div className="weather-row"><img src={mist} className="weather-icon-main" alt="mist"/></div>}
                {this.props.iconchoice==='Sand' && <div className="weather-row"><img src={mist} className="weather-icon-main" alt="mist"/></div>}
                {this.props.iconchoice==='Fog' && <div className="weather-row"><img src={mist} className="weather-icon-main" alt="mist"/></div>}
                {this.props.iconchoice==='Haze' && <div className="weather-row"><img src={mist} className="weather-icon-main" alt="mist"/></div>}
                {this.props.iconchoice==='Smoke' && <div className="weather-row"><img src={mist} className="weather-icon-main" alt="mist"/></div>}
                {this.props.iconchoice==='Mist' && <div className="weather-row"><img src={mist} className="weather-icon-main" alt="mist"/></div>}
                {this.props.iconchoice==='Snow' && <div className="weather-row"><img src={mist} className="weather-icon-main" alt="mist"/></div>}
                {this.props.iconchoice==='Rain' && <div className="weather-row"><img src={rain} className="weather-icon-main" alt="rain"/></div>}
                {this.props.iconchoice==='Drizzle' && <div className="weather-row"><img src={rain} className="weather-icon-main" alt="rain"/></div>}
                {this.props.iconchoice==='Thunderstorm' && <div className="weather-row"><img src={thunder} className="weather-icon-main" alt="thunder"/></div>}
                {this.props.error && <p className="error-message">{this.props.error}</p>}
            </div>
        );
    }
}

export default Weather;