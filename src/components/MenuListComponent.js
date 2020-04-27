import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js";

import { Alert, Col, ListGroup, Tab, Row } from "react-bootstrap";
import "../index.css";

import AppetizerCardsComponent from "./AppetizerCardsComponent";
import ErrorAlertComponent from "../components/ErrorAlertComponent";

function MenuListComponent() {
  const { errorState } = useContext(OrderContext);

  return (
    <div className={"ml-1 mt-1 img-background2"}>
      {errorState !== null ? (
        <ErrorAlertComponent
          text={"Exit"}
          variant={"danger"}
          to={"/menu"}
          button={"outline-danger"}
        />
      ) : (
        <Tab.Container variant={"dark"} defaultActiveKey="#Appetizers">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item
                  variant={"dark"}
                  action={true}
                  href="#Appetizers"
                >
                  {`Appetizers`}
                </ListGroup.Item>
                <ListGroup.Item variant={"dark"} action={true} href="#Drinks">
                  {`Drinks`}
                </ListGroup.Item>
                <ListGroup.Item variant={"dark"} action={true} href="#KidsMenu">
                  {`Kid's Menu`}
                </ListGroup.Item>
                <ListGroup.Item variant={"dark"} action={true} href="#Desserts">
                  {`Desserts`}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content className={""}>
                <Tab.Pane
                  className={"ml-3"}
                  id={"appetizer-pane"}
                  eventKey={"#Appetizers"}
                >
                  <AppetizerCardsComponent></AppetizerCardsComponent>
                </Tab.Pane>
                <Tab.Pane eventKey={"#Drinks"}>
                  {
                    <Alert className={"mt-2"} variant={"danger"}>
                      {`👷 Under Construction: Drinks coming soon!`}
                    </Alert>
                  }
                </Tab.Pane>
                <Tab.Pane eventKey={"#KidsMenu"}>
                  {
                    <Alert className={"mt-2"} variant={"danger"}>
                      {`👷 Under Construction: Kid's menu coming soon!`}
                    </Alert>
                  }
                </Tab.Pane>
                <Tab.Pane eventKey={"#Desserts"}>
                  {
                    <Alert className={"mt-2"} variant={"danger"}>
                      {`👷 Under Construction: Desserts coming soon!`}
                    </Alert>
                  }
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      )}
    </div>
  );
}

export default MenuListComponent;
