import React, { useState, useEffect, useContext } from "react";
import API from "./../utils/API/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { OrderContext } from "../utils/context/OrderContext";
import "../index.css";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [, setEmail] = useState("");
  const { user } = useAuth();
  const { viewAllOrdersClick } = useContext(OrderContext);

  useEffect(() => {
    API.getUser(user.id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
      })
      .catch((err) => alert(err));
  }, [user]);

  return (
    <div className="container Profile profile-page bg-table-in-vintage-restaurant">
      <h1>Welcome!</h1>
      <span></span>
      <h1>{`${firstName} ${lastName}`}</h1>
      <Link to="past-orders">
        <button
          className="profile-page-button-containers"
          onClick={viewAllOrdersClick}
        >
          View All Past Orders
        </button>
      </Link>
      <Link to="/">
        <button className="profile-page-button-containers">Go home</button>
      </Link>
    </div>
  );
}

export default Profile;
