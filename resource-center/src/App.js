import React, { Component } from 'react';
import Header from './components/Header';
import images from './images.json';
import Sidebar from './components/Sidebar';
import Intro from './Pages/intro';
import Btrap from './Pages/Btrap';
import CSSPge from './Pages/CSSPge';
import GitBash from './Pages/GitBash';
import jQPge from './Pages/jQPge';
import TimersPg from './Pages/TimersPg';
import vsc from './Pages/vsc';



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
