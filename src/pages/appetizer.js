import React from "react";
import { Container } from "react-bootstrap";

import AppetizerPreviewComponent from "../components/AppetizerPreviewComponent";
import FooterComponent from "../components/FooterComponent";

function Appetizer() {
  return (
    <Container className={"main-Container"}>
      <AppetizerPreviewComponent />
      <FooterComponent />
    </Container>
  );
}

export default Appetizer;
