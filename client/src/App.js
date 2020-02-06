import React, { Component } from "react";
// import Intro from "./Pages/intro";
// import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./components/Profile";
import ajax from "./Pages/Ajax";
import BootStrap from "./Pages/Bootstrap";
import Css from "./Pages/CSS";
import Firebase from "./Pages/Firebase";
import GitBash from "./Pages/GitBash";
import IntroHTML from "./Pages/IntroHTML";
import jQPge from "./Pages/jQPge";
// import JSpge from "./Pages/JSpge";
import Mysql from "./Pages/Mysql";
import Node from "./Pages/Node";
import Sequelize from "./Pages/Sequelize";
import TimersPg from "./Pages/TimersPg";
import vsc from "./Pages/vsc";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import JSpge from "./Pages/JavaScript";
import Post from "./components/Post"
// import Intro from './Pages/IntroHTML';


class App extends Component {
  state = {
    title: "",
    link: "",
    catagory: "",
    summary: "",
  };


  Auth0 = () => {
    const { loading } = useAuth0();

    if (loading) {
      return <div>Loading...</div>;
    }
  }
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <header>
            <NavBar />
          </header>
          {/* <Header images={images[0].img} /> */}
          {/* <Sidebar /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            {/* <Route path="/intro" component={Intro} /> */}
            <Route path="/ajax" component={ajax} />
            <Route path="/bootstrap" component={BootStrap} />
            <Route path="/css" component={Css} />
            <Route path="/firebase" component={Firebase} />
            <Route path="/gitbash" component={GitBash} />
            <Route path="/introHTML" component={IntroHTML} />
            <Route path="/jquery" component={jQPge} />
            {/* <Route path="/javascript" component={JSpge} /> */}
            <Route path="/mysql" component={Mysql} />
            <Route path="/node" component={Node} />
            <Route path="/sequelize" component={Sequelize} />
            <Route path="/timersPg" component={TimersPg} />
            <Route path="/vsc" component={vsc} />
            <PrivateRoute path="/profile" component={Profile} />
            {/* <PrivateRoute path="/post" component={Post} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
