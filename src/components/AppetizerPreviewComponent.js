import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function AppetizerPreviewComponent() {
  const { viewAppetizerState, addItemToCart } = useContext(OrderContext);

  return (
    <>
      <h1 className="appetizer-preview-h1">{viewAppetizerState.product_name}</h1>
      <img
        src={viewAppetizerState.image_url}
        alt="Appetizer"
        className="appetizer-preview-image"
      ></img>
      <p className="appetizer-preview-description">
        {viewAppetizerState.description}
      </p>
      <p className="appetizer-preview-price">${viewAppetizerState.price}</p>

      <Link to="/menu">
        <Button className={"success-Btn"} variant={"outline-danger mr-1"}>
          Back
        </Button>
      </Link>
      <Link to="/cart">
        <Button
          className={"success-Btn"}
          variant={"outline-success"}
          onClick={() => addItemToCart(viewAppetizerState.id)}
        >
          Add
        </Button>
      </Link>
      {/* makes the state back to false when pressing on the back button to redirect the page back to main menu */}
    </>
  );
}

export default AppetizerPreviewComponent;
