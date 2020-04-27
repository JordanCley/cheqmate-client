import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Table } from "react-bootstrap";
import "../index.css";

import LoadingComponent from "./LoadingComponent";

function Checkout() {
  const {
    openCheckState,
    orderState,
    errorState,
    setErrorState,
    isLoading,
  } = useContext(OrderContext);

  let tax = openCheckState.subtotal * (openCheckState.tax / 100);
  let Total = (openCheckState.subtotal + tax);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <Container>
      {errorState !== null ? (
        <>
          <Alert key={2} variant={"danger"}>
            {errorState}
          </Alert>
          <Link onClick={() => setErrorState(null)} to="/table">
            <Button className={"success-Btn"} variant={"outline-danger"}>
              Enter Table Number
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Table
            key={orderState.id}
            striped={true}
            bordered={true}
            hover={true}
            variant={"dark"}
          >
            <thead>
              <tr>
                <th>
                  <h5>Product</h5>
                </th>
                <th>
                  <h5>Quantity</h5>
                </th>
                <th>
                  <h5>Price</h5>
                </th>
              </tr>
            </thead>
            {orderState.order_items.map((orderItem) => (
              <React.Fragment key={orderItem.product_id}>
                <tbody>
                  <tr>
                    <td>{orderItem.product_name}</td>
                    <td>{orderItem.quantity}</td>
                    <td>${(orderItem.quantity * orderItem.price).toFixed(2)}</td>
                  </tr>
                </tbody>
              </React.Fragment>
            ))}
          </Table>

          <div>
            <Table
              key={orderState.id++}
              striped={true}
              bordered={true}
              hover={true}
              variant={"dark"}
            >
              <thead>
                <tr>
                  <th>
                    <h5>Subtotal</h5>
                  </th>
                  <th>
                    <h5>Tax</h5>
                  </th>
                  <th>
                    <h5>Total</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${orderState.subtotal.toFixed(2)}</td>
                  <td>{orderState.tax}%</td>
                  <td>${Total.toFixed(2)}</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <Link to="/cart">
            <Button className={"success-Btn"} variant={"outline-danger"}>
              Go Back
            </Button>
          </Link>
          <Link to="/card">
            <Button className={"success-Btn"} variant={"outline-success ml-1"}>
              Pay Now
            </Button>
          </Link>
        </>
      )}
    </Container>
  );
}

export default Checkout;
