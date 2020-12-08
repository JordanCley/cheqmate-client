import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/cheqmate-logo.svg";
import "../index.css";

const LandingPageComponent = () => {
  return (
    <Container>
      <img src={logo} className={"app-logo"} alt={"logo"} />
      <h2>
        Cheqmate is a passion project I've been working on. The basic concept is
        to replace the hardware kiosks at restaurants. Instead of using the
        kiosks at the table, you would scan a QR code and it would take you to
        Cheqmate. You would then enter in your table number and order your food,
        easily from your phone! Once finsihed, you would have the option to pay
        from the app as well. This app is just a demo, as none of this is hooked
        to any POS systems. But feel free to order some appetizers and go
        through the simulation of ordering and paying through cheqmate!
      </h2>
      <br />
      <Link to={"/signup"}>
        <Button className={"success-Btn"} variant={"outline-primary"}>
          Get Started
        </Button>
      </Link>
    </Container>
  );
};

export default LandingPageComponent;
