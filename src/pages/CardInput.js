import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

function CardInput() {
  return (
    <Container className={"main-Container"}>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Credit Card Number:</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="0000-0000-0000-0000"
            />
          </div>
          <div className="row">
            <div className="col">
              <label>Exp. Date:</label>
              <input type="text" className="form-control" placeholder="MM/YY" />
            </div>
            <div className="col">
              <label>CVC:</label>
              <input
                type="text"
                className="form-control"
                placeholder="On back of Card"
              />
            </div>
          </div>

          <br />

          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Name on Card</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Michael J. Fox"
            />
          </div>
        </form>
      </div>

      <Link to="/view-check">
        <Button className={"success-Btn"} variant={"outline-danger mr-2"}>
          Back
        </Button>
      </Link>

      <Link to="/add-tip">
        <Button className={"success-Btn"} variant={"outline-success"}>
          Continue
        </Button>
      </Link>
    </Container>
  );
}

export default CardInput;
