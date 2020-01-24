import React, { Component } from 'react';
import Header from './components/Header';
import images from './images.json';
import Sidebar from './components/Sidebar';
// import FireBase from './components/Pages/Firebase';
// import Html from './components/Pages/IntroHTML';
// import Intro from './components/Pages/Intro';

class App extends Component {
  state = {
    images
  }
  
 render() {
  return (
    <div>
   <Header images= {(this.state.images[0].img)}
   />
   <Sidebar />
   {/* <FireBase /> */}
   {/* <Html /> */}
  </div>
  );
}
}
export default App;
