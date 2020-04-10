import React from "react";
import { Container, ListGroup, Tab, Row, Col } from "react-bootstrap";
import AppetizerCardsComponent from "./AppetizerCardsComponent";
import "../index.css";

function MenuListComponent() {
  // Setting the state of the page to be initially false

  return (
    //bootstrap react rendering for the menu tab and pane
    <Container className={"mt-1"}>
      <Tab.Container variant={"dark"} defaultActiveKey="#Appetizers">
        <Row>
          <Col sm={4}>
            <ListGroup >
              <ListGroup.Item variant={"dark"} action href="#Appetizers">
                Appetizers
              </ListGroup.Item>
              <ListGroup.Item variant={"dark"} action href="#Drinks">
                Drinks
              </ListGroup.Item>
              <ListGroup.Item variant={"dark"} action href="#KidsMenu">
                Kid's Menu
              </ListGroup.Item>
              <ListGroup.Item variant={"dark"} action href="#Deserts">
                Deserts
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane className={"ml-3"} id="appetizer-pane" eventKey="#Appetizers">
                {/* this is where you put what you wish to populate the pane with */}
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
