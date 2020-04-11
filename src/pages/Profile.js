import React, { useState, useEffect, useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import API from "./../utils/API/API";
import { Button, Container } from "react-bootstrap";
import "../index.css";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [, setEmail] = useState("");
  const { user } = useAuth();
  const { viewAllOrdersClick } = useContext(OrderContext);

  useEffect(() => {
    API.getUser(user.id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
      })
      .catch((err) => alert(err));
  }, [user]);

  return (
    <Container className={"main-Container img-background"}>
      <h1>Welcome!</h1>
      <span></span>
      <h1>{`${firstName} ${lastName}`}</h1>
      <Link to={"past-orders"}>
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
