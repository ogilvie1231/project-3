import React from "react";

function Timers (props) {
  return (
   <div>
          {/* <ul>
            <li style={{textAlign: 'center', font: 'bolder', background: '#039be5', color: 'white', height: '50px', fontSize: '24px', paddingTop: '3px'}}>
              FullStackDev</li>
            <li><a href="intro.html">Introduction</a></li>
            <li><a href="vsc.html">Visual Studio Code</a></li>
            <li><a href="gitbash.html">GitBash</a></li>
            <li><a href="index.html">HTML</a></li>
            <li><a href="css.html">CSS</a></li>
            <li><a href="bootstrap.html">Bootstrap</a></li>
            <li><a href="javascript.html">Javascript</a></li>
            <li><a href="jQuery.html">jQuery</a></li>
            <li><a href="react.html">Timers</a></li>
            <li><a href="ajax.html">Ajax</a></li>
            <li><a href="firebase.html">Firebase</a></li>
            <li><a href="Node.js.html">Node.js</a></li>
            <li><a href="jsconst.html">js-constructors</a></li>
            <li><a href="mysql.html">MySQL</a></li>
            <li><a href="express.html">Express</a></li>
            <li><a href="handelbars.html">Handlebars</a></li>
            <li><a href="sequelize.html">Sequelize</a></li>
            <li><a href="Mongo.html">Mongo-Mongoose</a></li>
            <li><a href="react.html">React</a></li>
          </ul> */}
          <div style={{marginLeft: '18%', marginRight: '2%', padding: '1px 16px', height: '1000px'}}>
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
            <iframe width={560} height={315} src="https://www.youtube.com/embed/iP1wOSsKjW8" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <hr />
            <div className="container">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe width={320} height={215} src="https://www.youtube.com/embed/R9GYRBDqxI8" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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
                      <iframe width={320} height={215} src="https://www.youtube.com/embed/w-7RQ46RgxU" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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
                      <iframe width={320} height={215} src="https://www.youtube.com/embed/65a5QQ3ZR2g" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
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
