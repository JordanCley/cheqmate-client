/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorAlertComponent = (props) => {
  const { errorState, setErrorState } = useContext(OrderContext);
  return (
    <>
      <Alert key={2} variant={props.variant}>
        {props.message ? (props.message) : (errorState)}
      </Alert>
      <Link onClick={() => setErrorState(null)} to={props.to}>
        <Button className={"success-Btn"} variant={props.button}>
          {props.text}
        </Button>
      </Link>
    </>
  );
};

export default ErrorAlertComponent;
