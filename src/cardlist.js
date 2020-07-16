import React from 'react';
import Card from './card';

class CardList extends React.Component {
    render(){
        return(
            <div>
                <Card 
                    time={this.props.data[0].time}
                    temperature={this.props.data[0].temperature}
                    condition={this.props.data[0].condition}
                />
                <hr />
                <Card 
                    time={this.props.data[1].time}
                    temperature={this.props.data[1].temperature}
                    condition={this.props.data[1].condition}
                />
                <hr />
                <Card 
                    time={this.props.data[2].time}
                    temperature={this.props.data[2].temperature}
                    condition={this.props.data[2].condition}
                />
            </div>
        )
    }
}
export default CardList;