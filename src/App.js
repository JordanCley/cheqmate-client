import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./assets/cheqmate-logo-radial-white.svg";
import { Container, Button } from "react-bootstrap";
import "./index.css";
import { useAuth } from "./utils/auth";

function App() {
  const { user, logout } = useAuth();
  const history = useHistory();
  const goToTableInput = () => history.push("/table-input");

  return (
    <Container id="app-Container">
      <div id={"app-Div"}>
        <img src={logo} className="app-logo" alt="logo" />
        <h2 className="welcome-text">Welcome {user.firstName}!</h2>
        <p className="">
          <Button
            className={"success-Btn"}
            variant="outline-danger mx-2"
            onClick={() => logout()}
          >
            Logout
          </Button>
          <Button
            className={"success-Btn"}
            variant="outline-success"
            onClick={goToTableInput}
          >
            Enter Table Number
          </Button>
        </p>
      </div>
    </Container>
  );
}

export default App;
