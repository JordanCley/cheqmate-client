import React, { useContext, useState } from "react";
import { Button, Container, Col, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../index.css";
import { OrderContext } from "../utils/context/OrderContext";

function ConfirmPay() {
  const history = useHistory();
  const {
    openCheckState,
    updateIsOrderPaidClick,
    orderState,
    initialState,
    setOrderState
  } = useContext(OrderContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(orderState);

  const handlePayClick = () => {
    setIsLoading(true);
    updateIsOrderPaidClick()
    .then(() => setOrderState(initialState))
    .then(() => history.push("/thank-you"));
    console.log(orderState);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid className="orderfield-container">
      {openCheckState.items.length ? (
        openCheckState.items.map((product) => (
          <Table striped bordered hover variant="dark">
            <tbody>
              <tr key={product._id}>
                <td>{product.productName}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
              </tr>
            </tbody>
          </Table>
        ))
      ) : (
        <p>No items in cart</p>
      )}
      <Col lg={4}>
        <span>Tax: {openCheckState.tax}%</span>
      </Col>
      <Col lg={4}>
        <span>Sub Total: ${openCheckState.total}</span>
      </Col>
      <Col lg={4}>
        <span>Tip: {openCheckState.gratuity}%</span>
      </Col>
      <Col lg={4}>
        <span>Grand Total: ${openCheckState.grandTotal.toFixed(2)}</span>
      </Col>
      <div className="confirm-pay-buttons"></div>
      <Link to="/card-info">
        <Button className="button">Cancel</Button>
      </Link>
      <Link>
        <Button onClick={handlePayClick}>Pay</Button>
      </Link>
    </Container>
  );
}

export default ConfirmPay;
