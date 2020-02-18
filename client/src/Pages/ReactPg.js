import React from "react";
import Sidebar from "../components/Sidebar";

function ReactPg () {
    return (
      
      <div>
        
        <div style={{marginLeft: '18%', marginRight: '2%', padding: '1px 16px', height: '1000px'}}>
        <div className="content">
          <div className="card">
            <div className="card-header">
              <h1>React</h1>
              <img src="assets/React.png" className="titleimg" style={{width: '190px', height: '120px'}} />
            </div>
            <div className="card-body">
              <h5 className="card-title">Quick Links</h5>
              <p className="card-text">You can find more info, documents and very detailed videos in the buttons
                below.
              </p>
              <a href="https://reactjs.org/" className="btn btn-primary" target="_blank">Go to React</a>
              <a href="https://reactjs.org/docs/getting-started.html" className="btn btn-success" target="_blank">React Documents</a>
              <a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" className="btn btn-info" target="_blank">React
                Videos</a>
              <a href="https://www.w3schools.com/react/default.asp" className="btn btn-secondary" target="_blank">React
                W3Schools</a>
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
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/DLX62G4lc44" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">CSS Tutorial - Zero to Hero (Complete Course)</h5>
                  <p className="card-text">6 hrs 18 mins 37 secs</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=1Rs2ND1ryYc" role="button" target="_blank">More
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
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=qKoajPPWpmo&list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C" role="button" target="_blank">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/m_u6P5k0vP0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">CSS Tutorial</h5>
                  <p className="card-text">css tutorial for Beginners - Ninjas.</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=m_u6P5k0vP0" role="button" target="_blank">Watch videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h3>Addtional Resources</h3>
          <p>The resources below offer excersices and more videos.</p>
          <a href="https://html5hive.org/wp-content/uploads/2018/04/The-Complete-Beginners-Guide-to-React_Dyrr.pdf" target="_blank">The
            Complete Beginners To React</a>
          <br />
          <a href="https://www.freecodecamp.org/learn/responsive-web-design/basic-css/" target="_blank">freeCodeCamp</a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ReactPg;