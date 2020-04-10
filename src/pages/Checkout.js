import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import "../index.css";

function Checkout() {
  const { openCheckState, orderState } = useContext(OrderContext);
  let tax = openCheckState.total * (openCheckState.tax / 100);
  let subTotal = (openCheckState.total + tax).toFixed(2);

  return (
    <Container className={"main-Container"}>
      {orderState.items.map((product) => (
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr key={product._id}>
              <td>{product.productName}</td>

              <td>{product.quantity}</td>

              <td></td>
              <td>${product.quantity * product.price}</td>
            </tr>
          </tbody>
        </Table>
      ))}

      <h2>Tax: 9.9%</h2>

      <h2>Sub Total: ${subTotal}</h2>

      <Link to="/view-cart">
        <Button className={"success-Btn"} variant="outline-danger">
          Go Back
        </Button>
      </Link>
      <Link to="/card-input">
        <Button className={"success-Btn"} variant="outline-success ml-1">
          Pay Now
        </Button>
      </Link>
    </Container>
  );
}

export default Checkout;
