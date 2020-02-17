import React, { Component } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import axios from "axios"
import API from "../../utils/API";

class Post extends Component {
  state = {
    title: "",
    link: "",
    category: "ajax",
    summary: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    const { title, link, category, summary } = this.state;
    const newContent = { title, link, category, summary };

    console.log("newContent: ", newContent);
    API.saveOne({
      newContent
    })
      .then(res => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

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
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.title}
              name="title"
              type="title"
              placeholder="Title"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Link</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.link}
              name="link"
              type="link"
              placeholder="link"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select category</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.category}
              name="category"
              as="select"
            >
              <option value="ajax">AJAX</option>
              <option value="bootstrap">Bootstrap</option>
              <option value="css">CSS</option>
              <option value="firebase">Firebase</option>
              <option value="gitbash">GitBash</option>
              <option value="html">HTML</option>
              <option value="javascript">Javascript</option>
              <option value="jquery">jQuery</option>
              <option value="mysql">MySQL</option>
              <option value="nodejs">Node.js</option>
              <option value="sequelize">Sequelize</option>
              <option value="mongodb">mongoDb</option>
              <option value="visualstudiocode">Visual Studio Code</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Summary</Form.Label>
            <Form.Control
              onChange={this.handleInputChange}
              value={this.state.summary}
              name="summary"
              as="textarea"
              rows="3"
            />
          </Form.Group>
          <Button
            onClick={this.handleFormSubmit}
            type=" button"
            className="btn btn-primary"
            id="button"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Post;
