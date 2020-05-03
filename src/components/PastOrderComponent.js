import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";

import {
  Button,
  Container,
  OverlayTrigger,
  Popover,
  Table,
} from "react-bootstrap";

import ErrorAlertComponent from "./ErrorAlertComponent";
import LoadingComponent from "./LoadingComponent";

function PastOrder() {
  const { errorState, viewPastOrderState, isLoading } = useContext(
    OrderContext
  );

  if (isLoading) {
    return <LoadingComponent className={"mt-5"} />;
  }

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
    <Container>
      {errorState !== null ? (
        <ErrorAlertComponent
          text={"Exit"}
          variant={"danger"}
          to={"/orders"}
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
                <td>
                  {`${(
                  (viewPastOrderState.gratuity / viewPastOrderState.subtotal) *
                  100
                ).toFixed(2)}% - $${(viewPastOrderState.gratuity).toFixed(2)}`}
                </td>
              </tr>
              <tr>
                <th>Tax</th>
                <td>{`${viewPastOrderState.tax}% - $${(
                    (viewPastOrderState.tax / 100) *
                    viewPastOrderState.subtotal
                  ).toFixed(2)}`}</td>
              </tr>
              <tr>
                <th>Grand Total</th>
                <td>${viewPastOrderState.grand_total.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
}

export default PastOrder;
