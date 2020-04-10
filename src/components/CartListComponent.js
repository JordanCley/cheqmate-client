import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js";
import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function CartListComponent() {
  const { orderState, addItemToCart, decrementQuantity } = useContext(
    OrderContext
  );

  return (
    <Container fluid={true} className={"main-Component"}>
      {orderState.items.map((product) => (
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr key={product._id}>
              <td>{product.productName}</td>

              <td>
                <button onClick={() => decrementQuantity(product._id)}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
              </td>
              <td>{product.quantity}</td>
              
              <td>
                <button
                  onClick={() => addItemToCart(product._id)}
                  className="left-button"
                >
                  <FontAwesomeIcon icon={faAngleUp} />
                </button>
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
