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
              <h5>-</h5>
            </th>
            <th>
              <h5>+</h5>
            </th>
            <th>
              <h5>Price</h5>
            </th>
          </tr>
        </thead>
        {orderState.order_items.map((orderItem) => (
          <>
            <tbody key={orderItem.id}>
              <tr>
                <td>{`${orderItem.product_name} (${orderItem.quantity})`}</td>

                <td>
                  <Button
                    onClick={() => decrementQuantity(orderItem.id)}
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
                    onClick={() => addItemToCart(orderItem.id)}
                    variant={"outline-light"}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </td>
                <td>${orderItem.quantity * orderItem.price}</td>
              </tr>
            </tbody>
          </>
        ))}
      </Table>
    </>
  );
}

export default CartListComponent;
