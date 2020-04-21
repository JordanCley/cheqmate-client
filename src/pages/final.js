import React from "react";
import { Container } from "react-bootstrap";

import FooterComponent from "../components/FooterComponent";
import ThankYouComponent from "../components/ThankYouComponent";

const Final = () => {
  return (
    <Container className={"main-Container img-background"}>
      <ThankYouComponent />
      <FooterComponent />
    </Container>
  );
};

export default Final;
