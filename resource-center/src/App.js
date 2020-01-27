
import React, { Component, useContext } from "react";
import { Auth0Context } from "./context/auth0-context";
import Header from './components/Header';
import images from './images.json';
import Sidebar from './components/Sidebar';
// import Card from './components/Cards';
import FireBase from './Pages/Firebase';
import Html from './Pages/IntroHTML';
import Intro from './Pages/CodingIntro';
import Btrap.js from './Pages/Btrap.js';

function App() {
  const auth0 = useContext(Auth0Context);


  return (
    <div>
    <div className="container text-center">{auth0.message}</div>
    </div>
   <Header images= {(this.state.images[0].img)} />
   <Sidebar />
   {/* <Card /> */}
   <FireBase />
   <Html />
   <Intro />
   <Btrap.js />
  </div>
  );
}

export default App;
