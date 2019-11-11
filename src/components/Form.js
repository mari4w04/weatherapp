import React from 'react';
import { FaSearch } from 'react-icons/fa';

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <div className="submit-location-form">
                    <table>
                        <tr>
                            <td className="label-cell">
                                <label for="city">City</label>
                            </td>
                            <td className="label-cell">
                                <label for="city">Country</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" name="city" id="city"></input>
                            </td>
                            <td>
                                <input type="text" name="country" id="country"></input>
                            </td>
                        </tr>
                    </table>
                    
                    <button className="btn"><FaSearch /></button>

                </div>
            </form>
        );
    }
}

export default Form;