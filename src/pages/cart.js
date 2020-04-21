import React from "react";
import { Container } from "react-bootstrap";

import FooterComponent from "../components/FooterComponent";
import ViewCartComponent from "../components/ViewCartComponent";

function Cart() {
  return (
    <Container className={"main-Container"}>
      <ViewCartComponent />
      <FooterComponent />
    </Container>
  );
}

export default Cart;
