import React, { useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Register from "./component/Register";
import logo_two from "./component/icon/logo_two.png";
import logo_sm_three from "./component/icon/logo_sm_three.png";
import Login from "./component/Login";
import Checkout from "./component/Checkout";
import Payment from "./component/Payment";
import AdminPanel from "./component/Admin/AdminPanel";
import Dashboard from "./component/Admin/Dashboard";
import ProductUpdate from "./component/Admin/ProductUpdate";
import Details from "./component/Admin/Details";
import Profile from "./component/Admin/Profile";
import EditProfile from "./component/Admin/EditProfile";
import Orders from "./component/Admin/Orders";
import Users from "./component/Admin/Users";
import Customer from "./component/Admin/Customer";
import Feedback from "./component/Admin/Feedback";
import { auth } from "./component/firebase";
import { useStateValue } from "./component/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app commponent loads..
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        //the user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (

    <Router>
      <div className="app">
        <Switch>
          <Route path="/feedback">
            <Dashboard />
            <Feedback />
          </Route>
          <Route path='/customer/:id'>
            <Dashboard />
            <Customer />
          </Route>
          <Route path="/users">
            <Dashboard />
            <Users />
          </Route>
          <Route path="/orders">
            <Dashboard />
            <Orders />
          </Route>
          <Route path="/editProfile">
            <Dashboard />
            <EditProfile />
          </Route>
          <Route path="/profile">
            <Dashboard />
            <Profile />
          </Route>
          <Route path="/details">
            <Dashboard />
            <Details />
          </Route>
          <Route path="/productUpdate">
            <Dashboard />
            <ProductUpdate />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
            <Details />

          </Route>
          <Route path="/admin">
            <AdminPanel />
          </Route>
         
          <Route path="/payment">
            <Header />
            <Payment />
            <Footer />
          </Route>
          <Route path="/register">
            <Register icon={logo_two} />
          </Route>
          <Route path="/cart">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Login icon={logo_sm_three} />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
