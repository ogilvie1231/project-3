import React from "react";



function GitBash (props) {
     return (
      <div>

       <br></br>
        <div style={{marginLeft: '5%', marginRight: '5%', padding: '1px 16px', height: '1000px', marginTop: '5%'}}>
          <div className="content">
            <div className="card border border-white">
              <div className="card-header">
                <h1>Git Bash</h1>
                <img src="./images/gitLogo.png" className="titleimg" alt="git logo"/>
              </div>
              <div className="card-body">
                <h5 className="card-title">Quick Links</h5>
                <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.</p>
                <a href="https://gitforwindows.org/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go to Git Bash</a>
                <a href="https://github.com/git-for-windows/git/tree/master/Documentation" className="btn btn-success" target="_blank" rel="noopener noreferrer">Git Bash Documents</a>
                <a href="https://www.youtube.com/playlist?list=PL6gx4Cwl9DGAKWClAD_iKpNC0bGHxGhcx" className="btn btn-info" target="_blank" rel="noopener noreferrer">Git Bash Videos</a>
              </div>
            </div>
            <br />
            <h3>What is GitBash</h3>
            <p>" Git for Windows focuses on offering a lightweight, native set of tools that bring the full feature set of the Git SCM to Windows while providing appropriate user interfaces for experienced Git users and novices alike.<a href="https://gitforwindows.org/">Git for Windows</a></p>
            
            <iframe title="git" width={560} height={315} src="https://www.youtube.com/embed/cEGIFZDyszA" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <hr />
            <div className="container">
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe title="git"width={320} height={215} src="https://www.youtube.com/embed/SWYqp7iY_Tc" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <h5 className="card-title">GitBash Tricks</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional
                      content.</p>
                    <hr />
                    <a className="btn btn-success" href="https://www.youtube.com/watch?v=SWYqp7iY_Tc&t=1154s" role="button" target="_blank" rel="noopener noreferrer">Watch Video Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe title="git"width={320} height={215} src="https://www.youtube.com/embed/xuB1Id2Wxak" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <h5 className="card-title">Git &amp; GitHub</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional
                      content.
                    </p>
                    <hr />
                    <a className="btn btn-success" href="https://youtu.be/xuB1Id2Wxak" role="button" target="_blank" rel="noopener noreferrer">Watch Video
                      Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe title="git"width={320} height={215} src="https://www.youtube.com/embed/AzfVDEBn9hw" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <h5 className="card-title">Git Commands</h5>
                    <p className="card-text">Git Commands with examples.</p>
                    <br />
                    <hr />
                    <a className="btn btn-success" href="https://www.youtube.com/watch?v=AzfVDEBn9hw" role="button" target="_blank" rel="noopener noreferrer">Watch video Here</a>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <h2>Additional Resourches</h2>
            <a href="https://git-scm.com/doc">GitBash Documentation</a>
            <br />
            <a href="https://git-scm.com/doc/ext">GitBash Resources</a>
          </div>
        </div>
      </div>
    );
};

export default GitBash;