import React from "react";
import { Container } from "react-bootstrap";
import { useAuth } from "../utils/auth";

const ThankYou = () => {

  const { user } = useAuth();

  return (
    <Container className={"main-Container"}>
      <br />
      <h1>Thank you for your visit, {user.firstName}.</h1>
      <h2>See you next time!</h2>
    </Container>
  );
};

export default ThankYou;
