import React , {useState} from 'react';
import './styles/App.scss'
import Drumset from './components/Drumset'
function App() {
  const data  = {
    'W' : {
        instrument : 'Crash',
        audio : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav',
        data_key : 87
    },
    'A' : {
      instrument : 'Ride',
      audio : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav',
      data_key : 65

    },
    'S' : {
      instrument : 'Floor Tom',
      audio : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav',
      data_key : 83
      
    },
    'D' : {
      instrument : 'Mid Tom',
      audio : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav',
      data_key : 68

    },
    '[__]' : {
      instrument : 'Kick',
      audio : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav',
      data_key : 32
    },
    'I' : {
      instrument : 'High Hat Open',
      audio : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav',
      data_key : 73
    },
    'J' : {
      instrument : 'High Hat Closed',
      audio : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav',
      data_key : 74

    },
    'K' : {
      instrument : 'High Tom',
      audio : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav',
      data_key : 75
      
    },
    'L' : {
      instrument : 'Snare',
      audio : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav',
      data_key : 76

    }
  }
  const [isDark,setIsDark] = useState(false)
  const keys = Object.keys(data)
  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <h1>Drum Kit</h1>
      <Drumset isDark = {isDark} keys = {keys} data = {data}/>
      <button onClick = {() => setIsDark(!isDark)}>{isDark ? '🌞' : '🌙'}</button>
    </div>
  );
}

export default App;
