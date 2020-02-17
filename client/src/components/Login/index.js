import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "../../react-auth0-spa";
import Button from "react-bootstrap/Button";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Button
        style={{ marginLeft: "5px" }}
        variant="outline-success"
        onClick={() => loginWithRedirect({})}
      >
        Log in to add new content
      </Button>
      
    </div>
  );
};

export default Login;
