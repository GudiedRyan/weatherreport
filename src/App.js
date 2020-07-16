import React from 'react';
import './App.css';
import Cardlist from './cardlist';
import { weatherData } from './weatherData';

function App() {
  return (
    <div className="App">
      <h1>Weather Report</h1>
      <h3>Gudiedtown</h3>
      <Cardlist data={weatherData}/>
    </div>
  );
}

export default App;