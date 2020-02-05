import React from "react";
// import Sidebar from "../components/Sidebar";

function JSpge () {
     return (
        <div>
        <div style={{marginLeft: '18%', marginRight: '2%', marginTop: '2%', padding: '1px 16px', height: '1000px'}}>
          <div className="card">
            <div className="card-header">
              <h1>Javascript</h1>
              <img src="./images/jslogo.png" className="titleimg" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Quick Links</h5>
              <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.
              </p>
              <a href="https://javascript.info/" className="btn btn-primary" target="_blank">JavaScript</a>
              <a href="https://devdocs.io/javascript/" className="btn btn-success" target="_blank">JavaScript
                Documents</a>
              <a href="https://www.youtube.com/playlist?list=PLr6-GrHUlVf96NLj3PQq-tmEB6woZjwEl" className="btn btn-info" target="_blank">JavaScript Videos</a>
              <a href="https://www.w3schools.com/js/default.asp" className="btn btn-secondary" target="_blank">Javascript
                W3Schools</a>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps" className="btn btn-dark" target="_blank">Moz://a</a>
            </div>
          </div>
          <hr />
          <h3>Videos</h3>
          <p>"JavaScript, often abbreviated as JS, is a high-level, just-in-time compiled, object-oriented programming
            language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing,
            prototype-based object-orientation, and first-class functions."-Wikipedia</p>
          <hr />
          <div className="container">
            <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe width={320} height={215} src="https://www.youtube.com/embed/W6NZfCO5SIk" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">JavaScript Tutorial for Beginners</h5>
                  <p className="card-text">Learn JavaScript in 1 Hour [2019].</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=W6NZfCO5SIk&feature=emb_title" role="button" target="_blank">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe width={320} height={215} src="https://www.youtube.com/embed/xpZLS6R91rQ" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional
                    content.
                  </p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/playlist?list=PLr6-GrHUlVf96NLj3PQq-tmEB6woZjwEl" role="button" target="_blank">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe width={320} height={215} src="https://www.youtube.com/embed/fGdd9qNwQdQ" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">Javascript Tutorial For Beginners</h5>
                  <p className="card-text">This Javascript Tutorial is designed for beginners.</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/playlist?list=PLoYCgNOIyGACnrXwo5HMCfOH9VT05znGv" role="button" target="_blank">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            <hr />
            <h3>Addtional Resources</h3>
            <p>The resources below offer excersices and more videos.</p>
            <a href="https://javascript30.com/" target="_blank">JavaScript30</a>
            <br />
            <a href="https://www.codecademy.com/learn/introduction-to-javascript/" target="_blank">JavaScript/CodeCademy</a>
            <br />
            <a href="https://doc.qt.io/qt-5/qtqml-javascript-functionlist.html" target="_blank">List of JavaScript
              Objects and Functions</a>
            <br />
            <a href="https://medium.com/@dannyhuang_75970/8-best-places-to-learn-javascript-2018-updated-free-paid-940eed6b8296" target="_blank">8 best places to learn Javascript (2018 Updated Free &amp; Paid)</a>
            <br />
            <a href="https://scrimba.com/g/gintrotojavascript" target="_blank">Introduction to JavaScript (Videos)</a>
            <hr />
            <h2>Books</h2>
            <a href="https://eloquentjavascript.net/Eloquent_JavaScript.pdf" target="_blank">Eloquent JavaScript</a>
            <div className="space" />
          </div>
        </div>
      </div>
    );
  };


export default JSpge;