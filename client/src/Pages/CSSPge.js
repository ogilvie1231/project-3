import React from "react";

function CSSPge (props) {
     return (
      <div>
                
        <div style={{marginLeft: '18%', marginRight: '2%', padding: '1px 16px', height: '1000px'}}>
          <div className="content">
            <div className="card">
              <div className="card-header">
                <h1>CSS</h1>
                <img src="./css logo.svg" className="titleimg" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Quick Links</h5>
                <p className="card-text">You can find more info, documents and very detailed videos in the buttons
                  below.
                </p>
                <a href className="btn btn-primary" target="_blank">Go to CSS</a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="btn btn-success" target="_blank">CSS Documents</a>
                <a href="https://www.youtube.com/watch?v=I9XRrlOOazo&list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT" className="btn btn-info" target="_blank">CSS
                  Videos</a>
                <a href="https://www.w3schools.com/css/default.asp" className="btn btn-secondary" target="_blank">CSS
                  W3Schools</a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="btn btn-dark" target="_blank">Moz://a</a>
              </div>
            </div>
            <br />
            <h3>What is CSS</h3>
            <p>CSS stands for Cascading Style Sheets with an emphasis placed on “Style.” While HTML is used to structure a web document (defining things like headlines and paragraphs, and allowing you to embed images, video, and other media), CSS comes through and specifies your document’s style—page layouts, colors, and fonts are all determined with CSS. Think of HTML as the foundation (every house has one), and CSS as the aesthetic choices (there’s a big difference between a Victorian mansion and a mid-century modern home).<a href="https://www.w3schools.com">Skillcrush.com</a></p>
            
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
                      <iframe width={320} height={215} src="https://www.youtube.com/embed/I9XRrlOOazo" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <h5 className="card-title">CSS Tutorial</h5>
                    <p className="card-text">css tutorial for Beginners - Ninjas.</p>
                    <hr />
                    <a className="btn btn-success" href="https://youtu.be/I9XRrlOOazo" role="button" target="_blank">Watch videos Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <h3>Addtional Resources</h3>
            <p>The resources below offer excersices and more videos.</p>
            <a href="https://www.codecademy.com/learn/learn-css" target="_blank">CodeCademy</a>
            <br />
            <a href="https://www.freecodecamp.org/learn/responsive-web-design/basic-css/" target="_blank">freeCodeCamp</a>
            <br />
            <a href="https://skillcrush.com/2012/04/03/css/" target="_blank">Skillcrush.com</a>
            <br />
          </div>
        </div>
        <br />
      </div>
    );
};

export default CSSPge;
