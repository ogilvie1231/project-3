import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      )}

      {!isAuthenticated && (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
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
