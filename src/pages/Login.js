import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useAuth } from "../utils/auth";
import "../index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    login(email, password)
      // navigate to the profile page
      .then(() => history.push("/table-input"))
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <Container className={"main-Container"}>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            className="form-control"
            placeholder="JohnD@Bloomin.com"
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            className="form-control"
            placeholder="********"
            name="password"
            type="password"
            id="pwd"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <Button
          type="submit"
          className={"success-Btn"}
          variant={"outline-success mb-4"}
        >
          Submit
        </Button>
      </form>
      <p>
        <p className="sign-up-page">New to CheqMate mate?</p>
        <Link to="/signup">
          <Button className={"success-Btn"} variant={"outline-primary"}>
            Go to Signup
          </Button>
        </Link>
      </p>
    </Container>
  );
}

export default Login;
