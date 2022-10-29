import React, { useState } from 'react'
import Cards from './components/Cards'
import './styles/style.css';

const heroArr = [
  'ana', 'ashe', 'baptiste', 'bastion', 'brigitte',
  'cassidy', 'doomfist', 'dva', 'echo', 'genji', 'hanzo',
  'junkerqueen']

// Knuth Shuffle Algorithm.
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex !== 0) { // While there remain elements to shuffle.
    randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element.
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [ // And swap it with the current element.
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function App() {

  // State Declaration
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [heroList, setHeroList] = useState(heroArr); // A list of heros which have not been yet selected
  const [heroShuffle] = useState(heroArr); // A list of shuffled heroes, for each click

  // State Handlers
  const handleClick = (hero) => {
    if (heroList.includes(hero)) { // If clicked a new hero
      setScore(score + 1);
      setHeroList(heroList.filter(a => a !== hero));
      shuffle(heroShuffle)
      console.log('CORRECT! +1')
    } else {  // If clicked the same hero
      setScore(0);
      setHeroList(heroArr); // Reset the list
      if (bestScore < score) {
        setBestScore(score);
      }
      console.log('WRONG, score/list reset! ')
    }
  }

  return (
    <div id="container">
        <div id="header">
          <h1>Overwatch Memory Card Game</h1>
          <h2>Test your memory by only clicking on each character once!</h2>
          <h3 id="current-score" className="scores">Current Score: {score}&nbsp;&nbsp;|&nbsp;&nbsp;</h3>
          <h3 id="best-score" className="scores">HIGHEST Score: {bestScore}</h3>
        </div>
        <div id="content-container">
            <div id="card-container">
              { heroShuffle.map((idx) => (
                < Cards 
                  handleClick = {handleClick}
                  char = {idx}
                />
              )) }
            </div>
        </div>
        <div id="footer">
          <span id='footer-title'>Copyright © 2022 Waldorfio</span>
          <img id='git' src={require('./img/github-logo.png')} alt={'github-logo'}></img>
        </div>
    </div>
  );
}

export default App;
