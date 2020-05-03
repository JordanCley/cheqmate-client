import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function CartListComponent() {
  const { orderState, addItemToCart, decrementQuantity } = useContext(
    OrderContext
  );

  return (
    <>
      <h3>Cart</h3>

      <Table
        key={orderState.id}
        striped={true}
        bordered={true}
        hover={true}
        variant="dark"
      >
        <thead>
          <tr>
            <th>
              <h5>Product</h5>
            </th>
            <th>
              <FontAwesomeIcon icon={faMinus} />
            </th>
            <th>
              <FontAwesomeIcon icon={faPlus} />
            </th>
            <th>
              <h5>Price</h5>
            </th>
          </tr>
        </thead>
        {orderState.order_items.map((orderItem) => (
          <React.Fragment key={orderItem.product_id}>
            <tbody>
              <tr>
                <td>{`${orderItem.product_name} (${orderItem.quantity})`}</td>

                <td>
                  <Button
                    size={"sm"}
                    onClick={() => decrementQuantity(orderItem.product_id)}
                    variant={
                      orderItem.quantity === 1
                        ? "outline-danger"
                        : "outline-light"
                    }
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>
                </td>

                <td>
                  <Button
                    size={"sm"}
                    onClick={() => addItemToCart(orderItem.product_id)}
                    variant={"outline-light"}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </td>
                <td>${(orderItem.quantity * orderItem.price).toFixed(2)}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </Table>
    </>
  );
}

export default CartListComponent;
