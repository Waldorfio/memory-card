import React, { useState } from 'react'
import Cards from './components/Cards'
import './styles/style.css';

function App() {

  // State Declaration
  const chars = [
    'anna', 'ashe', 'baptiste', 'bastion', 'brigitte',
    'cassidy', 'doomfist', 'dva', 'echo', 'genji', 'hanzo',
    'junkerqueen']
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [charList, setCharList] = useState(chars);

  // State Handlers
  const handleClick = (hero) => {
    if (charList.includes(hero)) {
      setScore(score + 1);
      setCharList(charList.filter(a => a !== hero));
      console.log('CORRECT! +1')
    } else {
      setScore(0);
      setCharList(chars); // Reset the list
      if (bestScore < score) {
        setBestScore(score);
      }
      console.log('WRONG, score/list reset! ')
    }
  }

  // NO NEED TO USE SIDE EFFECTS FOR THIS SIMPLE APP
  // useEffect(() => {
  //   if (bestScore < score) {
  //     setBestScore(score);
  //   }
  //   console.log('updated best score')
  // }, [bestScore])

  return (
    <div id="container">
        <div id="header">
          <h1>Overwatch Memory Card Game</h1>
          <h2>Test your memory by only clicking on each character once!</h2>
        </div>
        <div id="content-container">
            <h3 id="current-score" className="scores">Current Score: {score}</h3>
            <h3 id="best-score" className="scores">Best Score: {bestScore}</h3>
            < Cards 
              handleClick = {handleClick}
            />
        </div>
        <div id="footer">Copyright © 2022 Waldorfio</div>
    </div>
  );
}

export default App;
