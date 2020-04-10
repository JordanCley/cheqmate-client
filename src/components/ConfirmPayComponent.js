import React, { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../index.css";
import { OrderContext } from "../utils/context/OrderContext";

function ConfirmPayComponent() {
  const history = useHistory();
  const {
    openCheckState,
    updateIsOrderPaidClick,
    orderState,
    initialState,
    setOrderState,
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
    <Container className={"main-Container"}>
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

      <h2>Tax: {openCheckState.tax}%</h2>

      <h2>Sub Total: ${openCheckState.total}</h2>

      <h2>Tip: {openCheckState.gratuity}%</h2>

      <h2>Grand Total: ${openCheckState.grandTotal.toFixed(2)}</h2>

      <Link to="/card-info">
        <Button className={"success-Btn"} variant={"outline-danger"}>
          Cancel
        </Button>
      </Link>
      <Link>
        <Button
          className={"success-Btn"}
          variant={"outline-success ml-1"}
          onClick={handlePayClick}
        >
          Pay
        </Button>
      </Link>
    </Container>
  );
}

export default ConfirmPayComponent;
