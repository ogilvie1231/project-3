import React from "react";

<<<<<<< HEAD
function Node() {
  return (

    <div>
      <ul>
        <li
          className="sidebar">
          FullStackDev</li>
        <li><a href="/intro">Introduction</a></li>
        <li><a href="/vsc">Visual Studio Code</a></li>
        <li><a href="/gitbash">GitBash</a></li>
        <li><a href="/IntroHTML">HTML</a></li>
        <li><a href="/CSSPge">CSS</a></li>
        <li><a href="/bootstrap">BOOTSTRAP</a></li>
        <li><a href="/javascript">JAVASCRIPT</a></li>
        <li><a href="/jQuery">jQuery</a></li>
        <li><a href="/firebase">Firebase</a></li>
        <li><a href="/Node.js">Node.js</a></li>
        <li><a href="/mysql">MySQL</a></li>
        <li><a href="/sequelize">Sequelize</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/post">Add New Content</a></li>
      </ul>
      <div style={{ marginLeft: '18%', marginRight: '2%', padding: '1px 16px', height: '1000px' }}>
        <div className="content">
          <div className="card">
            <div className="card-header">
              <h1>Node.js</h1>
              <img src="assets/node logo.jpg" className="titleimg" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Quick Links</h5>
              <p className="card-text">You can find more info, documents and very detailed videos in the buttons
=======
function Node () {
    return (
      
      <div>
        
        <div style={{marginLeft: '18%', marginRight: '2%', padding: '1px 16px', height: '1000px'}}>
          <div className="content">
            <div className="card">
              <div className="card-header">
                <h1>Node.js</h1>
                <img src="assets/node logo.jpg" className="titleimg" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Quick Links</h5>
                <p className="card-text">You can find more info, documents and very detailed videos in the buttons
>>>>>>> 527ae9620915d2c6c94a432440b7206860f57dd0
                  below.</p>
              <a href="https://nodejs.org/en/" className="btn btn-primary" target="_blank">Go to Node.js</a>
              <a href="https://nodejs.org/en/docs/" className="btn btn-success" target="_blank">Node Documents</a>
              <a href="https://www.youtube.com/playlist?list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR&ref=hackr.io" className="btn btn-info" target="_blank">Node Videos</a>
              <a href="https://www.w3schools.com/nodejs/default.asp" className="btn btn-secondary" target="_blank">Node
                  W3Schools</a>
            </div>
          </div>
          <br />
          <h3>Videos</h3>
          <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
              width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
          <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too
              long (for example if it has over 50 links inside of it).</p>
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
          <br />
          <p>Some text..</p>
          <div className="code" style={{ width: '50%' }}>
            <code>
              hello hello hello
              </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Node;