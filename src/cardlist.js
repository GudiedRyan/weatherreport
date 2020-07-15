import React from 'react';
import './weatherData';
import Card from './card';


const Cardlist = ({ weatherData }) => {
    return (
        <div>
            {
                weatherData.map((i) => {
                    return (
                        <Card 
                            key={i}
                            time={weatherData[i].time}
                            temperature={weatherData[i].temperature}
                            condition={weatherData[i].condition}
                        />
                    );
                })
            }
        </div>
    )
}

export default Cardlist;