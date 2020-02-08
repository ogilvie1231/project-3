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
    console.log(value);
    console.log(name);
    this.setState({
      [name]: value
    });
  }
  handleFormSumbit = event => {
    event.preventDefault()
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
            id="title"
            type="title" 
            placeholder="Title" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Link</Form.Label>
            <Form.Control 
            value={this.state.link} 
            type="link" 
            placeholder="link" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select category</Form.Label>
            <Form.Control as="select">
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
            <Form.Control value={this.state.summary} as="textarea" rows="3" />
          </Form.Group>
          <Button 
          onClick={this.handleFormSubmit} 
          type="submit" 
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
