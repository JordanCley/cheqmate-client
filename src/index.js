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

import registerServiceWorker from "./registerServiceWorker";

//Pages
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import TableNumber from "./pages/TableNumber";
import Menu from "./pages/Menu";
import AppetizerPreview from "./pages/AppetizerPreview";
import ViewCart from "./pages/ViewCart";
import Checkout from "./pages/Checkout";
import CardInput from "./pages/CardInput";
import AddTip from "./pages/AddTip";
import ConfirmPay from "./pages/ConfirmPay";
import OrderContextProvider from "./utils/context/OrderContext";
import ThankYou from "./pages/ThankYou";
import PastOrders from "./pages/PastOrders";
import PastOrder from "./pages/PastOrder";

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
            <ProtectedRoute exact={true} path={"/table-input"}>
              <TableNumber />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/checkout"}>
              <Checkout />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/app-preview"}>
              <AppetizerPreview />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/view-cart"}>
              <ViewCart />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/card-input"}>
              <CardInput />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/add-tip"}>
              <AddTip />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/confirm-pay"}>
              <ConfirmPay />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/thank-you"}>
              <ThankYou />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/past-orders"}>
              <PastOrders />
            </ProtectedRoute>
            <ProtectedRoute exact={true} path={"/past-order"}>
              <PastOrder />
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
