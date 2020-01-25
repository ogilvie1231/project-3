import React from "react";
import './style.css'

function card (props) {
    return (
    <div className="card">
    <h1></h1>
    <img 
        className= ''
        src={`images/${props.images}`} 
        alt='card'>
      </img>
    </div>
    )
};

export default card;