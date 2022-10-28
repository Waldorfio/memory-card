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
            <div className="cards" onClick={() => props.handleClick('anna')}><img src={anna} alt="anna"></img><span>Ana</span></div>
            <div className="cards" onClick={() => props.handleClick('ashe')}><img src={ashe} alt="ashe"></img><span>Ashe</span></div>
            <div className="cards" onClick={() => props.handleClick('baptiste')}><img src={baptiste} alt="baptiste"></img><span>Baptiste</span></div>
            <div className="cards" onClick={() => props.handleClick('bastion')}><img src={bastion} alt="bastion"></img><span>Bastion</span></div>
            <div className="cards" onClick={() => props.handleClick('brigitte')}><img src={brigitte} alt="brigitte"></img><span>Brigitte</span></div>
            <div className="cards" onClick={() => props.handleClick('cassidy')}><img src={cassidy} alt="cassidy"></img><span>Cassidy</span></div>
            <div className="cards" onClick={() => props.handleClick('doomfist')}><img src={doomfist} alt="doomfist"></img><span>Doomfist</span></div>
            <div className="cards" onClick={() => props.handleClick('dva')}><img src={dva} alt="dva"></img><span>D.Va</span></div>
            <div className="cards" onClick={() => props.handleClick('echo')}><img src={echo} alt="echo"></img><span>Echo</span></div>
            <div className="cards" onClick={() => props.handleClick('genji')}><img src={genji} alt="genji"></img><span>Genji</span></div>
            <div className="cards" onClick={() => props.handleClick('hanzo')}><img src={hanzo} alt="hanzo"></img><span>Hanzo</span></div>
            <div className="cards" onClick={() => props.handleClick('junkerqueen')}><img src={junker} alt="junkerqueen"></img><span>Junker Queen</span></div>
        </div>
    )
}

export default Cards
