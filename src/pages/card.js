import React from "react";
import { Container } from "react-bootstrap";

import FooterComponent from "../components/FooterComponent";
import CardInputComponent from "../components/CardInputComponent";

function Card() {
  return (
    <Container className={"main-Container"}>
      <CardInputComponent />
      <FooterComponent />
    </Container>
  );
}

export default Card;
