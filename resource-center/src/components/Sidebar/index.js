import React from 'react';
import './style.css';

function Sidebar(props) {
    return (
    <ul>
    <li
      className= "sidebar">
      FullStackDev</li>
    <li><a href="intro.html">Introduction</a></li>
    <li><a href="vsc.html">Visual Studio Code</a></li>
    <li><a href="gitbash.html">GitBash</a></li>
    <li><a href="index.html">HTML</a></li>
    <li><a href="css.html">CSS</a></li>
    <li><a href="bootstrap.html">BOOTSTRAP</a></li>
    <li><a href="javascript.html">JAVASCRIPT</a></li>
    <li><a href="jQuery.html">jQuery</a></li>
    <li><a href="firebase.html">Firebase</a></li>
    <li><a href="Node.js.html">Node.js</a></li>
    <li><a href="mysql.html">MySQL</a></li>
    <li><a href="sequelize.html">Sequelize</a></li>
  </ul> 
    )
}

export default Sidebar;