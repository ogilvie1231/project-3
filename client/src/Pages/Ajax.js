import React from "react";

function ajax () {
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
        <h3>What is Ajax</h3>
        <p>Ajax (also AJAX /ˈeɪdʒæks/; short for "Asynchronous JavaScript + XML")[1][2] is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. </p>
        <p>With Ajax, web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows web pages and, by extension, web applications, to change content dynamically without the need to reload the entire page.[3] In practice, modern implementations commonly utilize JSON instead of XML.<a href="en.wikipedia.org/wiki/Ajax_(programming)">Wikepedia</a></p>
        <iframe width={560} height={315} src="https://www.youtube.com/embed/qsDvJrGMSUY" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <p>Some text..</p>
      </div>
    </div>
  );
};
export default ajax;