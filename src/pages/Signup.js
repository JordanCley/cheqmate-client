import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
import API from "./../utils/API/API";
import { Button, Container } from "react-bootstrap";
import "../index.css";

function Signup() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
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
      formState.firstName,
      formState.lastName,
      formState.email,
      formState.password
    )
      .then(() => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch((err) => alert(err));
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
      <h1>Signup</h1>
      <form onSubmit={handleFormSubmit}>
        <div className={"form-group"}>
          <label htmlFor={"firstName"}>First Name:</label>
          <input
            className={"form-control"}
            placeholder={"John"}
            name={"firstName"}
            type={"text"}
            id={"firstName"}
            onChange={handleChange}
          />
        </div>
        <div className={"form-group"}>
          <label htmlFor={"lastName"}>Last Name:</label>
          <input
            className={"form-control"}
            placeholder={"Doe"}
            name={"lastName"}
            type={"text"}
            id={"lastName"}
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
    </Container>
  );
}

export default Signup;
