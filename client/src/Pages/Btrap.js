import React from "react";

function Btrap () {
     return (
        

<div>
<div style={{marginLeft: '18%', marginRight: '2%', padding: '1px 16px', height: '1000px'}}>
        <div className="card">
          <div className="card-header">
            <h1>Ajax</h1>
            <img src="assets/sequelize logo.svg" className="titleimg" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Quick Links</h5>
            <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.
            </p>
            <a href="https://sequelize.org/master/" className="btn btn-primary" target="_blank">Go to Sequelize</a>
            <a href className="btn btn-success" target="_blank">Sequelize Documents</a>
            <a href className="btn btn-info" target="_blank">Sequelize Videos</a>
          </div>
        </div>
        <br />
<h1>Bootstrap</h1>
        <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
        <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
          width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
        <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long
          (for example if it has over 50 links inside of it).</p>
        <iframe width={560} height={315} src="https://www.youtube.com/embed/ZfRn9VJzdGA" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <br />
        <hr />
        <br />
        <h3>Videos</h3>
        <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
          width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
        <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too
          long (for example if it has over 50 links inside of it).</p>
        <br />
        <div className="container">
          <div className="card-deck">
            <div className="card">
              <div className="card-body">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width={320} height={215} src="https://www.youtube.com/embed/9cKsq14Kfsw" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <h5 className="card-title">Bootstrap Website</h5>
                <p className="card-text">Responsive Bootstrap Website Start To Finish with Bootstrap 4, HTML5 &amp;
                  CSS3.</p>
                <hr />
                <a className="btn btn-success" href="https://youtu.be/9cKsq14Kfsw" role="button" target="_blank">Watch video Here</a>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width={320} height={215} src="https://www.youtube.com/embed/QAgrHLtG1Yk" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <h5 className="card-title">Bootstrap Tutorial</h5>
                <p className="card-text">Bootstrap 4 Tutorial #1.
                </p>
                <hr />
                <a className="btn btn-success" href="https://www.youtube.com/watch?v=QAgrHLtG1Yk&list=PL4cUxeGkcC9jE_cGvLLC60C_PeF_24pvv" role="button" target="_blank">Watch Video Here</a>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width={320} height={215} src="https://www.youtube.com/embed/tLANGA8f6qI" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <h5 className="card-title">Free Template Examples</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional
                  content.</p>
                <hr />
                <a className="btn btn-success" href="https://www.youtube.com/watch?v=tLANGA8f6qI" role="button" target="_blank">Watch Video Here</a>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="additional">
          <h3>More Videos</h3>
          <p>Build A Responsive Bootstrap Website A Full Screen Image Slider using Bootstrap 4, HTML5 &amp; CSS3</p><a href="https://www.youtube.com/watch?v=Thw33qJ5DXo">Watch Here</a>
        </div>
      </div>
      </div>
    );
};

export default Btrap;