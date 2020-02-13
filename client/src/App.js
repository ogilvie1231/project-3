import React, { Component } from "react";
import NavBar from "./components/NavBar";
// import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./components/Profile";
import Ajax from "./Pages/Ajax";
import BootStrap from "./Pages/Bootstrap";
import CSS from "./Pages/CSS";
import Firebase from "./Pages/Firebase";
import GitBash from "./Pages/GitBash";
import HTML from "./Pages/HTML";
import jQPge from "./Pages/jQPge";
import SQL from "./Pages/Mysql";
import Node from "./Pages/Node";
import Sequelize from "./Pages/Sequelize";
import TimersPg from "./Pages/TimersPg";
import Vsc from "./Pages/vsc";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import JSpge from "./Pages/JavaScript";
import Post from "./components/Post"

import AjaxP from "./Pages/Ajax";
import BootStrapP from "./Pages/Bootstrap";
import CSSP from "./Pages/CSS";
import FirebaseP from "./Pages/Firebase";
import GitBashP from "./Pages/GitBash";
import HTMLP from "./Pages/HTML";
import jQPgeP from "./Pages/jQPge";
import SQLP from "./Pages/Mysql";
import NodeP from "./Pages/Node";
import SequelizeP from "./Pages/Sequelize";
import TimersPgP from "./Pages/TimersPg";
import VscP from "./Pages/vsc";
import JSpgeP from "./Pages/JavaScript";


class App extends Component {

  // Auth0 = () => {
  //   const { loading } = useAuth0();
  // }
    render() {
      return (
        <div className="App">
          <Router history={history}>
            <header>
              <NavBar />
            </header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/ajax" component={Ajax} />
              <Route path="/bootstrap" component={BootStrap} />
              <Route path="/css" component={CSS} />
              <Route path="/firebase" component={Firebase} />
              <Route path="/gitbash" component={GitBash} />
              <Route path="/HTML" component={HTML} />
              <Route path="/jquery" component={jQPge} />
              <Route path="/javascript" component={JSpge} />
              <Route path="/mysql" component={SQL} />
              <Route path="/node" component={Node} />
              <Route path="/sequelize" component={Sequelize} />
              <Route path="/timersPg" component={TimersPg} />
              <Route path="/vsc" component={Vsc} />
              
              {/* <PrivateRoute path="/home" component={HomeP} /> */}
              <PrivateRoute path="/ajax" component={AjaxP} />
              <PrivateRoute path="/bootstrap" component={BootStrapP} />
              <PrivateRoute path="/css" component={CSSP} />
              <PrivateRoute path="/firebase" component={FirebaseP} />
              <PrivateRoute path="/gitbash" component={GitBashP} />
              <PrivateRoute path="/HTML" component={HTMLP} />
              <PrivateRoute path="/jquery" component={jQPgeP} />
              <PrivateRoute path="/javascript" component={JSpgeP} />
              <PrivateRoute path="/mysql" component={SQLP} />
              <PrivateRoute path="/node" component={NodeP} />
              <PrivateRoute path="/sequelize" component={SequelizeP} />
              <PrivateRoute path="/timersPg" component={TimersPgP} />
              <PrivateRoute path="/vsc" component={VscP} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/post" component={Post} />
            </Switch>
          </Router>
        </div>
      );
    };
  };

export default App;
