import React, { Component } from "react";
import API from "../utils/API";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Login from "../components/Login";
import "./pages.css";

class TimersPg extends Component {
  state = {
    timerInfo: []
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    API.getAll("momentjs")
      .then(res => {
        this.setState({
          timerInfo: res.data
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
      <div className="mainBody">
        <div>
          <div className="card">
            <div className="card-header">
              <h1>MySQL</h1>
              <img
                src="assets/mysql logo 3.jpg"
                className="titleimg"
                alt="mysql logo"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Quick Links</h5>
              <p className="card-text">
                You can find more info, documents and very detailed videos in
                the buttons below.
              </p>
              <a
                href="https://www.mysql.com/products/workbench/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to MySQL
              </a>
              <a
                href="https://www.mysql.com/products/workbench/"
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                MySQL Documents
              </a>
              <a
                href="https://www.youtube.com/watch?v=iP1wOSsKjW8&list=PLS1QulWo1RIahlYDqHWZb81qsKgEvPiHn"
                className="btn btn-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                MySQL Videos
              </a>
              <a
                href="https://www.w3schools.com/sql/default.asp"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                MySQL W3Schools
              </a>
            </div>
          </div>
          <br />
          <h3>
            Try to scroll this area, and see how the sidenav sticks to the page
          </h3>
          <p>
            Notice that this div element has a left margin of 25%. This is
            because the side navigation is set to 25% width. If you remove the
            margin, the sidenav will overlay/sit on top of this div.
          </p>
          <p>
            Also notice that we have set overflow:auto to sidenav. This will add
            a scrollbar when the sidenav is too long (for example if it has over
            50 links inside of it).
          </p>
          <iframe
            title="timers"
            width={560}
            height={315}
            src="https://www.youtube.com/embed/iP1wOSsKjW8"
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <hr />
          <div className="container">
            <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="timers"
                      width={320}
                      height={215}
                      src="https://www.youtube.com/embed/R9GYRBDqxI8"
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <hr />
                  <a
                    className="btn btn-success"
                    href="https://www.youtube.com/watch?v=R9GYRBDqxI8&list=PLsrZV8shpwjNuvhvotOuzRCQGcqscCekJ"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More videos Here
                  </a>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="timers"
                      width={320}
                      height={215}
                      src="https://www.youtube.com/embed/w-7RQ46RgxU"
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <hr />
                  <a
                    className="btn btn-success"
                    href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More videos Here
                  </a>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="timers"
                      width={320}
                      height={215}
                      src="https://www.youtube.com/embed/65a5QQ3ZR2g"
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <hr />
                  <a
                    className="btn btn-success"
                    href="https://www.youtube.com/watch?v=65a5QQ3ZR2g&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More videos Here
                  </a>
                  <br />
                  {this.state.timerInfo.length ? (
                    this.state.timerInfo.map(info => (
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
                          <Button
                            className="container"
                            style={{ margin: "2px" }}
                            href={info.link}
                            rel="noopener noreferrer"
                            target="_blank"
                            variant="primary"
                          >
                            Find out more
                          </Button>
                        </Card.Body>
                      </Card>
                    ))
                  ) : (
                    <Login />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TimersPg;
