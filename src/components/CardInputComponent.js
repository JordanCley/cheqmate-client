import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "../index.css";

function CardInputComponent() {
  return (
    <Container>
      <h3>Payment Info</h3>
      <div>
        <form>
          <div className={"form-group"}>
            <label htmlFor={"cardNumberInput"}>Credit Card Number:</label>
            <input
              type={"text"}
              className={"form-control"}
              id={"cardNumberInput"}
              placeholder={"0000-0000-0000-0000"}
            />
          </div>
          <div className={"row"}>
            <div className={"col"}>
              <label htmlFor={"cardExpInput"}>Exp. Date:</label>
              <input
                id={"cardExpInput"}
                className={"form-control"}
                type={"text"}
                placeholder={"MM/YY"}
              />
            </div>
            <div className={"col"}>
              <label htmlFor={"CVCInput"}>CVC:</label>
              <input
                type={"text"}
                className={"form-control"}
                id={"CVCInput"}
                placeholder={"On back of Card"}
              />
            </div>
          </div>

          <br />

          <div className={"form-group"}>
            <label htmlFor={"nameCardInput"}>Name on Card</label>
            <input
              type={"text"}
              className={"form-control"}
              id={"nameCardInput"}
              placeholder={"Carole Baskin"}
            />
          </div>
        </form>
      </div>

      <Link to="/checkout">
        <Button className={"success-Btn"} variant={"outline-danger mr-2"}>
          Back
        </Button>
      </Link>

      <Link to="/tip">
        <Button className={"success-Btn"} variant={"outline-success"}>
          Continue
        </Button>
      </Link>
    </Container>
  );
}

export default CardInputComponent;
