import React, { Component } from "react";
import Header from "./components/Header";
import Intro from "./Pages/intro";
import images from "./images.json";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
<<<<<<< HEAD
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
=======
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import images from "./images.json";
>>>>>>> staging
import Home from "./Pages/Home";
import Profile from "./components/Profile";
import ajax from "./Pages/Ajax";
import Btrap from "./Pages/Btrap";
import CodingIntro from "./Pages/CodingIntro";
import CSSPge from "./Pages/CSSPge";
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
<<<<<<< HEAD
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
// import Intro from './Pages/IntroHTML';
=======
import Post from "./components/Post"
import 'bootstrap/dist/css/bootstrap.min.css';
import Html from './Pages/IntroHTML';

>>>>>>> staging


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
        <Sidebar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/html" component={Html} />
          <Route path="/ajax" component={ajax} />
          <Route path="/bootstrap" component={Btrap} />
          <Route path="/CodingIntro" component={CodingIntro} />
          <Route path="/CSSPge" component={CSSPge} />
          <Route path="/Firebase" component={Firebase} />
          <Route path="/GitBash" component={GitBash} />
<<<<<<< HEAD
          <Route path="/IntroHTML" component={IntroHTML} />
          <Route path="/jQPge" component={jQPge} />
          <Route path="/JSPg" component={JSPg} />
=======
          {/* <Route path="/IntroHTML" component={IntroHTML} /> */}
          <Route path="/jquery" component={jQuery} />
          <Route path="/javascript" component={JavaScript} />
>>>>>>> staging
          <Route path="/Mysql" component={Mysql} />
          <Route path="/Node" component={Node} />
          <Route path="/Sequelize" component={Sequelize} />
<<<<<<< HEAD
          <Route path="/TimersPg" component={TimersPg} />
=======
          <Route path="/timer" component={Timers} />
>>>>>>> staging
          <Route path="/vsc" component={vsc} />
          <PrivateRoute path="/profile" component={Profile} />
          {/* <PrivateRoute path="/post" component={Post} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

