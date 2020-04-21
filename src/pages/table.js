import React from "react";
import { Container } from "react-bootstrap";

import TableInputComponent from "../components/TableInputComponent.js";
import FooterComponent from "../components/FooterComponent";

function Table() {
  return (
    <Container className={"main-Container"}>
      <TableInputComponent />
      <FooterComponent/>
    </Container>
  );
}

export default Table;
