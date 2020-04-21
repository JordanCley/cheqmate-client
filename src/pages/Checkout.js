import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Table } from "react-bootstrap";
import "../index.css";

import FooterComponent from "../components/FooterComponent";
import LoadingComponent from "../components/LoadingComponent";

function Checkout() {
  const {
    openCheckState,
    orderState,
    errorState,
    setErrorState,
    isLoading,
  } = useContext(OrderContext);
  
  let tax = openCheckState.total * (openCheckState.tax / 100);
  let subTotal = (openCheckState.total + tax).toFixed(2);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <Container className={"main-Container"}>
      {errorState !== null ? (
        <>
          <Alert key={2} variant={"danger"}>
            {errorState}
          </Alert>
          <Link onClick={() => setErrorState(null)} to="/table-input">
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
              <>
                <tbody key={orderItem.id}>
                  <tr>
                    <td>{orderItem.product_name}</td>
                    <td>{orderItem.quantity}</td>
                    <td>${orderItem.quantity * orderItem.price}</td>
                  </tr>
                </tbody>
              </>
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
                    <h5>Total</h5>
                  </th>
                  <th>
                    <h5>Tax</h5>
                  </th>
                  <th>
                    <h5>Sub Total</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{orderState.total}</td>
                  <td>{orderState.tax}%</td>
                  <td>${subTotal}</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <Link to="/view-cart">
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

      <FooterComponent />
    </Container>
  );
}

export default Checkout;
