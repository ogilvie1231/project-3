import React from "react";

function Header (props) {
     return (
      <div>
        {/*LINKS*/}
        {/*Bootstrap CSS*/}
        {/*MY CSS*/}
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
      </ul>
      <div style={{marginLeft: '18%', marginRight: '2%', padding: '1px 16px', height: '1000px'}}>
        <div className="content">
          <div className="card">
            <div className="card-header">
              <h1>Visual Studio Code</h1>
              <img src="assets/VSLogo.png" className="titleimg" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Quick Links</h5>
              <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.</p>
              <a href="https://code.visualstudio.com/" className="btn btn-primary" target="_blank">Go to VSC</a>
              <a href="https://code.visualstudio.com/docs" className="btn btn-success" target="_blank">VSC Documents</a>
              <a href="https://www.youtube.com/watch?v=3FkWddODLno&list=PLGLfVvz_LVvTr9wMK6f9lTzOzSX6a6Pk-" className="btn btn-info" target="_blank">VSC Videos</a>
            </div>
          </div>
          <br />
          <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
          <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width.
            If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
          <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long
            (for example if it has over 50 links inside of it).</p>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/3FkWddODLno" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <hr />
        <h2>More Videos</h2>
        <div className="container">
          <div className="card" style={{width: '23rem'}}>
            <div className="card-body">
              <iframe width={320} height={215} src="https://www.youtube.com/embed/u21W_tfPVrY" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              <h5 className="card-title">Visual Studio Code</h5>
              <p className="card-text">Top 10 Pro Tips.</p>
              <hr />
              <a className="btn btn-success" href="https://www.youtube.com/watch?v=u21W_tfPVrY" role="button" target="_blank">Watch Video Here</a>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h2>Additional Resources</h2>
        <a href="https://www.syncfusion.com/blogs/post/10-tricks-in-visual-studio-code.aspx" target="_blank">"10 Tricks
          Every Developer Should Know in Visual Studio Code"</a>
        <br />
        <a href="https://code.visualstudio.com/docs/getstarted/tips-and-tricks" target="_blanck">"Visual Studio Code Tips
          and Tricks"</a>
        <br />
        <br />
      </div></div>
  );
  
};  
export default Header;