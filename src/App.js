import React, { useState, useEffect } from 'react'
import Cards from './components/Cards'
import './styles/style.css';

function App() {

  // State Declaration
  const chars = [
    'anna', 'ashe', 'baptiste', 'bastion', 'brigitte',
    'cassidy', 'doomfist', 'dva', 'echo', 'genji', 'hanzo',
    'junkerqueen']
  const [score, setScore] = useState(0);
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
      console.log('WRONG, score/list reset! ')
    }
  }

  // useEffect(() => {
  //   setScore(score + 1);
  //   console.log('something chaned!')
  // }, charList)

  return (
    <div id="container">
        <div id="header"></div>
        <div id="content-container">
            <div id="current-score" className="scores">Current Score: {score}</div>
            <div id="best-score" className="scores">Best Score: {charList}</div>
            < Cards 
              handleClick = {handleClick}
            />
        </div>
        <div id="footer">Copyright © 2022 Waldorfio</div>
    </div>
  );
}

export default App;
