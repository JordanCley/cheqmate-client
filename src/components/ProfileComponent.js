import React, { useState, useEffect, useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import API from "./../utils/API/API";
import { Alert, Button, Container } from "react-bootstrap";
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
      <h1>Welcome!</h1>
      <span></span>
      <h1>{`${currentUser.first_name} ${currentUser.last_name}`}</h1>
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
    </Container>
  );
}

export default Profile;
