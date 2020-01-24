import React from "react";

function Intro () {
    return (
        <div>
        {/* <meta charSet="UTF -8" />
        <title>FSWD-Library</title>
        {/*LINKS*/}
        {/*Bootstrap CSS*/}
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        {/*MY CSS*/}
        {/* <link href="style.css" type="text/css" rel="stylesheet" /> */} */} */}
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
          <div className="container">
            <div className="content">
              <h1 style={{textAlign: 'center'}}>Full Stack Web Developer</h1>
              <hr />
              <br />
              <h2>Introduction</h2>
              <br />
              <p>FullStackDev is a website that contains all my favorite resources to study Web Development.
                FullStackDev will help you find helpfull resources in a much faster way than just
                simply Googleling for answers. All the resources found in this site are free. The videos
                belong to their creators and I give all the credits to them.</p>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="card-deck">
              <div className="card">
                <img src="assets/VSLogo.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Visual Studio Code</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <a href="vsc.html" className="btn btn-primary">View More</a>
                </div>
              </div>
              <div className="card">
                <img src="assets/git logo.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Git Bash</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional
                    content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <a href="gitbash.html" className="btn btn-primary">View More</a>
                </div>
              </div>
              <div className="card">
                <img src="assets/html logo.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">HTML</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to show that equal
                    height action.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <a href="index.html" className="btn btn-primary">View More</a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="card-deck">
              <div className="card">
                <img src="assets/css logo.svg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">CSS</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <a href="css.html" className="btn btn-primary">View More</a>
                </div>
              </div>
              <div className="card">
                <img src="assets/bootstrap-logo.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Bootstrap</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional
                    content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <a href="bootstrap.html" className="btn btn-primary">View More</a>
                </div>
              </div>
              <div className="card">
                <img src="assets/jslogo.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">JavaScript</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to show that equal
                    height action.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <a href="javascript.html" className="btn btn-primary">View More</a>
                </div>
              </div>
            </div>
            <hr />
            <div className="container">
              <div className="card-deck">
                <div className="card">
                  <img src="assets/jquery logo.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">jQuery</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                      to
                      additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <a href="jQuery.html" className="btn btn-primary">View More</a>
                  </div>
                </div>
                <div className="card">
                  <img src="assets/firebase logo.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Firebase</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional
                      content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <a href="firebase.html" className="btn btn-primary">View More</a>
                  </div>
                </div>
                <div className="card">
                  <img src="assets/node logo.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Node.js</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to show that equal
                      height action.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <a href="Node.js.html" className="btn btn-primary">View More</a>
                  </div>
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="card-deck">
                  <div className="card">
                    <img src="assets/mysql logo.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">mySQL</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                        lead-in
                        to
                        additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                      <a href="jQuery.html" className="btn btn-primary">View More</a>
                    </div>
                  </div>
                  <div className="card">
                    <img src="assets/sequelize logo.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Sequelize</h5>
                      <p className="card-text">This card has supporting text below as a natural lead-in to
                        additional
                        content.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                      <a href="sequelize.html" className="btn btn-primary">View More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div></div></div></div>
    );
};

export default Intro;
