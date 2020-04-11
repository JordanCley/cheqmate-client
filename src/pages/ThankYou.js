import React from "react";
import { useAuth } from "../utils/auth";
import { Container } from "react-bootstrap";
import logo from "../assets/cheqmate-logo.svg";

const ThankYou = () => {
  const { user } = useAuth();

  return (
    <Container className={"main-Container img-background"}>
      <br />
      <img src={logo} className={"app-logo mt-4 mb-2"} alt={"logo"} />
      <br />
      <h1>Thank you for your visit, {user.firstName}.</h1>
      <h2>See you next time!</h2>
    </Container>
  );
};

export default ThankYou;
