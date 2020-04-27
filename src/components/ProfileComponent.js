import React, { useState, useEffect, useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import API from "./../utils/API/API";
import {
  Alert,
  Button,
  Card,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "../index.css";

function Profile() {
  const [currentUser, setCurrentUser] = useState({});
  const { user } = useAuth();
  const { viewAllOrdersClick, setErrorState, errorState } = useContext(
    OrderContext
  );

  useEffect(() => {
    API.getUser(user.id)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        setErrorState(err);
      });
    // eslint-disable-next-line
  }, [user]);

  return (
    <Container>
      {errorState ? (
        <Alert key={2} variant={"danger"}>
          {errorState}
        </Alert>
      ) : (
        ""
      )}

      <Card bg={"dark"}>
        <Card.Body>
          <Card.Title>{`${currentUser.first_name} ${currentUser.last_name}`}</Card.Title>
          <Card.Text>Welcome to your profile!</Card.Text>
        </Card.Body>
        <ListGroup bg={"dark"}>
          <ListGroupItem variant={"success"}>{`email: ${currentUser.email}`}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Link to={"orders"}>
            <Button
              className={"success-Btn"}
              variant={"outline-success mx-2"}
              onClick={viewAllOrdersClick}
            >
              View All Past Orders
            </Button>
          </Link>
          <Link to={"/"}>
            <Button className={"success-Btn"} variant={"outline-success"}>
              Go home
            </Button>
          </Link>
          {/* <Card.Link href="">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>

      {/* <h1>Welcome to your profile!</h1>
      <br />
      <h3>{`Name: ${currentUser.first_name} ${currentUser.last_name}`}</h3>
      <h3>{`Email: ${currentUser.email}`}</h3> */}
    </Container>
  );
}

export default Profile;
