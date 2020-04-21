import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function TableInputComponent() {
  const { handleInputChange } = useContext(OrderContext);

  return (
    <>
      <div className="table">ENTER THE 4 - DIGIT CODE</div>
      <div>(Found below the QR Code on the Table)</div>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="tableInputForm"></label>
            <input
              className="form-control"
              type="text"
              placeholder="A - 3 - T -2"
              onChange={handleInputChange}
              name="table_number"
            ></input>
            <Link to="/menu">
              <Button
                className={"success-Btn"}
                variant={"outline-success mt-3"}
              >
                Enter
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default TableInputComponent;
