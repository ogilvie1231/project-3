import React from 'react';
import './style.css';
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";

const Sidebar =() => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
      <div>
      {!isAuthenticated && (
        <span>
        <ul>
        <li
          className= "sidebar">
          FullStackDev</li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/intro">Introduction</Link></li>
        <li><Link to="/ajax">AJAX</Link></li>
        <li><Link to="/bootstrap">BOOTSTRAP</Link></li>
        <li><Link to="/code-intro">Intro to Code</Link></li>
        <li><Link to="/css">CSS</Link></li>
        <li><Link to="/firebase">Firebase</Link></li>
        <li><Link to="/gitbash">GitBash</Link></li>
        <li><Link to="/IntroHTML">HTML</Link></li>
        <li><Link to="/jquery">jQuery</Link></li>
        <li><Link to="/javascript">JAVASCRIPT</Link></li>
        <li><Link to="/mysql">MySQL</Link></li>
        <li><Link to="/node">Node.js</Link></li>
        <li><Link to="/sequelize">Sequelize</Link></li>
        <li><Link to="/timer">Moment js</Link></li>
        <li><Link to="/vsc">Visual Studio Code</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul> 
      </span>
    )}

{isAuthenticated && <button onClick={() => logout()}>Log out</button>}

{isAuthenticated && (
      <span>
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
      <li><a href="/post">Add New Content</a></li>
    </ul> 
    </span>
    )}
    </div>
    )
};

export default Sidebar;

