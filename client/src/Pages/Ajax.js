import React from "react";


function AJAX () {
    return (
    
    <div>
     <br></br>
        <div style={{marginLeft: '5%', marginRight: '5%', padding: '1px 16px', height: '1000px', marginTop: '5%'}}>
        <div className="card">
          <div className="card-header">
            <h1 className="AJAXhead" style={{textAlign: "center"}}>AJAX</h1>
            <img src="./images/ajax.png" className="titleimg-AJAX" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Quick Links</h5>
            <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.
            </p>
            <a href="https://www.tutorialspoint.com/ajax/index.htm" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Getting started with AJAX</a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX" className="btn btn-success" target="_blank" rel="noopener noreferrer">AJAX Documentation</a>
            <a href="https://www.w3schools.com/xml/ajax_intro.asp" className="btn btn-info" target="_blank" rel="noopener noreferrer">AJAX W3 Schools</a>
          </div>
        </div>
        <br />
        <h3>What is AJAX</h3>
        <p>AJAX (also AJAX /ˈeɪdʒæks/; short for "Asynchronous JavaScript + XML")[1][2] is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. </p>
        <p>With AJAX, web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, AJAX allows web pages and, by extension, web applications, to change content dynamically without the need to reload the entire page.[3] In practice, modern implementations commonly utilize JSON instead of XML.<a href="en.wikipedia.org/wiki/AJAX_(programming)">Wikepedia</a></p>
        <iframe style={{textAlign: 'center'}} width={560} height={315} src="https://www.youtube.com/embed/tp3Gw-oWs2k" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <br />

        <br />
            <h2>Additional Resources</h2>
            
              <a href="https://www.webfx.com/blog/web-design/ajax_techniques/" target="_blank" rel="noopener noreferrer">25 Excellent Ajax Techniques and Examples</a>
             
              <br />
              
              <a href="https://www.smashingmagazine.com/2009/03/70-new-useful-ajax-and-javascript-techniques/" target="_blank" rel="noopener noreferrer" >70 New, Useful AJAX And JavaScript Techniques</a>
              
              <br />
              
              <a href="https://www.queness.com/post/1365/essential-tips-and-tricks-for-coding-and-debugging-ajax-based-website" target="_blank" rel="noopener noreferrer">ESSENTIAL TIPS AND TRICKS FOR CODING AND DEBUGGING AJAX BASED WEBSITE</a>
             
              <br />
            
              <a href="citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.172.9360&rep=rep1&type=pdf" target="_blank" rel="noopener noreferrer">Professional Ajax</a>
              <br />           
              <a href="https://www.tutorialspoint.com/ajax/index.htm" target="_blank" rel="noopener noreferrer">Ajax Tutorial</a>
         
         
      </div>
    </div>
  );
};
export default AJAX;