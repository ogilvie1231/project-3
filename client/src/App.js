import React, { Component } from "react";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./Pages/Home";
import Intro from "./Pages/intro";
import ajax from "./Pages/Ajax";
import Btrap from "./Pages/Btrap";
import CodeIntro from "./Pages/CodingIntro";
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

class App extends Component {
  state = {
    title: "",
    link: "",
    catagory: "",
    summary: "",

  }
}

function Auth0() {
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
          <Route path="/intro" component={Intro} />
          <Route path="/ajax" component={ajax} />
          <Route path="/bootstrap" component={Btrap} />
          <Route path="/code-intro" component={CodeIntro} />
          <Route path="/css" component={CSSPge} />
          <Route path="/Firebase" component={Firebase} />
          <Route path="/GitBash" component={GitBash} />
          <Route path="/HTML" component={HTML} />
          <Route path="/jquery" component={jQPge} />
          <Route path="/javascript" component={JSPg} />
          <Route path="/Mysql" component={Mysql} />
          <Route path="/node" component={Node} />
          <Route path="/Sequelize" component={Sequelize} />
          <Route path="/timer" component={TimersPg} />
          <Route path="/vsc" component={vsc} />
          <PrivateRoute path="/profile" component={Profile} />
          {/* <PrivateRoute path="/post" component={Post} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

