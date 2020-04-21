import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js";
import { useAuth } from "../utils/auth";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "../index.css";

function LoginComponent() {
  const history = useHistory();
  const { isLoggedIn, login } = useAuth();
  const {
    errorState,
    setErrorState,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(OrderContext);

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    login(email, password)
      .then(() => history.push("/"))
      .catch((err) => {
        setErrorState(err.response.data.message);
      });
  };

  if (isLoggedIn || errorState !== null) {
    return <Redirect to="/" />;
  }

  return (
    <Container className={"main-Container img-background"}>
      <h1>Login</h1>
      <form onSubmit={handleLoginFormSubmit}>
        <div className={"form-group"}>
          <label htmlFor={"email"}>Email address:</label>
          <input
            className={"form-control"}
            placeholder={"JohnD@Bloomin.com"}
            name={"email"}
            type={"email"}
            id={"email"}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
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
            value={password}
            onChange={({ target }) => setPassword(target.value)}
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
      <div>
        <p>New to CheqMate mate?</p>
        <Link to={"/signup"}>
          <Button className={"success-Btn"} variant={"outline-primary"}>
            Go to Signup
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default LoginComponent;
