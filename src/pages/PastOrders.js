import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function PastOrders() {
  const { pastOrderState, viewOnePastOrder } = useContext(OrderContext);
  let number = 0;

  return (
    <Container>
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
          <tbody>
            <tr key={order._id}>
              <Link
                to={"/past-order"}
                onClick={() => viewOnePastOrder(order._id)}
              >
                <td>{(number += 1)}</td>
              </Link>
              
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
