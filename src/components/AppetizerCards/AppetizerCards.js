import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { OrderContext } from "../../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../index.css";

function AppetizerCards(props) {
  const {
    productsState,
    addItemToCart,
    removeItemFromCart,
    viewOneAppetizer,
  } = useContext(OrderContext);

  return (
    <div>
      {/* this is just a spinner for when the data is still loading */}
      {productsState.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        //mapping through the array of info I got from the API call
        productsState.map((appetizer) => {
          return (
            // clicking on the card itself will make the page change to the
            // preview
            <Card
              className={"cardBG"}
              bg={"Secondary"}
              style={{ width: "18rem" }}
              onClick={() => viewOneAppetizer(appetizer._id)}
              key={appetizer._id}
            >
              {/* just basic bootstrap card */}
              <Card.Img variant="top" src={appetizer.imageURL} />
              <Card.Body>
                <Card.Title>{appetizer.productName}</Card.Title>
                <Card.Text>${appetizer.price}</Card.Text>
                <Link to="/app-preview"> View Item </Link>
                <br />
                <Button
                  onClick={() => addItemToCart(appetizer._id)}
                >
                  Add to cart
                </Button>
                <Button
                  className={"button"}
                  onClick={() => removeItemFromCart(appetizer._id)}
                >
                  Remove from cart
                </Button>
              </Card.Body>
            </Card>
          );
        })
      )}
    </div>
  );
}
export default AppetizerCards;
