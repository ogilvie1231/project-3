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
<<<<<<< HEAD
                <img src="./images/nodeLogo.jpg" className="titleimg" />
=======
                <img src="assets/node logo.jpg" className="titleimg" alt="node logo"/>
>>>>>>> alex
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
          <h3>Videos</h3>
          <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25%
              width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
          <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too
              long (for example if it has over 50 links inside of it).</p>
          <div className="container">
            <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="node" width={320} height={215} src="https://www.youtube.com/embed/R9GYRBDqxI8" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional
                      content.</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=R9GYRBDqxI8&list=PLsrZV8shpwjNuvhvotOuzRCQGcqscCekJ" role="button" target="_blank" rel="noopener noreferrer">More
                      videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="node" width={320} height={215} src="https://www.youtube.com/embed/w-7RQ46RgxU" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional
                    content.
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
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional
                      content.</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=65a5QQ3ZR2g&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR" role="button" target="_blank" rel="noopener noreferrer">More
                      videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <br />
<<<<<<< HEAD
          <p></p>
          <div className="code" style={{ width: '50%' }}>
            <code>
             
              </code>
          </div>
=======
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
>>>>>>> alex
        </div>
      </div>
    </div>
  );
};
}
export default Node;