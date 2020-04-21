import React, { useContext } from "react";
import { OrderContext } from "./utils/context/OrderContext.js";
import { useHistory } from "react-router-dom";
import { useAuth } from "./utils/auth";
import logo from "./assets/cheqmate-logo.svg";
import { Button, Container } from "react-bootstrap";
import "./index.css";

import FooterComponent from "./components/FooterComponent";
import ErrorAlertComponent from "./components/ErrorAlertComponent";

function App() {
  const { errorState } = useContext(OrderContext);
  const { user, logout } = useAuth();
  const history = useHistory();
  const goToTableInput = () => history.push("/table");

  return (
    <Container className={"main-Container img-background"}>
      {errorState !== null ? (
        <ErrorAlertComponent
          text={"Exit"}
          variant={"danger"}
          to={"/login"}
          button={"outline-danger"}
        />
      ) : (
        <>
          <br />

          <div>
            <img src={logo} className={"app-logo"} alt={"logo"} />
            <br />
            <h2>Welcome {user.first_name}!</h2>
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
        </>
      )}
      <FooterComponent />
    </Container>
  );
}

export default App;
