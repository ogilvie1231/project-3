import React from "react";

function ajax () {
    return (
    
    <div>
        <div style={{marginLeft: '18%', marginRight: '2%', padding: '1px 16px', height: '1000px'}}>
        <div className="card">
          <div className="card-header">
            <h1>Ajax</h1>
            <img src="" className="titleimg-Ajax" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Quick Links</h5>
            <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.
            </p>
            <a href="https://www.youtube.com/watch?v=tNKD0kfel6o" className="btn btn-primary" target="_blank">Getting started with AJAX</a>
            <a href="" className="btn btn-success" target="_blank">AJAX Documentation</a>
            <a href="" className="btn btn-info" target="_blank">AJAX Videos</a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Quick Links</h5>
            <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.
            </p>
            <a href="https://www.youtube.com/watch?v=tNKD0kfel6o" className="btn btn-primary" target="_blank">Getting started with AJAX</a>
            <a href="" className="btn btn-success" target="_blank">AJAX Documentation</a>
            <a href="" className="btn btn-info" target="_blank">AJAX Videos</a>
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
export default ajax;