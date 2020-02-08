import React, { Component } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Post extends Component {
  state = {
    title: "",
    link: "",
    catagory: "",
    summary: "",
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }
  handleFormSubmit = event => {
    event.preventDefault()
    axios.post("/api/:id", {
      Title: this.state.title,
      Link: this.state.link,
      Catagory: this.state.catagory,
      Summary: this.state.summary
    }).then((res) => {
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    });


  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4" id="header">
              Add New Content Here!
          </h1>
          </div>
        </div>
        <Form className="container" style={{ maxWidth: "25rem" }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label >Title</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.title}
              name="title"
              type="title"
              placeholder="Title" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Link</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.link}
              name="link"
              type="link"
              placeholder="link" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select category</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.catagory}
              name="catagory"
              as="select">
              <option value="Visual Studio Code">Visual Studio Code</option>
              <option value="GitBash">GitBash</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="Bootstrap">Bootstrap</option>
              <option value="Javascript">Javascript</option>
              <option value="jQuery">jQuery</option>
              <option value="Firebase">Firebase</option>
              <option value="Node.js">Node.js</option>
              <option value="MySQL">MySQL</option>
              <option value="Sequelize">Sequelize</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Summary</Form.Label>
            <Form.Control onChange={this.handleInputChange}
              value={this.state.summary}
              name="summary"
              as="textarea" rows="3" />
          </Form.Group>
          <Button
            onClick={this.handleFormSubmit}
            type=" button"
            className="btn btn-primary"
            id="button">
            Submit
          </Button>
        </Form>
      </div>
    );
  };
}

export default Post;
