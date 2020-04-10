import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../utils/context/OrderContext";
import { Container, Button } from "react-bootstrap";

function AddTipComponent() {
  const {
    openCheckState,
    resetTipMethod,
    handleTipChange,
    tipMethodState,
    handleTipMethodChange,
  } = useContext(OrderContext);

  return (
    <Container className={"main-Container"}>
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
                    {/* Thinking of adding the tip percentage somewhere in this div form */}
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
                <h3>Please enter a percentage.</h3>
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
              <Link to="/confirm-pay">
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
    </Container>
  );
}

export default AddTipComponent;
