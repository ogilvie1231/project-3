// import Intro from "./Pages/intro";
// import Sidebar from "./components/Sidebar";
// import CodingIntro from "./Pages/CodingIntro";
// import JSpge from "./Pages/JSpge";
// import Intro from './Pages/IntroHTML';
import React, { Component } from "react";
// import { InstantSearch } from 'react-instantsearch-dom';
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./components/Profile";
import ajax from "./Pages/Ajax";
import Boot from "./Pages/Bootstrap";
import Css from "./Pages/CSS";
import Firebase from "./Pages/Firebase";
import GitBash from "./Pages/GitBash";
import IntroHTML from "./Pages/IntroHTML";
import jQPge from "./Pages/jQPge";
import Mysql from "./Pages/Mysql";
import Node from "./Pages/Node";
import Sequelize from "./Pages/Sequelize";
import TimersPg from "./Pages/TimersPg";
import vsc from "./Pages/vsc";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import JSpge from "./Pages/JavaScript";
// import RouterSearch from "./Pages/RouterSearch";


// class App extends Component {
//   state = {
//     images
//   };

//   render() {
//     return (
//       <div>
//         <Header images={this.state.images[0].img} />
//         <Sidebar />
//         {/* <Intro /> */}
//       </div>
//     );
//   }
// }
// export default App;

function App() {
  const { loading } = useAuth0();

  if (loading) { 
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
          
        </header>
        {/* <Header images={images[0].img} /> */}
        {/* <Sidebar /> */}
        
        <Switch>
          <Route path="/home" component={Home} />
          {/* <Route path="/intro" component={Intro} /> */}
          <Route path="/ajax" component={ajax} />
          <Route path="/BootStrap" component={Boot} />
          {/* <Route path="/CodingIntro" component={CodingIntro} /> */}
          <Route path="/Css" component={Css} />
          <Route path="/JavaScript" component={JSpge} />
          <Route path="/Firebase" component={Firebase} />
          <Route path="/GitBash" component={GitBash} />
          <Route path="/IntroHTML" component={IntroHTML} />
          <Route path="/jQPge" component={jQPge} />
          <Route path="/Mysql" component={Mysql} />
          <Route path="/Node" component={Node} />
          <Route path="/Sequelize" component={Sequelize} />
          <Route path="/TimersPg" component={TimersPg} />
          <Route path="/vsc" component={vsc} />
          
          <PrivateRoute path="/profile" component={Profile} />
          {/* <PrivateRoute path="/post" component={Post} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

