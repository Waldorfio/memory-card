import React from 'react'

import anna from '../img/anna.png'
import ashe from '../img/ashe.png'
import baptiste from '../img/baptiste.png'
import bastion from '../img/bastion.png'
import brigitte from '../img/brigitte.png'
import cassidy from '../img/cassidy.png'
import doomfist from '../img/doomfist.png'
import dva from '../img/dva.png'
import echo from '../img/echo.png'
import genji from '../img/genji.png'
import hanzo from '../img/hanzo.png'
import junker from '../img/junkerqueen.png'

function Cards(props) {
    return(        
        <div id="card-container">
            <div className="cards" onClick={props.handleScore}><img src={anna} alt="anna"></img><span>Ana</span></div>
            <div className="cards" onClick={props.handleScore}><img src={ashe} alt="ashe"></img><span>Ashe</span></div>
            <div className="cards" onClick={props.handleScore}><img src={baptiste} alt="baptiste"></img><span>Baptiste</span></div>
            <div className="cards" onClick={props.handleScore}><img src={bastion} alt="bastion"></img><span>Bastion</span></div>
            <div className="cards" onClick={props.handleScore}><img src={brigitte} alt="brigitte"></img><span>Brigitte</span></div>
            <div className="cards" onClick={props.handleScore}><img src={cassidy} alt="cassidy"></img><span>Cassidy</span></div>
            <div className="cards" onClick={props.handleScore}><img src={doomfist}alt="doomfist"></img><span>Doomfist</span></div>
            <div className="cards" onClick={props.handleScore}><img src={dva} alt="dva"></img><span>D.Va</span></div>
            <div className="cards" onClick={props.handleScore}><img src={echo} alt="echo"></img><span>Echo</span></div>
            <div className="cards" onClick={props.handleScore}><img src={genji} alt="genji"></img><span>Genji</span></div>
            <div className="cards" onClick={props.handleScore}><img src={hanzo} alt="hanzo"></img><span>Hanzo</span></div>
            <div className="cards" onClick={props.handleScore}><img src={junker} alt="junkerqueen"></img><span>Junker Queen</span></div>
        </div>
    )
}

export default Cards
