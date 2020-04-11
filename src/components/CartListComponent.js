import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js";
import { Button, Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function CartListComponent() {
  const { orderState, addItemToCart, decrementQuantity } = useContext(
    OrderContext
  );

  return (
    <Container fluid={true} className={"main-Component"}>
      {orderState.items.map((product) => (
        <Table
          key={product._id}
          striped={true}
          bordered={true}
          hover={true}
          variant="dark"
        >
          <tbody>
            <tr>
              <td>{product.productName}</td>

              <td>
                <Button
                  onClick={() => decrementQuantity(product._id)}
                  variant={"outline-light"}
                >
                  <FontAwesomeIcon icon={faAngleDown} />
                </Button>
              </td>
              <td>{product.quantity}</td>

              <td>
                <Button
                  onClick={() => addItemToCart(product._id)}
                  variant={"outline-light"}
                >
                  <FontAwesomeIcon icon={faAngleUp} />
                </Button>
              </td>
              <td>${product.quantity * product.price}</td>
            </tr>
          </tbody>
        </Table>
      ))}
    </Container>
  );
}

export default CartListComponent;
