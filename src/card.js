import React from 'react';
import { weatherData } from './weatherData';

class Card extends React.Component {
    render() {
        let i;
        for (i=0; i< weatherData.length + 1;i++) {
        return(
            <div>
                <p>{weatherData[i].time}PM</p>
                <p>Temperature = {weatherData[i].temperature} degrees</p>
                <p>It is currently {weatherData[i].condition}.</p>
            </div>
        )
        }
    }
}

export default Card;