import './styles/style.css';
import anna from './img/anna.png'
import ashe from './img/ashe.png'
import baptiste from './img/baptiste.png'
import bastion from './img/bastion.png'
import brigitte from './img/brigitte.png'
import cassidy from './img/cassidy.png'
import doomfist from './img/doomfist.png'
import dva from './img/dva.png'
import echo from './img/echo.png'
import genji from './img/genji.png'
import hanzo from './img/hanzo.png'
import junker from './img/junkerqueen.png'

function App() {
  return (
    <div id="container">
        <div id="header"></div>
        <div id="content-container">
            <div id="current-score" className="scores">Current Score: 3</div>
            <div id="best-score" className="scores">Best Score: 6</div>
            <div id="card-container">
                <div className="cards"><img src={anna} alt="anna"></img><span>Ana</span></div>
                <div className="cards"><img src={ashe} alt="ashe"></img><span>Ashe</span></div>
                <div className="cards"><img src={baptiste} alt="baptiste"></img><span>Baptiste</span></div>
                <div className="cards"><img src={bastion} alt="bastion"></img><span>Bastion</span></div>
                <div className="cards"><img src={brigitte} alt="brigitte"></img><span>Brigitte</span></div>
                <div className="cards"><img src={cassidy} alt="cassidy"></img><span>Cassidy</span></div>
                <div className="cards"><img src={doomfist}alt="doomfist"></img><span>Doomfist</span></div>
                <div className="cards"><img src={dva} alt="dva"></img><span>D.Va</span></div>
                <div className="cards"><img src={echo} alt="echo"></img><span>Echo</span></div>
                <div className="cards"><img src={genji} alt="genji"></img><span>Genji</span></div>
                <div className="cards"><img src={hanzo} alt="hanzo"></img><span>Hanzo</span></div>
                <div className="cards"><img src={junker} alt="junkerqueen"></img><span>Junker Queen</span></div>
            </div>
        </div>
        <div id="footer">Copyright © 2022 Waldorfio</div>
    </div>
  );
}

export default App;
