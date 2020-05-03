import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link, useHistory } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

function PastOrders() {
  const history = useHistory();

  const { pastOrderState, viewOnePastOrder, setIsLoading } = useContext(
    OrderContext
  );

  const handleViewOrderClick = (id) => {
    setIsLoading(true);
    viewOnePastOrder(id)
      .then(() => history.push("/order"))
      .then(() => setIsLoading(false));
  };

  let number = 0;

  return (
    <Container>
      <h1>Past Orders</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Table Number</th>
            <th>Gratuity</th>
            <th>Grand Total</th>
          </tr>
        </thead>

        {pastOrderState.map((order) => (
          <tbody key={order.id}>
            <tr>
              <td>
                <Link
                  to={"/order"}
                  onClick={() => handleViewOrderClick(order.id)}
                >
                  <p>{(number += 1)}</p>
                </Link>
              </td>
              <td>{order.table_number}</td>
              <td>${order.gratuity.toFixed(2)}</td>
              <td>${order.grand_total.toFixed(2)}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
}

export default PastOrders;
