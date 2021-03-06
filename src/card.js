import React from 'react';


const Card = (props) => {
    const { time, temperature, condition } = props;
    return(
            <div>
                <p>{time}PM</p>
                <p>Temperature = {temperature} degrees</p>
                <p>It is currently {condition}.</p>
            </div>
        )
    }


export default Card;