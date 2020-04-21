import React from "react";
import { Container, Spinner } from "react-bootstrap";
import "../index.css";

const LoadingComponent = () => {
  return (
    <Container className={"loading"}>
      <Spinner animation="grow" />
    </Container>
  );
};

export default LoadingComponent;
