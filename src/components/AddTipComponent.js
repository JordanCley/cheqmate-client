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
                      value={10}
                      className="form-check-input"
                    />
                    10%
                  </label>
                </div>

                <div className="form-check">
                  <label>
                    <input
                      onChange={handleTipChange}
                      type="radio"
                      name="gratuity"
                      value={15}
                      className="form-check-input"
                    />
                    15%
                  </label>
                </div>

                <div className="form-check">
                  <label>
                    <input
                      onChange={handleTipChange}
                      type="radio"
                      name="gratuity"
                      value={20}
                      className="form-check-input"
                    />
                    20%
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
                <h3>Please enter a percentage. (e.g., 20, 30)</h3>
                <input
                  type="number"
                  onChange={handleTipChange}
                  name="gratuity"
                  value={openCheckState.gratuity || ""}
                  // placeholder="please enter a percentage"
                ></input>
              </div>
            )}
            <div className="form-group">
              <Link to="/card-info">
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
