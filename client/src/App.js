import React, { Component } from "react";

import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./components/Profile";
import ajax from "./Pages/Ajax";
import Btrap from "./Pages/Btrap";
import CodingIntro from "./Pages/CodingIntro";
import CSSPge from "./Pages/CSSPge";
import Firebase from "./Pages/Firebase";
import GitBash from "./Pages/GitBash";
import IntroHTML from "./Pages/IntroHTML";
import jQPge from "./Pages/jQPge";
import JSPg from "./Pages/JSPg";
import Mysql from "./Pages/Mysql";
import Node from "./Pages/Node";
import Sequelize from "./Pages/Sequelize";
import TimersPg from "./Pages/TimersPg";
import vsc from "./Pages/vsc";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
// import Intro from './Pages/IntroHTML';


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
        <Sidebar />
        <Switch>
          <Route path="/home" component={Home} />

          <Route path="/ajax" component={ajax} />
          <Route path="/bootstrap" component={Btrap} />
          <Route path="/CodingIntro" component={CodingIntro} />
          <Route path="/CSSPge" component={CSSPge} />
          <Route path="/Firebase" component={Firebase} />
          <Route path="/GitBash" component={GitBash} />
          <Route path="/IntroHTML" component={IntroHTML} />
          <Route path="/jQuery" component={jQPge} />
          <Route path="/javascript" component={JSPg} />
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

