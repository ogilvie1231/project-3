import React from "react";

function Sequel () {
    return (
    
    <div>
      <ul>
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
        <li><a href>Timers</a></li>
        <li><a href>Ajax</a></li>
        <li><a href="firebase.html">Firebase</a></li>
        <li><a href="Node.js.html">Node.js</a></li>
        <li><a href>js-constructors</a></li>
        <li><a href="mysql.html">MySQL</a></li>
        <li><a href>Express</a></li>
        <li><a href>Handlebars</a></li>
        <li><a href="sequelize.html">Sequelize</a></li>
        <li><a href>Mongo-Mongoose</a></li>
        <li><a href="l">React</a></li>
      </ul>
      <div style={{marginLeft: '18%', marginRight: '2%', padding: '1px 16px', height: '1000px'}}>
        <div className="card">
          <div className="card-header">
            <h1>Sequelize</h1>
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
        <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
        <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
          width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
        <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long
          (for example if it has over 50 links inside of it).</p>
        <iframe width={560} height={315} src="https://www.youtube.com/embed/qsDvJrGMSUY" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <p>Some text..</p>
      </div>
    </div>
  );
};

export default Sequel;
