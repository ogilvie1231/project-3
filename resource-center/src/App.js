import React, { Component } from 'react';
import Header from './components/Header';
import images from './images.json';
import Sidebar from './components/Sidebar';
// import Card from './components/Cards';
import FireBase from './Pages/Firebase';
import Html from './Pages/IntroHTML';
import Intro from './Pages/CodingIntro';
import Btrap.js from './Pages/Btrap.js';

class App extends Component {
  state = {
    images
  }
  
 render() {
  return (
    <div>
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
}
export default App;
