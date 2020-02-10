import React from "react";


function Timers (props) {
  return (
   <div>
        
          <div style={{marginLeft: '5%', marginRight: '5%', padding: '1px 16px', height: '1000px', marginTop: '5%'}}>
            <div className="card">
              <div className="card-header">
                <h1>MySQL</h1>
                <img src="assets/mysql logo 3.jpg" className="titleimg" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Quick Links</h5>
                <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.
                </p>
                <a href="https://www.mysql.com/products/workbench/" className="btn btn-primary" target="_blank">Go to
                  MySQL</a>
                <a href="https://www.mysql.com/products/workbench/" className="btn btn-success" target="_blank">MySQL
                  Documents</a>
                <a href="https://www.youtube.com/watch?v=iP1wOSsKjW8&list=PLS1QulWo1RIahlYDqHWZb81qsKgEvPiHn" className="btn btn-info" target="_blank">MySQL Videos</a>
                <a href="https://www.w3schools.com/sql/default.asp" className="btn btn-secondary" target="_blank">MySQL
                  W3Schools</a>
              </div>
            </div>
            <br />
            <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
            <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
              width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
            <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long
              (for example if it has over 50 links inside of it).</p>
            <iframe title="timers" width={560} height={315} src="https://www.youtube.com/embed/iP1wOSsKjW8" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <hr />
            <div className="container">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe title="timers" width={320} height={215} src="https://www.youtube.com/embed/R9GYRBDqxI8" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional
                      content.</p>
                    <hr />
                    <a className="btn btn-success" href="https://www.youtube.com/watch?v=R9GYRBDqxI8&list=PLsrZV8shpwjNuvhvotOuzRCQGcqscCekJ" role="button" target="_blank">More
                      videos Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe title="timers" width={320} height={215} src="https://www.youtube.com/embed/w-7RQ46RgxU" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional
                      content.
                    </p>
                    <hr />
                    <a className="btn btn-success" href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp" role="button" target="_blank">More
                      videos Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe title="timers" width={320} height={215} src="https://www.youtube.com/embed/65a5QQ3ZR2g" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional
                      content.</p>
                    <hr />
                    <a className="btn btn-success" href="https://www.youtube.com/watch?v=65a5QQ3ZR2g&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR" role="button" target="_blank">More
                      videos Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  export default Timers;
