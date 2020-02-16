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
import Footer from "./components/Footer"

import AjaxP from "./protectedPages/Ajax";
import BootStrapP from "./protectedPages/Bootstrap";
import CSSP from "./protectedPages/CSS";
import FirebaseP from "./protectedPages/Firebase";
import GitBashP from "./protectedPages/GitBash";
import HTMLP from "./protectedPages/HTML";
import jQPgeP from "./protectedPages/jQPge";
import SQLP from "./protectedPages/Mysql";
import NodeP from "./protectedPages/Node";
import SequelizeP from "./protectedPages/Sequelize";
import TimersPgP from "./protectedPages/TimersPg";
import VscP from "./protectedPages/vsc";
import JSpgeP from "./protectedPages/JavaScript";


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
              <Route exact exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/ajax" component={Ajax} />
              <Route exact path="/bootstrap" component={BootStrap} />
              <Route exact path="/css" component={CSS} />
              <Route exact path="/firebase" component={Firebase} />
              <Route exact path="/gitbash" component={GitBash} />
              <Route exact path="/HTML" component={HTML} />
              <Route exact path="/jquery" component={jQPge} />
              <Route exact path="/javascript" component={JSpge} />
              <Route exact path="/mysql" component={SQL} />
              <Route exact path="/node" component={Node} />
              <Route exact path="/sequelize" component={Sequelize} />
              <Route exact path="/timersPg" component={TimersPg} />
              <Route exact path="/vsc" component={Vsc} />
              
              {/* <PrivateRoute exact path="/home" component={HomeP} /> */}
              <PrivateRoute exact path="/ajax=p" component={AjaxP} />
              <PrivateRoute exact path="/bootstrap=p" component={BootStrapP} />
              <PrivateRoute exact path="/css=p" component={CSSP} />
              <PrivateRoute exact path="/firebase=p" component={FirebaseP} />
              <PrivateRoute exact path="/gitbash=p" component={GitBashP} />
              <PrivateRoute exact path="/HTML=p" component={HTMLP} />
              <PrivateRoute exact path="/jquery=p" component={jQPgeP} />
              <PrivateRoute exact path="/javascript=p" component={JSpgeP} />
              <PrivateRoute exact path="/mysql=p" component={SQLP} />
              <PrivateRoute exact path="/node=p" component={NodeP} />
              <PrivateRoute exact path="/sequelize=p" component={SequelizeP} />
              <PrivateRoute exact path="/timersPg=p" component={TimersPgP} />
              <PrivateRoute exact path="/vsc=p" component={VscP} />
              <PrivateRoute exact path="/profile=p" component={Profile} />
              <PrivateRoute exact path="/post" component={Post} />
            </Switch>
            <Footer />
          </Router>
        </div>
      );
    };
  };

export default App;
