import React from "react";
import { Container } from "react-bootstrap";

import FooterComponent from "../components/FooterComponent";
import LandingPageComponent from "../components/LandingPageComponent";


function Landing() {
  return (
    <Container className={"main-Container img-background"}>
      <LandingPageComponent />
      <FooterComponent />
    </Container>
  );
}

export default Landing;