import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./utils/auth";
import logo from "./assets/cheqmate-logo.svg";
import { Button, Container } from "react-bootstrap";
import "./index.css";

function App() {
  const { user, logout } = useAuth();
  const history = useHistory();
  const goToTableInput = () => history.push("/table-input");

  return (
    <Container className={"img-background"}>

      <br />
      
      <div>
        <img src={logo} className={"app-logo mt-5 mb-2"} alt={"logo"} />
        <br />
        <h2>Welcome {user.firstName}!</h2>
        <div>
          <Button
            className={"success-Btn"}
            variant={"outline-danger mx-2"}
            onClick={() => logout()}
          >
            Logout
          </Button>
          <Button
            className={"success-Btn"}
            variant={"outline-success"}
            onClick={goToTableInput}
          >
            Enter Table Number
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
