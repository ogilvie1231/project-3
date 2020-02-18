import React, { Component } from "react";
import API from "../utils/API";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './pages.css'

class SequelizeP extends Component {
  state = {
    sequelizeInfo: []
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    API.getAll("sequelize")
      .then(res => {
        this.setState({
          sequelizeInfo: res.data
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
              <h1>Sequelize</h1>
              <img
                src="./images/Sequelize.png"
                className="titleimg"
                alt="sequelize logo"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Quick Links</h5>
              <p className="card-text">
                You can find more info, documents and very detailed videos in
                the buttons below.
              </p>
              <a
                href="https://sequelize.org/master/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Sequelize
              </a>
              <a
                href
                className="btn btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sequelize Documents
              </a>
              <a
                href
                className="btn btn-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sequelize Videos
              </a>
            </div>
          </div>
          <br />
          <h3>What is Sequelize?</h3>
          <p>
            Sequelize is a promise-based ORM for Node. js. Sequelize is easy to
            learn and has dozens of cool features like synchronization,
            association, validation, etc. It also has support for PostgreSQL,
            MySQL, MariaDB, SQLite, and MSSQL. I am assuming you have some form
            of SQL database service started on your machine.
          </p>

          <iframe
            title="sequelize"
            width={560}
            height={315}
            src="https://www.youtube.com/embed/qsDvJrGMSUY"
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <br />
          <div className="dbCard">
              <h3>Additional Resources</h3>
              <hr />
              {this.state.sequelizeInfo.length ? (
                this.state.sequelizeInfo.map(info => (
                  <Card
                    key={info._id}
                    className="container col-md-4"
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

                      <Button
                        style={{ margin: "2px" }}
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
                <Button>
                  <a className="addNew" href="/post">
                    Add New Content
                  </a>
                </Button>
              )}
            </div>
        </div>
      </div>
    );
  }
}
export default SequelizeP;
