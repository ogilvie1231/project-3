import React, { Component } from 'react';
import Header from './components/Header';
import images from './images.json';
import Sidebar from './components/Sidebar';
import Intro from './Pages/intro';



class App extends Component {
  state = {
    images
  }
  
 render() {
  return (
    <div>
   <Header images= {(this.state.images[0].img)}
   />
   <Sidebar/>
   <Intro />
  </div>
  );
}
}
export default App;
