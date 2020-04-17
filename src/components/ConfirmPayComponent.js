import React, { useContext, useState } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link, useHistory } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import "../index.css";

function ConfirmPayComponent() {
  const history = useHistory();
  const {
    openCheckState,
    updateIsOrderPaidClick,
    initialState,
    setOrderState,
  } = useContext(OrderContext);
  const [isLoading, setIsLoading] = useState(false);

  const handlePayClick = () => {
    setIsLoading(true);
    updateIsOrderPaidClick()
      .then(() => setOrderState(initialState))
      .then(() => history.push("/thank-you"));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const tableHead = {
    backgroundColor: "#2d3436",
  };

  return (
    <>
      <h3>Final Sale</h3>
      
      <Table
        key={openCheckState.id}
        bordered={true}
        hover={true}
        variant={"dark"}
      >
        <tbody>
          <tr>
            <th style={tableHead}>
              <h5>Tax</h5>
            </th>

            <td>{openCheckState.tax}%</td>
          </tr>

          <tr>
            <th style={tableHead}>
              <h5>Gratuity</h5>
            </th>
            <td>{openCheckState.gratuity}%</td>
          </tr>

          <tr>
            <th style={tableHead}>
              <h5>Total</h5>
            </th>
            <td>${openCheckState.total}</td>
          </tr>

          <tr>
            <th style={tableHead}>
              <h5>Grand Total</h5>
            </th>
            <td>${openCheckState.grand_total.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>

      <Link to={"/card-info"}>
        <Button className={"success-Btn"} variant={"outline-danger"}>
          Cancel
        </Button>
      </Link>
      <Link to={""}>
        <Button
          className={"success-Btn"}
          variant={"outline-success ml-1"}
          onClick={handlePayClick}
        >
          Pay
        </Button>
      </Link>
    </>
  );
}

export default ConfirmPayComponent;
