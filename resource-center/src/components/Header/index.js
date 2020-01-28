import React from "react";
import './style.css'

function Header (props) {
    return (
    <div className="card-header">
    <h1>HTML</h1>
    <img 
        className= "titleimg"
        src={`images/${props.images}`} 
        alt='header'>
      </img>
    </div>
    )
};

export default Header;