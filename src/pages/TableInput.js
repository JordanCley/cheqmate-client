import React from "react";
import { Container } from "react-bootstrap";
import "../index.css";

import TableInputComponent from "../components/TableInputComponent.js";
import FooterComponent from "../components/FooterComponent";

function TableInput() {
  return (
    <Container className={"main-Container"}>
      <TableInputComponent />
      <FooterComponent/>
    </Container>
  );
}

export default TableInput;
