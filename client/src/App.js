import React, { Component } from "react";
<<<<<<< HEAD
import { InstantSearch } from 'react-instantsearch-dom';
// import Intro from "./Pages/intro";
// import Sidebar from "./components/Sidebar";
=======
>>>>>>> alex
import NavBar from "./components/NavBar";
// import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./components/Profile";
<<<<<<< HEAD
import ajax from "./Pages/Ajax";
import Boot from "./Pages/Bootstrap";
// import CodingIntro from "./Pages/CodingIntro";
import Css from "./Pages/CSS";
=======
import Ajax from "./Pages/Ajax";
import BootStrap from "./Pages/Bootstrap";
import CSS from "./Pages/CSS";
>>>>>>> alex
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
<<<<<<< HEAD
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
=======
import Post from "./components/Post"

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
              <PrivateRoute path="/profile" component={Profile} />
              <Route path="/post" component={Post} />
            </Switch>
          </Router>
        </div>
      );
    };
  };
>>>>>>> alex

export default App;

