import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
// import { Redirect } from "react-router-dom";
import {
  Button,
  Container,
  OverlayTrigger,
  Popover,
  Table,
} from "react-bootstrap";

import FooterComponent from "../components/FooterComponent";
import ErrorAlertComponent from "../components/ErrorAlertComponent";

function PastOrder() {
  const { errorState, viewPastOrderState } = useContext(OrderContext);

  // if (errorState !== null) {
  //   return <Redirect to="/past-orders" />;
  // }

  const popover = (
    <Popover id={"popover-basic"}>
      <Popover.Title as={"h3"}>Popover right</Popover.Title>
      <Popover.Content>
        {viewPastOrderState.order_items.map((item) => (
          <p
            key={item.product_id}
          >{`${item.product.product_name} (${item.quantity})`}</p>
        ))}
      </Popover.Content>
    </Popover>
  );

  const ItemPopOver = () => (
    <OverlayTrigger trigger={"click"} placement={"bottom"} overlay={popover}>
      <Button size={"lg"} variant="link">
        {viewPastOrderState.total_items}
      </Button>
    </OverlayTrigger>
  );

  return (
    <Container className={"main-Container img-background"}>
      {errorState !== null ? (
        <ErrorAlertComponent
          text={"Exit"}
          variant={"danger"}
          to={"/past-orders"}
          button={"outline-danger"}
        />
      ) : (
        <>
          <h1>Past Order</h1>
          <Table striped={true} bordered={true} hover={true} variant="dark">
            <tbody>
              <tr key={viewPastOrderState.id}>
                <th>ID</th>
                <td>{viewPastOrderState.id}</td>
              </tr>
              <tr>
                <th>Table Number</th>
                <td>{viewPastOrderState.table_number}</td>
              </tr>
              <tr>
                <th>Items</th>
                <td>
                  <ItemPopOver />
                </td>
              </tr>
              <tr>
                <th>Gratutity</th>
                <td>{viewPastOrderState.gratuity}%</td>
              </tr>
              <tr>
                <th>Tax</th>
                <td>{viewPastOrderState.tax}%</td>
              </tr>
              <tr>
                <th>Grand Total</th>
                <td>${viewPastOrderState.grand_total.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
      <FooterComponent />
    </Container>
  );
}

export default PastOrder;
