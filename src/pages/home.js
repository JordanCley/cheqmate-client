import React from "react";
import { Container } from "react-bootstrap";

import FooterComponent from "../components/FooterComponent";
import HomePageComponent from "../components/HomePageComponent";

function Home() {
  return (
    <Container className={"main-Container img-background"}>
      <HomePageComponent />
      <FooterComponent />
    </Container>
  );
}

export default Home;