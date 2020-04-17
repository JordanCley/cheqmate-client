import React from "react";
import { Container } from "react-bootstrap";
import "../index.css";

import ConfirmPayComponent from "../components/ConfirmPayComponent.js";
import FooterComponent from "../components/FooterComponent";

function ConfirmPay() {
  return (
    <Container className={"main-Container"}>
      <ConfirmPayComponent />
      <FooterComponent/>
    </Container>
  );
}

export default ConfirmPay;
