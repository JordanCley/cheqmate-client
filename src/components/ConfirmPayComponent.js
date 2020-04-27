import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link, useHistory } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import "../index.css";

import LoadingComponent from "./LoadingComponent";

function ConfirmPayComponent() {
  const history = useHistory();
  const {
    openCheckState,
    updateIsOrderPaidClick,
    initialState,
    setOrderState,
    isLoading,
    setIsLoading,
  } = useContext(OrderContext);

  const handlePayClick = () => {
    setIsLoading(true);
    updateIsOrderPaidClick()
      .then(() => setOrderState(initialState))
      .then(() => history.push("/final"));
  };

  const tableHead = {
    backgroundColor: "#2d3436",
  };

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <h3>Order Details</h3>

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

                <td>
                  {`${openCheckState.tax}% - $${(
                    (openCheckState.tax / 100) *
                    openCheckState.subtotal
                  ).toFixed(2)}`}
                </td>
              </tr>

              <tr>
                <th style={tableHead}>
                  <h5>Gratuity</h5>
                </th>
                <td>{`${(
                  (openCheckState.gratuity / openCheckState.subtotal) *
                  100
                ).toFixed(0)}% - $${openCheckState.gratuity}`}</td>
              </tr>

              <tr>
                <th style={tableHead}>
                  <h5>Subtotal</h5>
                </th>
                <td>${openCheckState.subtotal}</td>
              </tr>

              <tr>
                <th style={tableHead}>
                  <h5>Grand Total</h5>
                </th>
                <td>${openCheckState.grand_total.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>

          <Link to={"/tip"}>
            <Button className={"success-Btn"} variant={"outline-danger"}>
              Cancel
            </Button>
          </Link>
          <Link to={"/final"}>
            <Button
              className={"success-Btn"}
              variant={"outline-success ml-1"}
              onClick={handlePayClick}
            >
              Pay
            </Button>
          </Link>
        </>
      )}
    </>
  );
}

export default ConfirmPayComponent;
