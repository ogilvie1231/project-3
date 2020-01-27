import React from 'react';
import './style.css';

function Sidebar(props) {
    return (
    <ul>
    <li
      className= "sidebar">
      FullStackDev</li>
    <li><a href="/intro">Introduction</a></li>
    <li><a href="/vsc">Visual Studio Code</a></li>
    <li><a href="/gitbash">GitBash</a></li>
    <li><a href="/IntroHTML">HTML</a></li>
    <li><a href="/css">CSS</a></li>
    <li><a href="/bootstrap">BOOTSTRAP</a></li>
    <li><a href="/javascript">JAVASCRIPT</a></li>
    <li><a href="/jQuery">jQuery</a></li>
    <li><a href="/firebase">Firebase</a></li>
    <li><a href="/Node.js">Node.js</a></li>
    <li><a href="/mysql">MySQL</a></li>
    <li><a href="/sequelize">Sequelize</a></li>
    <li><a href="/profile">Profile</a></li>
  </ul> 
    )
};

export default Sidebar;