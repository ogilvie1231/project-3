import React from "react";

function FireBase () {
     return (
    <div>
      {/* <meta charSet="UTF -8" />
      <title>FSWD-Library</title> */}
      {/*LINKS*/}
      {/*Bootstrap CSS*/}
      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      {/*MY CSS*/}
      {/* <link href="style.css" type="text/css" rel="stylesheet" /> */} 
      <ul>
        <li style={{textAlign: 'center', font: 'bolder', background: '#039be5', color: 'white', height: '50px', fontSize: '24px', paddingTop: '3px'}}>
          FullStackDev</li>
        <li><a href="intro.html">Introduction</a></li>
        <li><a href="vsc.html">Visual Studio Code</a></li>
        <li><a href="gitbash.html">GitBash</a></li>
        <li><a href="index.html">HTML</a></li>
        <li><a href="css.html">CSS</a></li>
        <li><a href="bootstrap.html">BOOTSTRAP</a></li>
        <li><a href="javascript.html">JAVASCRIPT</a></li>
        <li><a href="jQuery.html">jQuery</a></li>
        <li><a href="firebase.html">Firebase</a></li>
        <li><a href="Node.js.html">Node.js</a></li>
        <li><a href="mysql.html">MySQL</a></li>
        <li><a href="sequelize.html">Sequelize</a></li>
      </ul>
      <div style={{marginLeft: '18%', marginRight: '2%', padding: '1px 16px', height: '1000px'}}>
        <div className="content">
          <div className="card">
            <div className="card-header">
              <h1>Firebase</h1>
              <img src="assets/firebase logo 2.jpg" className="titleimg" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Quick Links</h5>
              <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.</p>
              <a href className="btn btn-primary" target="_blank">Go to Firebase</a>
              <a href className="btn btn-success" target="_blank">Firebase Documents</a>
              <a href className="btn btn-info" target="_blank">Firebase Videos</a>
            </div>
          </div>
          <br />
          <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
          <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width.
            If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
          <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long
            (for example if it has over 50 links inside of it).</p>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/jsRVHeQd5kU" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <p>Some text..</p>
        </div>
      </div>
    </div>
  );
};
  export default FireBase;