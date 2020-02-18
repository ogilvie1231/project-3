import React, { Component } from "react";
import API from "../utils/API";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Login from "../components/Login";
import "./pages.css";


class Ajax extends Component {
  
  state = {
    ajaxInfo: []
    
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    API.getAll("ajax")
      .then(res => {
        this.setState({
          ajaxInfo: res.data
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
              <h1 className="AJAXhead" style={{ textAlign: "center" }}>
                AJAX
              </h1>
              <img
                src="./images/ajax.png"
                className="titleimg-AJAX"
                alt="ajax logo"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Quick Links</h5>
              <p className="card-text">
                You can find more info, documents and very detailed videos in
                the buttons below.
              </p>
              <a
                href="https://www.youtube.com/watch?v=tNKD0kfel6o"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Getting started with AJAX
              </a>
              <a
                href="https://api.jquery.com/jquery.ajax/"
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                AJAX Documentation
              </a>
              <a
                href="https://teamtreehouse.com/library/ajax-basics-2"
                className="btn btn-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                AJAX Videos
              </a>
            </div>
          </div>
          <br />
          <h3>What is AJAX</h3>
          <p>
            AJAX (also AJAX /ˈeɪdʒæks/; short for "Asynchronous JavaScript +
            XML")[1][2] is a set of web development techniques using many web
            technologies on the client side to create asynchronous web
            applications.{" "}
          </p>
          <p>
            With AJAX, web applications can send and retrieve data from a server
            asynchronously (in the background) without interfering with the
            display and behavior of the existing page. By decoupling the data
            interchange layer from the presentation layer, AJAX allows web pages
            and, by extension, web applications, to change content dynamically
            without the need to reload the entire page.[3] In practice, modern
            implementations commonly utilize JSON instead of XML.
            <a href="en.wikipedia.org/wiki/AJAX_(programming)">Wikepedia</a>
          </p>
          <iframe
            title="ajax"
            width={560}
            height={315}
            src="https://www.youtube.com/embed/qsDvJrGMSUY"
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <br />
          <h2>Additional Resourches</h2>
          <a
            href="https://api.jquery.com/jquery.ajax/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AJAX Documentation
          </a>
          <br />
          {this.state.ajaxInfo.length ? (
            this.state.ajaxInfo.map(info => (
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

                  {/* <Button
                  style={{margin: "2px"}}
                  className="container"
                    onClick={() =>
                      this.delete(info.category, info._id) +
                      console.log("info: ", info)
                    }
                  >
                    Delete
                  </Button> */}
                </Card.Body>
              </Card>
            ))
          ) : (
            <Login />
          )}
        </div>
      </div>
    );
  }
}
export default Ajax;
