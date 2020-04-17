import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "../index.css";

import CartListComponent from "../components/CartListComponent";
import FooterComponent from "../components/FooterComponent";

function ViewCart() {
  const { createOrderClick } = useContext(OrderContext);

  return (
    <Container className={"main-Container"}>
      <CartListComponent />
      <br />
      <Link to={"/menu"}>
        <Button className={"success-Btn"} variant={"outline-danger mr-1"}>
          Menu
        </Button>
      </Link>
      <Link to={"/checkout"}>
        <Button
          className={"success-Btn"}
          variant={"outline-success"}
          onClick={createOrderClick}
        >
          Place Order
        </Button>
      </Link>
      <FooterComponent />
    </Container>
  );
}

export default ViewCart;
