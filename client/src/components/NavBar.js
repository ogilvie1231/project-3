import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <Navbar bg="light fixed-top" expand="lg">
          <Navbar.Brand href="">Resource Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/home">
                <Button variant="outline-success">
                  Home
                </Button>
              </Nav.Link>
              {/* <Button variant="outline-success"> */}
                <NavDropdown title="Topics" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    <li>
                      <Link to="/ajax">Ajax</Link>
                    </li>
                    <li>
                      <Link to="/vsc">Visual Studio Code</Link>
                    </li>
                    <li>
                      <Link to="/gitbash">GitBash</Link>
                    </li>
                    <li>
                      <Link to="/HTML">HTML</Link>
                    </li>
                    <li>
                      <Link to="/css">CSS</Link>
                    </li>
                    <li>
                      <Link to="/bootstrap">BOOTSTRAP</Link>
                    </li>
                    <li>
                      <Link to="/javascript">JAVASCRIPT</Link>
                    </li>
                    <li>
                      <Link to="/jquery">jQuery</Link>
                    </li>
                    {/* <li>
                      <Link to="/react">React</Link>
                    </li> */}
                    <li>
                      <Link to="/firebase">Firebase</Link>
                    </li>
                    <li>
                      <Link to="/node">Node.js</Link>
                    </li>
                    <li>
                      <Link to="/mysql">MySQL</Link>
                    </li>
                    <li>
                      <Link to="/sequelize">Sequelize</Link>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    {/* dropdown action link */}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
              {/* </Button> */}
            </Nav>
            
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            
            <Button
              style={{ marginLeft: "5px" }}
              variant="outline-success"
              onClick={() => loginWithRedirect({})}
            >
              Log in
            </Button>

          </Navbar.Collapse>
        </Navbar>
      )}

      {isAuthenticated && (
        <Navbar bg="light fixed-top" expand="lg">
          <Navbar.Brand href="">Resource Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Button style={{ marginLeft: "5px" }} variant="outline-success">
                <Link href="/home"></Link>
                Home
              </Button>
              <Button style={{ marginLeft: "5px" }} variant="outline-success">
                <NavDropdown title="Topics" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    <li>
                      <Link to="/ajax=p">Ajax</Link>
                    </li>
                    <li>
                      <Link to="/vsc=p">Visual Studio Code</Link>
                    </li>
                    <li>
                      <Link to="/gitbash=p">GitBash</Link>
                    </li>
                    <li>
                      <Link to="/HTML=p">HTML</Link>
                    </li>
                    <li>
                      <Link to="/css=p">CSS</Link>
                    </li>
                    <li>
                      <Link to="/bootstrap=p">BOOTSTRAP</Link>
                    </li>
                    <li>
                      <Link to="/javascript=p">JAVASCRIPT</Link>
                    </li>
                    <li>
                      <Link to="/jquery=p">jQuery</Link>
                    </li>
                    {/* <li>
                      <Link to="/react=p">React</Link>
                    </li> */}
                    <li>
                      <Link to="/firebase=p">Firebase</Link>
                    </li>
                    <li>
                      <Link to="/node=p">Node.js</Link>
                    </li>
                    <li>
                      <Link to="/mysql=p">MySQL</Link>
                    </li>
                    <li>
                      <Link to="/sequelize=p">Sequelize</Link>
                    </li>
                    <li>
                      <Link to="/profile=p">Profile</Link>
                    </li>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.3=p">
                  Something
                </NavDropdown.Item> */}
                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
              </Button>
            </Nav>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button
              variant="outline-success"
              style={{ marginLeft: "5px" }}
              onClick={() => logout()}
            >
              Log out
            </Button>
            <Button variant="outline-success" style={{ marginLeft: "5px" }}>
              <Link to="/post">Add New Content</Link>
            </Button>
          </Navbar.Collapse>
        </Navbar>
      )}
    </div>
  );
};

export default NavBar;

// {!isAuthenticated && (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <a className="navbar-brand" href="#">
//       Navbar
//     </a>

//     <button
//       className="btn btn-primary btn-lg"
//       // class="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarNav"
//       aria-controls="navbarNav"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//       onClick={() => loginWithRedirect({})}
//     >
//       Log in
//     </button>

//     <span>
//       <button
//         className="btn btn-primary btn-lg"
//         // class="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <Link className="homeBtn" to="/home">
//           Home
//         </Link>
//       </button>
//     </span>

//     {/* <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item active">
//           <a className="nav-link" href="#">
//             Home <span className="sr-only">(current)</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Features
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Pricing
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#">
//             Disabled
//           </a>
//         </li>
//       </ul>
//     </div> */}
//   </nav>
// )}
// {isAuthenticated && (
//   <span>
//     <Link to="/">Home</Link>&nbsp;
//     <Link to="/profile">Profile</Link>
//     <button onClick={() => logout()}>Log out</button>
//   </span>
// )}
