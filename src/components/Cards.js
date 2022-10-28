import React from 'react'

function Cards(props) {
    const char = props.char
    return(
        <div className="cards" onClick={() => props.handleClick(char)}>
            <img src={require('../img/'+char+'.png')} alt={char}></img>
            <span>{char}</span>
        </div>
    )
}

export default Cards
