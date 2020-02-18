import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <Card className="container" style={{ width: "18rem", marginTop: "7rem" }}>
        <Card.Img
          style={{ marginTop: "11px" }}
          variant="top"
          src={user.picture}
          alt="Profile"
        />
        <Card.Body>
          <Card.Title className="container text-center">
            <h2>Hello</h2>
            <h2>{user.name}</h2>
          </Card.Title>
          <Card.Text style={{textAlign: 'center'}}>Post new content</Card.Text>
          <hr />
          <Button
            style={{ display: "block", margin: "auto" }}
            variant="primary"
          >
            Post New{" "}
          </Button>
        </Card.Body>
      </Card>
      {/* <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code> */}
    </Fragment>
  );
};

export default Profile;
