import React, { Component } from "react";
import Header from "./components/Header";
import images from "./images.json";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import ajax from "./Pages/Ajax";
import Bootstrap from "./Pages/Bootstrap";
import CodingIntro from "./Pages/CodingIntro";
import CSS from "./Pages/CSS";
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
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Post from "./components/Post"

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
        <Header images={images[0].img} />
        <Sidebar />
        <Switch>
          <Route path="/" exact />
          <Route path="/ajax" component={ajax} />
          <Route path="/Bootstrap" component={Bootstrap} />
          <Route path="/CodingIntro" component={CodingIntro} />
          <Route path="/CSS" component={CSS} />
          <Route path="/Firebase" component={Firebase} />
          <Route path="/GitBash" component={GitBash} />
          <Route path="/HTML" component={HTML} />
          <Route path="/jQuery" component={jQuery} />
          <Route path="/JavaScript" component={JavaScript} />
          <Route path="/Mysql" component={Mysql} />
          <Route path="/Node" component={Node} />
          <Route path="/Sequelize" component={Sequelize} />
          <Route path="/Timers" component={Timers} />
          <Route path="/vsc" component={vsc} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/post" component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

