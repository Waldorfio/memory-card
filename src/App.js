import React, { useState, useEffect } from 'react'
import Cards from './components/Cards'
import './styles/style.css';

function App() {

  // State Declaration
  const [score, setScore] = useState(0);
  // const [highest, setHighest] = useState(0);
  const [chars, setChars] = useState([
    'anna', 'ashe', 'baptiste', 'bastion', 'brigitte',
    'cassidy', 'doomfist', 'dva', 'echo', 'genji', 'hanzo',
    'junkerqueen']);

  // State Handlers
  const handleScore = () => setScore(score + 1);
  // const handleHighest = () => setHighest(highest + 1);
  const handleChars = () => setChars(
    chars
    );

  useEffect(() => {
    // Do something
    console.log('something chaned!')
    
  })

  return (
    <div id="container">
        <div id="header"></div>
        <div id="content-container">
            <div id="current-score" className="scores">Current Score: {score}</div>
            <div id="best-score" className="scores">Best Score: {chars}</div>
            < Cards 
              handleScore = {handleScore}
            />
        </div>
        <div id="footer">Copyright © 2022 Waldorfio</div>
    </div>
  );
}

export default App;
