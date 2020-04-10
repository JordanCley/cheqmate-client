import React, { useContext } from "react";
import CartListComponent from "../components/CartListComponent";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
import { OrderContext } from "../utils/context/OrderContext";

function ViewCart() {
  const { createOrderClick } = useContext(OrderContext);

  return (
    <Container className={"main-Container"}>
      <CartListComponent />
      <br />
      <Link to="/menu">
        <Button className={"success-Btn"} variant={"outline-danger mr-1"}>
          Menu
        </Button>
      </Link>
      <Link to="/checkout">
        <Button
          className={"success-Btn"}
          variant={"outline-success"}
          onClick={createOrderClick}
        >
          Place Order
        </Button>
      </Link>
    </Container>
  );
}

export default ViewCart;
