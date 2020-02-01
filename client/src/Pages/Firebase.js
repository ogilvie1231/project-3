import React from "react";

function FireBase () {
     return (
    
    <div>
  
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
          <h3>What is Firebase</h3>
          <p>Firebase is a Backend-as-a-Service — BaaS — that started as a YC11 startup and grew up into a next-generation app-development platform on Google Cloud Platform.<a href="https://howtofirebase.com/what-is-firebase-fcb8614ba442">How To Firebase</a></p>
          <iframe width={560} height={315} src="https://www.youtube.com/embed/jsRVHeQd5kU" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </div>
    </div>
  );
};
  export default FireBase;