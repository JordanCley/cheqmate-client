import React from "react";
import { Container } from "react-bootstrap";
import "../index.css";

import AddTipComponent from "../components/AddTipComponent";

function tip() {
  return (
    <Container className="main-Container bg-table-in-vintage-restaurant">
      <AddTipComponent />
    </Container>
  );
}

export default tip;
