import React, { Component } from "react";
<<<<<<< HEAD:client/src/App.js
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import Header from "./components/Header";
=======
>>>>>>> origin/Database:resource-center/src/App.js
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import images from "./images.json";

import Home from "./Pages/Home";
import Intro from "./Pages/intro";
import ajax from "./Pages/Ajax";
<<<<<<< HEAD:client/src/App.js
import Btrap from "./Pages/Btrap";
import CodeIntro from "./Pages/CodingIntro";
import CSSPge from "./Pages/CSSPge";
=======
import Bootstrap from "./Pages/Bootstrap";
import CodingIntro from "./Pages/CodingIntro";
import CSS from "./Pages/CSS";
>>>>>>> origin/Database:resource-center/src/App.js
import Firebase from "./Pages/Firebase";
import GitBash from "./Pages/GitBash";
import HTML from "./Pages/HTML";
import jQuery from "./Pages/jQuery";
import JavaScript from "./Pages/JavaScript";
import Mysql from "./Pages/Mysql";
import Node from "./Pages/Node";
import Sequelize from "./Pages/Sequelize";
import Timers from "./Pages/Timers";
import vsc from "./Pages/vsc";
<<<<<<< HEAD:client/src/App.js


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
=======
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Post from "./components/Post"
>>>>>>> origin/Database:resource-center/src/App.js

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
<<<<<<< HEAD:client/src/App.js
        {/* <Header images={images[0].img} /> */}
=======
>>>>>>> origin/Database:resource-center/src/App.js
        <Sidebar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/intro" component={Intro} />
          <Route path="/ajax" component={ajax} />
<<<<<<< HEAD:client/src/App.js
          <Route path="/bootstrap" component={Btrap} />
          <Route path="/code-intro" component={CodeIntro} />
          <Route path="/css" component={CSSPge} />
          <Route path="/Firebase" component={Firebase} />
          <Route path="/GitBash" component={GitBash} />
          <Route path="/IntroHTML" component={IntroHTML} />
          <Route path="/jquery" component={jQPge} />
          <Route path="/javascript" component={JSPg} />
=======
          <Route path="/Bootstrap" component={Bootstrap} />
          <Route path="/CodingIntro" component={CodingIntro} />
          <Route path="/CSS" component={CSS} />
          <Route path="/Firebase" component={Firebase} />
          <Route path="/GitBash" component={GitBash} />
          <Route path="/HTML" component={HTML} />
          <Route path="/jQuery" component={jQuery} />
          <Route path="/JavaScript" component={JavaScript} />
>>>>>>> origin/Database:resource-center/src/App.js
          <Route path="/Mysql" component={Mysql} />
          <Route path="/node" component={Node} />
          <Route path="/Sequelize" component={Sequelize} />
<<<<<<< HEAD:client/src/App.js
          <Route path="/timer" component={TimersPg} />
=======
          <Route path="/Timers" component={Timers} />
>>>>>>> origin/Database:resource-center/src/App.js
          <Route path="/vsc" component={vsc} />
          <PrivateRoute path="/profile" component={Profile} />
          {/* <PrivateRoute path="/post" component={Post} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

