import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function TableInputComponent() {
  const { handleInputChange } = useContext(OrderContext);

  return (
    <Container className={"main-Container mt-4"}>
      <div className="table-input">ENTER THE 4 - DIGIT CODE</div>
      <div>(Found below the QR Code on the Table)</div>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1"></label>
            <input
              className="form-control"
              type="text"
              placeholder="A - 3 - T -2"
              onChange={handleInputChange}
              name="tableNum"
              // value={orderState.tableNum}
            ></input>
            <Link to="/menu">
              <Button className={"success-Btn"} variant={"outline-success mt-3"}>
                Enter
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default TableInputComponent;
