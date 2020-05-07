import React from "react";
import { Container } from "react-bootstrap";

import AddTipComponent from "../components/AddTipComponent";
import FooterComponent from "../components/FooterComponent";

function tip() {
  return (
    <Container className="main-Container bg-table-in-vintage-restaurant">
      <AddTipComponent />
      <FooterComponent />
    </Container>
  );
}

export default tip;
