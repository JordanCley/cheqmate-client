import React from "react";
import { Col, Container, ListGroup, Tab, Row } from "react-bootstrap";
import "../index.css";

import AppetizerCardsComponent from "./AppetizerCardsComponent";

function MenuListComponent() {
  return (
    <Container className={"mt-1 img-background2"}>
      <Tab.Container variant={"dark"} defaultActiveKey="#Appetizers">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item variant={"dark"} action={true} href="#Appetizers">
                Appetizers
              </ListGroup.Item>
              <ListGroup.Item variant={"dark"} action={true} href="#Drinks">
                Drinks
              </ListGroup.Item>
              <ListGroup.Item variant={"dark"} action={true} href="#KidsMenu">
                {`Kid's Menu`}
              </ListGroup.Item>
              <ListGroup.Item variant={"dark"} action={true} href="#Deserts">
                Deserts
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane
                className={"ml-3"}
                id="appetizer-pane"
                eventKey="#Appetizers"
              >
                <AppetizerCardsComponent></AppetizerCardsComponent>
              </Tab.Pane>
              <Tab.Pane eventKey="#Drinks">{}</Tab.Pane>
              <Tab.Pane eventKey="#KidsMenu">{}</Tab.Pane>
              <Tab.Pane eventKey="#Deserts">{}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default MenuListComponent;
