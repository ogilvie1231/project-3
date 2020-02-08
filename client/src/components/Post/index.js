import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Post = (props) => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4" id="header">
            Add New Content Here!
          </h1>
        </div>
      </div>
      {/* <form> */}
        {/*  */}
        <Form className="container" style={{ maxWidth: "25rem" }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label >Title</Form.Label>
            <Form.Control value={props.title} type="title" placeholder="Title" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Link</Form.Label>
            <Form.Control value={props.link} type="link" placeholder="link" />
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
            <Form.Control value={props.summary} as="textarea" rows="3" />
          </Form.Group>
          <Button onClick={props.HandleFormSumbit} type="submit" className="btn btn-primary" id="button">
            Submit
          </Button>
        </Form>
        {/*  */}
        {/* <div class="form-group">
          <h3>
            {" "}
            <label htmlFor="Title" id="title">
              Title
            </label>{" "}
          </h3>
          <input type="text" className="form-control" id="input"></input>
        </div>
        <div class="form-group">
          <h3>
            {" "}
            <label htmlFor="Link" id="title">
              Link
            </label>{" "}
          </h3>
          <input type="text" className="form-control" id="input"></input>
        </div>
        <h3>
          {" "}
          <label htmlFor="Link" id="title1">
            Category
          </label>{" "}
        </h3>
        <select id="category">
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
        </select>
        <div class="form-group">
          <h3>
            {" "}
            <label htmlFor="Summary" id="title1">
              Summary
            </label>{" "}
          </h3>
          <input type="text" className="form-control" id="summary"></input>
        </div>
        <div class="form-group form-check"></div> */}
      {/* </form> */}
    </div>
  );
};

export default Post;
