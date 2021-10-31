import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext } from "react/cjs/react.development";
import AddPackages from "./Pages/DashBoard/AddPackages/AddPackages";
import CheckOut from "./Pages/DashBoard/CheckOut/CheckOut";
import Dashboard from "./Pages/DashBoard/Dashboard";
import OrderList from "./Pages/DashBoard/OrderList/OrderList";
import Shipment from "./Pages/DashBoard/Shipment/Shipment";
import Footer from "./Pages/Homepage/Footer/Footer";
import Home from "./Pages/Homepage/Home/Home";
import Navbar from "./Pages/Homepage/Navbar/Navbar";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path="/checkOut/:id">
              <CheckOut></CheckOut> 
          </PrivateRoute>
            <Route path="/addPackage">
              <AddPackages></AddPackages>
            </Route>
            <Route path="/shipment">
              <Shipment></Shipment>
            </Route>
            <PrivateRoute path="/orderList">
              <OrderList></OrderList>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
