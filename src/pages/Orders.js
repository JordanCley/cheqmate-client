import React from "react";
import { Container } from "react-bootstrap";

import FooterComponent from "../components/FooterComponent";
import PastOrdersComponent from "../components/PastOrdersComponent";

function Orders() {
  return (
    <Container className={"main-Container img-background"}>
      <PastOrdersComponent />
      <FooterComponent />
    </Container>
  );
}

export default Orders;
