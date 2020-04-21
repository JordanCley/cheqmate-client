import React from "react";
import { Container } from "react-bootstrap";

import FooterComponent from "../components/FooterComponent";
import SignupComponent from "../components/SignupComponent";

function Signup() {
  return (
    <Container className={"main-Container img-background"}>
      <SignupComponent />
      <FooterComponent />
    </Container>
  );
}

export default Signup;
