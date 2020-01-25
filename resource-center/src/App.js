import React, { Component, useContext } from "react";
import { Auth0Context } from "./context/auth0-context";
import Header from "./components/Header";
import images from "./images.json";
import Sidebar from "./components/Sidebar";

function App() {
  const auth0 = useContext(Auth0Context);

  return (
    <div>
      <Header images={images[0].img} />
      <Sidebar />
      <div className="container text-center">{auth0.message}</div>
    </div>
  );
}

export default App;
