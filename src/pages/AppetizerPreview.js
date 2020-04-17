import React from "react";
import { Container } from "react-bootstrap";
import "../index.css";

import AppetizerPreviewComponent from "../components/AppetizerPreviewComponent";
import FooterComponent from "../components/FooterComponent";

function AppetizerPreview() {
  return (
    <Container className={"main-Container"}>
      <AppetizerPreviewComponent />
      <FooterComponent />
    </Container>
  );
}

export default AppetizerPreview;
