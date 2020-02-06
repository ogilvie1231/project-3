import React from "react";
import CardHeader from "../components/Header/index";

function AJAX () {
    return (
    
    <div>
      <br></br>
        <div style={{marginLeft: '5%', marginRight: '5%', padding: '1px 16px', height: '1000px', marginTop: '2%'}}>
        <div className="card">
          <div className="card-header">
            <h1 className="AJAXhead" style={{textAlign: "center"}}>AJAX</h1>
            <img src="./images/ajax.png" className="titleimg-AJAX" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Quick Links</h5>
            <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.
            </p>
            <a href="https://www.youtube.com/watch?v=tNKD0kfel6o" className="btn btn-primary" target="_blank">Getting started with AJAX</a>
            <a href="" className="btn btn-success" target="_blank">AJAX Documentation</a>
            <a href="" className="btn btn-info" target="_blank">AJAX Videos</a>
          </div>
        </div>
        <br />
        <h3>What is AJAX</h3>
        <p>AJAX (also AJAX /ˈeɪdʒæks/; short for "Asynchronous JavaScript + XML")[1][2] is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. </p>
        <p>With AJAX, web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, AJAX allows web pages and, by extension, web applications, to change content dynamically without the need to reload the entire page.[3] In practice, modern implementations commonly utilize JSON instead of XML.<a href="en.wikipedia.org/wiki/AJAX_(programming)">Wikepedia</a></p>
        <iframe width={560} height={315} src="https://www.youtube.com/embed/qsDvJrGMSUY" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <p>Some text..</p>
        <br />
            <h2>Additional Resourches</h2>
            <a href="#">AJAX Documentation</a>
            <br />
            <a href="#">AJAX Resources</a>
      </div>
    </div>
  );
};
export default AJAX;