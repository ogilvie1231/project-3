import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";


class RouterSearch extends React.Component {
    state = {
        searchText: ""
    };

    handleRoute = route => () => {
        this.props.history.push({ pathname: route });
    };

    handleSearchInput = event => {
        this.setState({
            searchText: event.target.value
        });
    };

    handleSearchSubmit = () => {
        if (this.state.searchText) {
            let text = this.state.searchText;
            this.setState({ searchText: "" })
            this.props.history.push({
                pathname: "/results",
                state: { searchText: text }
            });
        } else {
            alert("Please enter some search text!");
        }
    };

    handleSearchKeyUp = event => {
        event.preventDefault();
        if (event.key === 'Enter' && event.keyCode === 13) {
            this.handleSearchSubmit();
        }
    }

    handleFormSubmit = e => e.preventDefault();

    render() {
        return (
            <>
                <Navbar bg="light fixed-top" expand="lg">
          <Navbar.Brand href="">Resource Center</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Button style={{ marginLeft: "5px" }} variant="outline-success">
                <Nav.Link href="/home">Home</Nav.Link>
              </Button>
              <Button style={{ marginLeft: "5px" }} variant="outline-success">
                <Nav.Link href="/post">Test New</Nav.Link>
              </Button>
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
              <Button style={{ marginLeft: "5px" }} variant="outline-success">
                <NavDropdown title="Topics" id="basic-nav-dropdown">
                  {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
                  <NavDropdown.Item href="#action/3.2">
                    {/* <li><Link to="/home">Home</Link></li> */}
                    {/* <li><Link to="/intro">Introduction</Link></li> */}
                    <li>
                      <Link to="/vsc">Visual Studio Code</Link>
                    </li>
                    <li>
                      <Link to="/gitbash">GitBash</Link>
                    </li>
                    <li>
                      <Link to="/introHTML">HTML</Link>
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
                    <li>
                      <Link to="/react">React</Link>
                    </li>
                    <li>
                      <Link to="/ajax">Ajax</Link>
                    </li>
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
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Button>
            </Nav>
            <Form inline>
              <FormControl
                onChange={this.handleSearchInput}
                value={this.state.searchText}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button onClick={this.handleSearchInput} variant="outline-success">Search</Button>
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
            </>
        );
    }
};

export default withRouter(RouterSearch);