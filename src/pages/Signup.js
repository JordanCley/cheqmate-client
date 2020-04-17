import React, { useContext, useState } from "react";
import { OrderContext } from "../utils/context/OrderContext.js";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
import API from "./../utils/API/API";
import { Alert, Button, Container } from "react-bootstrap";
import "../index.css";

import FooterComponent from "../components/FooterComponent";

function Signup() {
  const { errorState, setErrorState } = useContext(OrderContext);
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to={"/"} />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(
      formState.first_name,
      formState.last_name,
      formState.email,
      formState.password
    )
      .then(() => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch((err) => setErrorState(err.response.data.message));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container className={"main-Container img-background"}>
      {errorState !== null ? (
        <>
          <Alert key={2} variant={"danger"}>
            {errorState}
          </Alert>
          <Link onClick={() => setErrorState(null)} to="/signup">
            <Button className={"success-Btn"} variant={"outline-danger"}>
              Exit
            </Button>
          </Link>
        </>
      ) : (
        <>
          <h1>Signup</h1>
          <form onSubmit={handleFormSubmit}>
            <div className={"form-group"}>
              <label htmlFor={"first_name"}>First Name:</label>
              <input
                className={"form-control"}
                placeholder={"John"}
                name={"first_name"}
                type={"text"}
                id={"first_name"}
                onChange={handleChange}
              />
            </div>
            <div className={"form-group"}>
              <label htmlFor={"last_name"}>Last Name:</label>
              <input
                className={"form-control"}
                placeholder={"Doe"}
                name={"last_name"}
                type={"text"}
                id={"last_name"}
                onChange={handleChange}
              />
            </div>
            <div className={"form-group"}>
              <label htmlFor={"email"}>Email address:</label>
              <input
                className={"form-control"}
                placeholder={"JohnD@Bloomin.com"}
                name={"email"}
                type={"email"}
                id={"email"}
                onChange={handleChange}
              />
            </div>
            <div className={"form-group"}>
              <label htmlFor={"pwd"}>Password:</label>
              <input
                className={"form-control"}
                placeholder={"********"}
                name={"password"}
                type={"password"}
                id={"pwd"}
                onChange={handleChange}
              />
            </div>
            <Button
              type={"submit"}
              className={"success-Btn"}
              variant={"outline-success mb-4"}
            >
              Submit
            </Button>
          </form>

          <h4>Already have an account with us?</h4>

          <Link to={"/login"}>
            <Button className={"success-Btn"} variant={"outline-primary"}>
              Go to Login
            </Button>
          </Link>
        </>
      )}
      <FooterComponent />
    </Container>
  );
}

export default Signup;
