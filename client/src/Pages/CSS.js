import React from "react";

function Css () {
     return (
      <div>
        <br></br>
        <div style={{marginLeft: '5%', marginRight: '5%', padding: '1px 16px', height: '1000px', marginTop: '5%'}}>
          <div className="content">
            <div className="card">
              <div className="card-header">
                <h1 style={{textAlign: "center"}}>CSS</h1>
                <img src="./images/csslogo.png" className="titleimg" alt="css logo"/>
              </div>
              <div className="card-body">
                <h5 className="card-title">Quick Links</h5>
                <p className="card-text">You can find more info, documents and very detailed videos in the buttons
                  below.
                </p>
                <a href className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go to CSS</a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="btn btn-success" target="_blank" rel="noopener noreferrer">CSS Documents</a>
                <a href="https://www.youtube.com/watch?v=I9XRrlOOazo&list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT" className="btn btn-info" target="_blank" rel="noopener noreferrer">CSS
                  Videos</a>
                <a href="https://www.w3schools.com/css/default.asp" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">CSS
                  W3Schools</a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="btn btn-dark" target="_blank" rel="noopener noreferrer">Moz://a</a>
              </div>
            </div>
            <br />
            <h3>Videos</h3>
            <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
              width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
            <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too
              long
              (for example if it has over 50 links inside of it).</p>
            <hr />
            <div className="container">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe width={320} height={215} src="https://www.youtube.com/embed/1Rs2ND1ryYc" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <h5 className="card-title">CSS Tutorial - Zero to Hero (Complete Course)</h5>
                    <p className="card-text">6 hrs 18 mins 37 secs</p>
                    <hr />
                    <a className="btn btn-success" href="https://www.youtube.com/watch?v=1Rs2ND1ryYc" role="button" target="_blank" rel="noopener noreferrer">More
                      videos Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe width={320} height={215} src="https://www.youtube.com/embed/qKoajPPWpmo" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <h5 className="card-title">CSS Tutorial for Beginners - 01 - Introduction to CSS</h5>
                    <p className="card-text">84 videos</p>
                    <hr />
                    <a className="btn btn-success" href="https://www.youtube.com/watch?v=qKoajPPWpmo&list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C" role="button" target="_blank" rel="noopener noreferrer">More
                      videos Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe width={320} height={215} src="https://www.youtube.com/embed/I9XRrlOOazo" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <h5 className="card-title">CSS Tutorial</h5>
                    <p className="card-text">css tutorial for Beginners - Ninjas.</p>
                    <hr />
                    <a className="btn btn-success" href="https://youtu.be/I9XRrlOOazo" role="button" target="_blank" rel="noopener noreferrer">Watch videos Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <h3>Addtional Resources</h3>
            <p>The resources below offer excersices and more videos.</p>
            <a href="https://www.codecademy.com/learn/learn-css" target="_blank" rel="noopener noreferrer">CodeCademy</a>
            <br />
            <a href="https://www.freecodecamp.org/learn/responsive-web-design/basic-css/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a>
            <br />
          </div>
        </div>
        <br />
      </div>
    );
};

export default Css;
