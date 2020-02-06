import React from "react";
// import Sidebar from "../components/Sidebar";

function Header(props) {
  return (
    <div>
      {/*LINKS*/}
      {/*Bootstrap CSS*/}
      {/*MY CSS*/}
    <br></br>
      <div style={{ marginLeft: '5%', marginRight: '5%', padding: '1px 16px', height: '1000px', marginTop: '2%'}}>
        <div className="content">
          <div className="card">
            <div className="card-header" style={{textAlign: "center"}}>
              <h1 style={{textAlign: "center"}}>Visual Studio Code</h1>
              <img src="./images/VSLogo.png" className="titleimg" />
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
          <h3>What is Visual Studio Code</h3>
          <p>Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. <a href="https://en.wikipedia.org/wiki/Visual_Studio_Code">Wikipedia</a></p>

          <iframe width={560} height={315} src="https://www.youtube.com/embed/3FkWddODLno" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <hr />
        <h2>More Videos</h2>
        <div className="container">
          <div className="card" style={{ width: '23rem' }}>
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