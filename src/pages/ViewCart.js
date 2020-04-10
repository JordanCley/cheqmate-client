import React, { useContext } from "react";
import CartListComponent from "../components/CartListComponent";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
import { OrderContext } from "../utils/context/OrderContext";

function ViewCart() {
  const { createOrderClick } = useContext(OrderContext);

  return (
    <div className="view-cart-page">
      <CartListComponent />
      <br />
      <Link to="/menu">
        <Button className={"button"}>Menu</Button>
      </Link>
      <Link to="/checkout">
        <Button onClick={createOrderClick}>
          Place Order
        </Button>
      </Link>
    </div>
  );
}

export default ViewCart;
