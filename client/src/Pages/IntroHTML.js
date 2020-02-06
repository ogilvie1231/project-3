import React from "react";
import Sidebar from "../components/Sidebar";

<<<<<<< HEAD
function Html () {
=======
function Header () {
>>>>>>> staging
     return (
      <div>
      <div style={{marginLeft: '18%', marginRight: '2%', padding: '1px 16px', height: '1000px'}}>
        <div className="content">
          <div className="card">
            <div className="card-header">
              <h1>HTML</h1>
              <img src="assets/html logo.png" className="titleimg"></img>
            </div>
            <div className="card-body">
              <h5 className="card-title">Quick Links</h5>
              <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.</p>
              <a href className="btn btn-primary" target="_blank">Go to HTML</a>
              <a href className="btn btn-success" target="_blank">HTML Documents</a>
              <a href="https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" className="btn btn-info" target="_blank">HTML Videos</a>
              <a href="https://www.w3schools.com/html/default.asp" className="btn btn-secondary" target="_blank">HTML
                W3Schools</a>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" className="btn btn-dark" target="_blank">Moz://a</a>
            </div>
          </div>
          <br />
<<<<<<< HEAD
          <h3>Videos</h3>
          <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
            width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
          <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too
            long (for example if it has over 50 links inside of it).</p>
=======
          <h3>What is HTML</h3>
          <p>Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
          <p>Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.<a href="https://en.wikipedia.org/wiki/HTML">Wikipedia</a></p>
>>>>>>> staging
          <hr />
          <div className="container">
            <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe width={260} height={215} src="https://www.youtube.com/embed/UB1O30fR-EE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">HTML Crash Course</h5>
                  <p className="card-text">For Absolute Beginners
                    content.</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=UB1O30fR-EE&feature=emb_title" role="button" target="_blank">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe width={320} height={215} src="https://www.youtube.com/embed/MW4OXdzU2Mg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">HTML and CSS</h5>
                  <p className="card-text">HTML and CSS Tutorial For Beginner.
                  </p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/playlist?list=PLS1QulWo1RIbPrLaiosApdbbTwk-xMlIa" role="button" target="_blank">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe width={320} height={215} src="https://www.youtube.com/embed/dD2EISBDjWM" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">HTML Tutorial</h5>
                  <p className="card-text">HTML Tutorial for Beginners.</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" role="button" target="_blank">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <hr />
        <br />
        {/*TRYING TO PUT HTML TEMPLATE HERE*/}
        <h3>HTML Template</h3>
        <div className="code" style={{width: '50%'}}>
          <pre><code>{/*? $str = <<<'EOD'
      <!DOCTYPE html*/}{"\n"}{"        "}{"\n"}{"        "}<title>HTML Tutorial</title>{"\n"}{"        "}{"\n"}{"      "}</code></pre>
        </div>
=======
        <br />
        
>>>>>>> staging
        <hr />
        {/*ADDITIONAL RESOURCES*/}
        <h3>Addtional Resources</h3>
        <p>The resources below offer excersices and more videos.</p>
        <a href="https://www.creativebloq.com/advice/5-of-the-best-resources-for-learning-html-and-css" target="_blank">"9
          of the best resources for learning HTML and CSS"</a>
        <br />
        <a href="https://blog.teamtreehouse.com/23-essential-html-5-resources" target="_blank">"23 Essential HTML 5
          Resources"</a>
        <br />
        <a href="https://www.youtube.com/watch?v=xE7VOZbHhFY" target="_blank">"How to Write Better HTML and CSS"</a>
      </div></div>
  );
};

<<<<<<< HEAD
export default Html;
=======
export default Header;
>>>>>>> staging
