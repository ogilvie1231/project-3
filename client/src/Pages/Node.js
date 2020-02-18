import React, { Component } from "react";
import API from "../utils/API";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
class Node extends Component {
  state = {
    nodeInfo: []
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    API.getAll("visualstudiocode")
      .then(res => {
        this.setState({
          nodeInfo: res.data
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

  render()  {
    return (
      
      <div>
        
        <div style={{marginLeft: '5%', marginRight: '5%', padding: '1px 16px', height: '1000px', marginTop: '5%'}}>
          <div className="content">
            <div className="card">
              <div className="card-header">
                <h1>Node.js</h1>
                <img src="assets/node logo.jpg" className="titleimg" alt="node logo"/>
              </div>
              <div className="card-body">
                <h5 className="card-title">Quick Links</h5>
                <p className="card-text">You can find more info, documents and very detailed videos in the buttons
                  below.</p>
              <a href="https://nodejs.org/en/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go to Node.js</a>
              <a href="https://nodejs.org/en/docs/" className="btn btn-success" target="_blank" rel="noopener noreferrer">Node Documents</a>
              <a href="https://www.youtube.com/playlist?list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR&ref=hackr.io" className="btn btn-info" target="_blank" rel="noopener noreferrer">Node Videos</a>
              <a href="https://www.w3schools.com/nodejs/default.asp" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Node
                  W3Schools</a>
            </div>
          </div>
          <br />
          <h3>What is Node?</h3>
          <p>Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.<a href="https://en.wikipedia.org/wiki/Node.js">Wikipedia</a></p>
          <div className="container">
            <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="node" width={320} height={215} src="https://www.youtube.com/embed/fBNz5xF-Kx4?start=23" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">Node.js Crash Course</h5>
                  <p className="card-text">1:30:00 of pure Node.js Tutorial by Traversy Media. Don't forget to subscribe to thei chanel.</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=fBNz5xF-Kx4" role="button" target="_blank" rel="noopener noreferrer">More
                      videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="node" width={320} height={215} src="https://www.youtube.com/embed/w-7RQ46RgxU" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">Node JS Tutorial for Beginners</h5>
                  <p className="card-text">A series of 37 tutorial videos from The Net Ninja. Don't forget to Subcribe to their Channel.
                    </p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp" role="button" target="_blank" rel="noopener noreferrer">More
                      videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="node" width={320} height={215} src="https://www.youtube.com/embed/65a5QQ3ZR2g" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">Node.js Basics</h5>
                  <p className="card-text">A series of 18 Tutorial Videos from Academind. Don't forget to Subscribe to their channel.</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=65a5QQ3ZR2g&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR" role="button" target="_blank" rel="noopener noreferrer">More
                      videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <h5>Additional Resources</h5>
          <a href="https://riptutorial.com/Download/node-js.pdf" target="_blank">Learning Node.js (FREE)</a>
          <br />
          <a href="https://www.tutorialspoint.com/nodejs/nodejs_tutorial.pdf" target="_blank">Node.js Tutorial by TutorialsPoint</a>
          <br />
          <a href="https://docs.marklogic.com/guide/node-dev.pdf" target="_blank">Node.js Application Developer's Guide</a>
          <br />
          <br />
          {this.state.nodeInfo.length ? (
            this.state.nodeInfo.map(info => (
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
      </div>
    </div>
  );
};
}
export default Node;