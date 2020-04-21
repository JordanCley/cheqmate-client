import React from "react";
import { Container } from "react-bootstrap";

import FooterComponent from "../components/FooterComponent";
import CheckoutComponent from "../components/CheckoutComponent";


function Checkout() {
  

  return (
    <Container className={"main-Container"}>
      <CheckoutComponent />
      <FooterComponent />
    </Container>
  );
}

export default Checkout;
