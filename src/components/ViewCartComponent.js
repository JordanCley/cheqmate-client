import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link, useHistory } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "../index.css";

import CartListComponent from "../components/CartListComponent";

function ViewCart() {
  const {
    createOrderClick,
    setIsLoading,
    orderState,
    setErrorState,
  } = useContext(OrderContext);
  const history = useHistory();

  const loadingCreate = () => {
    if (orderState.table_number === null) {
      setErrorState("Error: You must input a table number!");
      history.push("/checkout");
    } else {
      setIsLoading(true);
      createOrderClick()
        .then(() => history.push("/checkout"))
        .then(() => setIsLoading(false));
    }
  };

  return (
    <Container >
      <CartListComponent />
      <br />
      <Link to={"/menu"}>
        <Button className={"success-Btn"} variant={"outline-danger mr-1"}>
          Menu
        </Button>
      </Link>
      <Link to={"/checkout"}>
        <Button
          className={"success-Btn"}
          variant={"outline-success"}
          onClick={loadingCreate}
        >
          Place Order
        </Button>
      </Link>
    </Container>
  );
}

export default ViewCart;
