import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

import LoadingComponent from "../components/LoadingComponent";

function AppetizerCardsComponent() {
  const {
    productsState,
    addItemToCart,
    decrementQuantity,
    viewOneAppetizer,
  } = useContext(OrderContext);

  return (
    <Container className={"mt-1 mb-5"}>
      {productsState.length === 0 ? (
        <LoadingComponent />
      ) : (
        productsState.map((appetizer) => {
          return (
            <Card
              bg={"dark"}
              className={"mt-1"}
              id={"appetizer-card"}
              onClick={() => viewOneAppetizer(appetizer.id)}
              key={appetizer.id}
            >
              <Card.Img variant="top" src={appetizer.image_url} />

              <Card.Body>
                {appetizer.quantity && appetizer.quantity !== 0 ? (
                  <Card.Title>{`${appetizer.product_name} (${appetizer.quantity})`}</Card.Title>
                ) : (
                  <Card.Title>{appetizer.product_name}</Card.Title>
                )}

                <Card.Text>${appetizer.price}</Card.Text>

                <br />
                <ButtonGroup className={"mb-1 mt-1"} size={"md"}>
                  <Button
                    className={"mr-1 success-Btn"}
                    variant={"outline-danger mb-1 ml-1"}
                    onClick={() => decrementQuantity(appetizer.id)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>

                  <Link to="/cart">
                    <Button
                      className={"success-Btn"}
                      variant={"outline-primary"}
                    >
                      View Cart
                    </Button>
                  </Link>
                  <Button
                    className={"ml-1 success-Btn"}
                    variant={"outline-success mb-1"}
                    onClick={() => addItemToCart(appetizer.id)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </ButtonGroup>
                <br />
                <Link to="/appetizer">View Item</Link>
              </Card.Body>
            </Card>
          );
        })
      )}
    </Container>
  );
}
export default AppetizerCardsComponent;
