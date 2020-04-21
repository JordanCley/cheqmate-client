import React from "react";
import { Container } from "react-bootstrap";

import MenuListComponent from "../components/MenuListComponent";
import FooterComponent from "../components/FooterComponent";

function Menu() {
  return (
    <Container>
      <MenuListComponent />
      <FooterComponent />
    </Container>
  );
}
export default Menu;
