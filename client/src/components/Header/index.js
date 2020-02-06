import React from "react";
import './style.css'

function CardHeader (props) {
    return (
    <div className="card-header">
    <h1></h1>
    <img 
        className= "titleimg"
        src={`images/${props.images}`} 
        alt='header'
        alignItem='center' >
      
      </img>
    </div>
    )
};

export default CardHeader;