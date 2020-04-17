import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js";
import { Container } from "react-bootstrap";
import "../index.css";

import MenuListComponent from "../components/MenuListComponent";
import FooterComponent from "../components/FooterComponent";
import ErrorAlertComponent from "../components/ErrorAlertComponent";

function Menu() {
  const { errorState } = useContext(OrderContext);
  return (
    <Container>
      {errorState !== null ? (
        <ErrorAlertComponent
          text={"Exit"}
          variant={"danger"}
          to={"/menu"}
          button={"outline-danger"}
        />
      ) : (
        <>
          <MenuListComponent />
          <FooterComponent />
        </>
      )}
    </Container>
  );
}
export default Menu;
