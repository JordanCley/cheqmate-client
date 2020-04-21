import React from "react";
import { Container } from "react-bootstrap";

import FooterComponent from "../components/FooterComponent";
import PastOrderComponent from "../components/PastOrderComponent";

function Order() {
  return (
    <Container className={"main-Container img-background"}>
      <PastOrderComponent />
      <FooterComponent />
    </Container>
  );
}

export default Order;
