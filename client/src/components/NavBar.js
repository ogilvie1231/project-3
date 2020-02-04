import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        {!isAuthenticated && (
          <span>
            <button 
            className="btn btn-primary btn-lg"
            // class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => loginWithRedirect({})}>Log in</button>
            <button
            className="btn btn-primary btn-lg"
            // class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">

              <Link className="homeBtn" to="/home">
                </Link>
                Home
            </button>
          </span>
        )}

        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

        {isAuthenticated && (
          <span>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/profile">Profile</Link>
          </span>
        )}

        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => loginWithRedirect({})}
        >
          <span class="navbar-toggler-icon">
            <Link to="/">Home</Link>
          </span>
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span class="navbar-toggler-icon">Log in</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          {/* <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul> */}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;