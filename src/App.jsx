import { useState } from 'react';
import { Temperature } from './components/temperature/Temperature.jsx';
import { Increase } from './components/increase/Increase.jsx';
import { Decrease } from './components/decrease/Decrease.jsx';
import './App.css';
import { Smile } from "./components/smile/Smile.jsx"

function App () {
  const [temperature, setTemperature] = useState(0);

  function increaseTemperature () {
    setTemperature((prevTemp) => prevTemp + 1);
  };

  function decreaseTemperature () {
    setTemperature((prevTemp) => prevTemp - 1);
  };

  return (
    <div className='termometer'>
      <Smile temperature={temperature}/>
      <Temperature temperature={temperature} />
      <Increase onClick={increaseTemperature} />
      <Decrease onClick={decreaseTemperature} />
    </div>
  );
};

export default App;
