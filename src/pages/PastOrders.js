import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

function PastOrders() {
  const { pastOrderState, viewOnePastOrder } = useContext(OrderContext);
  let number = 0;

  return (
    <Container className={"main-Container img-background"}>
      <h1>Past Orders</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Table Number</th>
            <th>Items</th>
            <th>Gratuity</th>
            <th>Grand Total</th>
          </tr>
        </thead>
        {pastOrderState.map((order) => (
          <tbody key={order._id}>
            <tr>
              <td>
                <Link
                  to={"/past-order"}
                  onClick={() => viewOnePastOrder(order._id)}
                >
                  <p>{(number += 1)}</p>
                </Link>
              </td>
              <td>{order.tableNum}</td>
              <td>{order.totalItems}</td>
              <td>{order.gratuity}%</td>
              <td>${order.grandTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
}

export default PastOrders;
