import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function TableInputComponent() {
  const { handleInputChange, orderState } = useContext(OrderContext);

  return (
    <>
      <h5>ENTER TABLE NUMBER</h5>
      <h6>(Found below the QR Code on the Table)</h6>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="tableInputForm"></label>
            <input
              className="form-control"
              type="text"
              placeholder="e.g., A323"
              onChange={handleInputChange}
              name="table_number"
            ></input>
            {orderState.order_items.length !== 0 ? (
              <Link to="/cart">
                <Button
                  className={"success-Btn"}
                  variant={"outline-success mt-3"}
                >
                  Enter
                </Button>
              </Link>
            ) : (
              <Link to="/menu">
                <Button
                  className={"success-Btn"}
                  variant={"outline-success mt-3"}
                >
                  Enter
                </Button>
              </Link>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default TableInputComponent;
