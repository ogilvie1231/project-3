import React, { Component } from 'react';
import Header from './components/Header';
import images from './images.json';


class App extends Component {
  state = {
    images
  }
  
 render() {
  return (
   <Header images= {(this.state.images[0].img)}
   />
  );
}
}
export default App;
