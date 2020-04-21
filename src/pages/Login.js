import React from "react";
import { Container } from "react-bootstrap";

import FooterComponent from "../components/FooterComponent";
import LoginComponent from "../components/LoginComponent";

function Login() {
  return (
    <Container className={"main-Container img-background"}>
      <LoginComponent />
      <FooterComponent />
    </Container>
  );
}

export default Login;
