import React from "react";
import { Container } from "react-bootstrap";
import "../index.css";

import FooterComponent from "../components/FooterComponent";
import CardInputComponent from "../components/CardInputComponent";

function card() {
  return (
    <Container className={"main-Container"}>
      <CardInputComponent />
      <FooterComponent />
    </Container>
  );
}

export default card;
