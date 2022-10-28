import React from 'react'

import ana from '../img/anna.png'
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
    const char = props.char
    return(
        <div className="cards" onClick={() => props.handleClick(char)}><img src={ana} alt={char}></img><span>{char}</span></div>
    )
}

export default Cards
