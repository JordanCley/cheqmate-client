import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";

import "./index.css";
import App from "./App";
import { AuthProvider, useAuth } from "./utils/auth";
import OrderContextProvider from "./utils/context/OrderContext";
import registerServiceWorker from "./registerServiceWorker";

//Pages
import Login from "./pages/login";
import Profile from "./pages/profile";
import Signup from "./pages/signup";
import Table from "./pages/table";
import Menu from "./pages/menu";
import Appetizer from "./pages/appetizer";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Card from "./pages/card";
import Tip from "./pages/tip";
import Confirmation from "./pages/confirmation";
import Final from "./pages/final";
import Orders from "./pages/Orders";
import Order from "./pages/Order";

import Navbar from "./components/NavbarComponent.js";

if (localStorage.getItem("id_token")) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("id_token")}`;
}

function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return children;
  }
  return <Redirect to={"/signup"} />;
}

ReactDOM.render(
  <AuthProvider>
    <OrderContextProvider>
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <ProtectedRoute exact={true} path={"/"}>
              <App />
            </ProtectedRoute>
            <Route exact={true} path={"/login"}>
              <Login />
            </Route>
            <Route exact={true} path={"/signup"}>
              <Signup />
            </Route>
            <ProtectedRoute exact={true} path={"/profile"}>
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/table"}>
              <Table />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/checkout"}>
              <Checkout />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/appetizer"}>
              <Appetizer />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/cart"}>
              <Cart />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/card"}>
              <Card />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/tip"}>
              <Tip />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/confirmation"}>
              <Confirmation />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/final"}>
              <Final />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/orders"}>
              <Orders />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/order"}>
              <Order />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/menu"}>
              <Menu />
            </ProtectedRoute>
          </Switch>
        </React.Fragment>
      </Router>
    </OrderContextProvider>
  </AuthProvider>,
  document.getElementById("root")
);
registerServiceWorker();
