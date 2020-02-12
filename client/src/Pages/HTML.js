import React, { Component } from "react";
import API from "../utils/API";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class HTML extends Component {
  state = {
    htmlInfo: []
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    API.getAll("visualstudiocode")
      .then(res => {
        this.setState({
          htmlInfo: res.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });
  };

  delete = (category, id) => {
    API.deleteOne(id)
      .then(res => this.loadAll())

      .catch(err => console.log(err));
  };

  render() {
     return (
      <div>
      {/* <Sidebar/> */}
      <div style={{marginLeft: '18%', marginRight: '2%', padding: '1px 16px', height: '1000px'}}>
        <div className="content">
          <div className="card">
            <div className="card-header">
              <h1>HTML</h1>
              <img src="./images/html_logo.png" className="titleimg" alt="html logo"></img>
            </div>
            <div className="card-body">
              <h5 className="card-title">Quick Links</h5>
              <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.</p>
              <a href className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go to HTML</a>
              <a href className="btn btn-success" target="_blank" rel="noopener noreferrer">HTML Documents</a>
              <a href="https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" className="btn btn-info" target="_blank" rel="noopener noreferrer">HTML Videos</a>
              <a href="https://www.w3schools.com/html/default.asp" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">HTML
                W3Schools</a>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" className="btn btn-dark" target="_blank" rel="noopener noreferrer">Moz://a</a>
            </div>
          </div>
          <br />
          <h3>Videos</h3>
          <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
            width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
          <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too
            long (for example if it has over 50 links inside of it).</p>
          <hr />
          <div className="container">
            <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="html" width={260} height={215} src="https://www.youtube.com/embed/UB1O30fR-EE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">HTML Crash Course</h5>
                  <p className="card-text">For Absolute Beginners
                    content.</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=UB1O30fR-EE&feature=emb_title" role="button" target="_blank" rel="noopener noreferrer">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="html" width={320} height={215} src="https://www.youtube.com/embed/MW4OXdzU2Mg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">HTML and CSS</h5>
                  <p className="card-text">HTML and CSS Tutorial For Beginner.
                  </p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/playlist?list=PLS1QulWo1RIbPrLaiosApdbbTwk-xMlIa" role="button" target="_blank" rel="noopener noreferrer">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="html" width={320} height={215} src="https://www.youtube.com/embed/dD2EISBDjWM" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">HTML Tutorial</h5>
                  <p className="card-text">HTML Tutorial for Beginners.</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" role="button" target="_blank" rel="noopener noreferrer">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <br />
        {/*TRYING TO PUT HTML TEMPLATE HERE*/}
        <h3>HTML Template</h3>
        <div className="code" style={{width: '50%'}}>
          <pre><code>{/*? $str = <<<'EOD'
      <!DOCTYPE html*/}{"\n"}{"        "}{"\n"}{"        "}<title>HTML Tutorial</title>{"\n"}{"        "}{"\n"}{"      "}</code></pre>
        </div>
        <hr />
        {/*ADDITIONAL RESOURCES*/}
        <h3>Addtional Resources</h3>
        <p>The resources below offer excersices and more videos.</p>
        <a href="https://www.creativebloq.com/advice/5-of-the-best-resources-for-learning-html-and-css" target="_blank" rel="noopener noreferrer">"9
          of the best resources for learning HTML and CSS"</a>
        <br />
        <a href="https://blog.teamtreehouse.com/23-essential-html-5-resources" target="_blank" rel="noopener noreferrer">"23 Essential HTML 5
          Resources"</a>
        <br />
        <a href="https://www.youtube.com/watch?v=xE7VOZbHhFY" target="_blank" rel="noopener noreferrer">"How to Write Better HTML and CSS"</a>
      </div>
      <br />
      {this.state.htmlInfo.length ? (
            this.state.htmlInfo.map(info => (
              <Card
                key={info._id}
                className="container"
                style={{ width: "18rem", marginTop: "7rem" }}
              >
                <Card.Body>
                  <Card.Title className="container text-center">
                    <h2>{info.title}</h2>
                  </Card.Title>
                  <Card.Text>{info.summary}</Card.Text>
                  <Button className="container"
                  style={{margin: "2px"}}
                    href={info.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    variant="primary"
                  >
                    Find out more
                    </Button>

                  <Button
                  style={{margin: "2px"}}
                  className="container"
                    onClick={() =>
                      this.delete(info.category, info._id) +
                      console.log("info: ", info)
                    }
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
  );
};
}
export default HTML;