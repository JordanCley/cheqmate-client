import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/cheqmate-logo.svg";
import { Navbar } from "react-bootstrap";
import "../index.css";

const createLink = ({ text, to, ...rest }) => {
  const className = "nav-link";
  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {text}
      </Link>
    );
  }
  return (
    <span
      role="button"
      className={className}
      style={{ cursor: "pointer" }}
      {...rest}
    >
      {text}
    </span>
  );
};

function NavLinks() {
  const { orderState, openCheckState } = useContext(OrderContext);
  let sum = 0;

  const addQuantity = () => {
    orderState.order_items.filter((num) => {
      sum += num.quantity;
      return sum;
    });
  };

  addQuantity();

  const { isLoggedIn, logout } = useAuth();
  let links = [];
  if (isLoggedIn) {
    links.push({ text: "Profile", to: "/profile" });
    links.push({ text: "Menu", to: "/menu" });
    links.push({ text: "Logout", onClick: () => logout() });
    if (openCheckState.order_items) {
      links.push({
        text: <FontAwesomeIcon icon={faCreditCard} />,
        to: "/card-input",
      });
    }

    if (orderState.order_items.length !== 0) {
      links.push({ text: `(${sum})`, to: "/view-cart" });
    } else {
      links.push({
        text: <FontAwesomeIcon icon={faShoppingCart} />,
        to: "/view-cart",
      });
    }
  } else {
    links.push({ text: "Signup", to: "/signup" });
    links.push({ text: "Login", to: "/login" });
  }
  return (
    <ul className="navbar-nav">
      {links.map((link, i) => (
        <li key={i} className="nav-item">
          {createLink(link)}
        </li>
      ))}
    </ul>
  );
}

const goBackBtn = () => {
  window.history.back();
};

function NavbarComponent() {
  return (
    <Navbar
      className="navbar nav navbar-expand navbar-dark bg-primary"
      fixed={"top"}
      expand={"lg"}
    >
      <div className="container inner-nav-container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            className="cheqmate-nav-logo"
            alt="Cheqmate Nav Logo"
          />
        </Link>

        <span onClick={goBackBtn}>
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </span>

        <NavLinks />
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
