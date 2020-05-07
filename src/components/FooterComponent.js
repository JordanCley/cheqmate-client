import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/cheqmate-Q-logo.svg";

const FooterComponent = () => {

  
  return (
    <Container id={"footer"}>
      <p>
        &copy; 2020 Cheqmate Inc. All Rights Reserved. version 1.0.5
        <img src={logo} className={"q-logo ml-1 mr-2"} alt={"Q-logo"} />
      </p>
    </Container>
  );
};

export default FooterComponent;
