import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function AddTipComponent() {
  const {
    openCheckState,
    resetTipMethod,
    handleTipChange,
    tipMethodState,
    handleTipMethodChange,
  } = useContext(OrderContext);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            {tipMethodState.tipMethod === "radioTip" ? (
              <form>
                <div className="form-check">
                  <label>
                    <input
                      onChange={handleTipChange}
                      type="radio"
                      name="gratuity"
                      value={(openCheckState.subtotal * 0.1).toFixed(2)}
                      className="form-check-input"
                    />
                    10% - ${(openCheckState.subtotal * 0.1).toFixed(2)}
                  </label>
                </div>

                <div className="form-check">
                  <label>
                    <input
                      onChange={handleTipChange}
                      type="radio"
                      name="gratuity"
                      value={(openCheckState.subtotal * 0.15).toFixed(2)}
                      className="form-check-input"
                    />
                    15% - ${(openCheckState.subtotal * 0.15).toFixed(2)}
                  </label>
                </div>

                <div className="form-check">
                  <label>
                    <input
                      onChange={handleTipChange}
                      type="radio"
                      name="gratuity"
                      value={(openCheckState.subtotal * 0.2).toFixed(2)}
                      className="form-check-input"
                    />
                    20% - ${(openCheckState.subtotal * 0.2).toFixed(2)}
                  </label>
                </div>
                <div className="form-check">
                  <label>
                    <input
                      onChange={handleTipMethodChange}
                      value="customTip"
                      checked={tipMethodState.tipMethod === "customTip"}
                      type="radio"
                      name="tipMethod"
                      className="form-check-input"
                    />
                    Other
                  </label>
                </div>
              </form>
            ) : (
              <div>
                <h3>Please enter a dollar amount.</h3>
                <input
                  type="number"
                  onChange={handleTipChange}
                  pattern="[0-9]{0,5}"
                  name="gratuity"
                  value={openCheckState.gratuity || ""}
                  // placeholder="e.g. 5.00"
                ></input>
              </div>
            )}
            <div className="form-group">
              <Link to="/card">
                <Button
                  className={"success-Btn"}
                  onClick={resetTipMethod}
                  variant={"outline-danger mt-1"}
                >
                  Back
                </Button>
              </Link>
              <Link to="/confirmation">
                <Button
                  onClick={resetTipMethod}
                  className={"success-Btn"}
                  variant={"outline-success mt-1 ml-1"}
                >
                  Continue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTipComponent;
