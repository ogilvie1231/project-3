import React from "react";

function jQPge () {
     return (
      <div>

      
        <div style={{marginLeft: '5%', marginRight: '5%', padding: '1px 16px', height: '1000px', marginTop: '5%'}}>
          <div className="content">
            <div className="card">
              <div className="card-header">
                <h1>jQuery</h1>
                <img src="./images/jquerylogo.jpg" className="titleimg" alt="jquery logo"/>
              </div>
              <div className="card-body">
                <h5 className="card-title">Quick Links</h5>
                <p className="card-text">You can find more info, documents and very detailed videos in the buttons
                  below.</p>
                <a href className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go to jQuery</a>
                <a href className="btn btn-success" target="_blank" rel="noopener noreferrer">jQuery Documents</a>
                <a href className="btn btn-info" target="_blank" rel="noopener noreferrer">jQuery Videos</a>
                <a href="https://www.w3schools.com/jquery/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">jQuery
                  W3Schools</a>
              </div>
            </div>
            <br />
            <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
            <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
              width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
            <p>.</p>
            <iframe title="jquery"width={560} height={315} src="https://www.youtube.com/embed/BWXggB-T1jQ" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <hr />
            <div className="container">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe title="jquery"width={320} height={215} src="https://www.youtube.com/embed/R9GYRBDqxI8" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <br />
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional
                      content.</p>
                    <hr />
                    <a className="btn btn-success" href="https://www.youtube.com/watch?v=R9GYRBDqxI8&list=PLsrZV8shpwjNuvhvotOuzRCQGcqscCekJ" role="button" target="_blank" rel="noopener noreferrer">More
                      videos Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe title="jquery"width={320} height={215} src="https://www.youtube.com/embed/w-7RQ46RgxU" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <br />
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional
                      content.
                    </p>
                    <hr />
                    <a className="btn btn-success" href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp" role="button" target="_blank" rel="noopener noreferrer">More
                      videos Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe title="jquery"width={320} height={215} src="https://www.youtube.com/embed/65a5QQ3ZR2g" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <br />
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional
                      content.</p>
                    <hr />
                    <a className="btn btn-success" href="https://www.youtube.com/watch?v=65a5QQ3ZR2g&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR" role="button" target="_blank" rel="noopener noreferrer">More
                      videos Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <h3>Addtional Resources</h3>
            <p>The resources below offer excersices and more videos.</p>
            <a href="https://css-tricks.com/lodge/learn-jquery/" target="_blank" rel="noopener noreferrer">Learn JQuery from scratch</a>
            <br />
          </div>
        </div>
      </div>
    );
};

export default jQPge;