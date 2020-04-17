import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import "../index.css";

function AppetizerCardsComponent() {
  const {
    productsState,
    addItemToCart,
    removeItemFromCart,
    viewOneAppetizer,
  } = useContext(OrderContext);

  // className={"mr-4 mt-1"}
  return (
    <Container className={"mt-1 mb-5"}>
      {productsState.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
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
                <Card.Title>{appetizer.product_name}</Card.Title>
                <Card.Text>${appetizer.price}</Card.Text>
                <Link to="/app-preview"> View Item </Link>
                <br />
                <Button
                  className={"success-Btn"}
                  variant={"outline-success mb-1"}
                  onClick={() => addItemToCart(appetizer.id)}
                >
                  Add to cart
                </Button>
                <Button
                  className={"success-Btn"}
                  variant={"outline-danger mb-1 ml-1"}
                  onClick={() => removeItemFromCart(appetizer.id)}
                >
                  Remove from cart
                </Button>
              </Card.Body>
            </Card>
          );
        })
      )}
    </Container >
  );
}
export default AppetizerCardsComponent;
