import React from "react";

function Sequel () {
    return (
    
    <div>
<<<<<<< HEAD
      <ul>
      <li
        className= "sidebar">
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
=======
      
>>>>>>> 527ae9620915d2c6c94a432440b7206860f57dd0
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
