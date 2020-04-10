import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CartListComponent from "../components/CartListComponent.js";
import { Col } from "react-bootstrap";
import "../index.css";

function Checkout() {
  const { openCheckState } = useContext(OrderContext);
  let tax = openCheckState.total * (openCheckState.tax / 100);
  let subTotal = (openCheckState.total + tax).toFixed(2);

  return (
    <div className="view-check-page bg-table-in-vintage-restaurant">
      <CartListComponent />
      <Col lg={4}>
        <span>Tax: 9.9%</span>
      </Col>
      <Col lg={4}>
        <span>Sub Total: ${subTotal}</span>
      </Col>
      <Link to="/my-orders">
        <Button className="button">Go Back</Button>
      </Link>
      <Link to="/card-input">
        <Button>Pay Now</Button>
      </Link>
    </div>
  );
}

export default Checkout;
