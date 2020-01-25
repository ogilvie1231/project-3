import React from "react";
import './style.css'

function Card (props) {
    return (
    <div className="card">
    <h1></h1>
    <img 
        className= 'card'
        src={`images/${props.images}`} 
        alt='card'>
      </img>
    </div>
    )
};

export default Card;