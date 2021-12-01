import Search from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import PersonSearchIcon from "@material-ui/icons/Group";
import FeedbackIcon from '@material-ui/icons/Feedback';
import Details from './Details';

import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="">
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          {/* offcanvas triger */}
          <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span
              className="navbar-toggler-icon"
              data-bs-target="#offcanvasExample"
            ></span>
          </button>
          <Link to="/" className="navbar-brand fw-bold me-auto" href="#">
            SOBIPABE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto ">
              <div className="input-group my-3 my-md-0 my-lg-0"></div>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <PersonIcon />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item " href="#">
                      <b>Log Out</b>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* offcanvas */}

      <div
        className="offcanvas offcanvas-start bg-dark text-white sidebar__nav"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header"></div>
        <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <div className="text-muted small fw-bold px-3 text-uppercase">
                  CORE
                </div>
              </li>
              <li>
                <Link to="/details" className="nav-link px-3 active">
                  <span className="me-2">
                    <DashboardIcon />
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <div className="text-muted small fw-bold px-3 text-uppercase">
                  SERVICE
                </div>
              </li>
              <li>
                <Link to="/orders" className="nav-link px-3 active">
                  <span className="me-2">
                    <ShoppingCartIcon />
                  </span>
                  <span>Orders</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="nav-link px-3 active">
                  <span className="me-2">
                    <PersonSearchIcon />
                  </span>
                  <span>Registered User</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="text-muted small fw-bold px-3 text-uppercase">
                  PRODUCT
                </div>
              </li>
              <li>
                <Link to="/productUpdate" className="nav-link px-3 active">
                  <span className="me-2">
                    <SystemUpdateAltIcon />
                  </span>
                  <span>Product</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="text-muted small fw-bold px-3 text-uppercase">
                  USER
                </div>
              </li>
              <li>
                <Link to="/profile" className="nav-link px-3 active">
                  <span className="me-2">
                    <AccountCircleIcon />
                  </span>
                  <span>Profile</span>
                </Link>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <div className="text-muted small fw-bold px-3 text-uppercase">
                  FEEDBACK
                </div>
              </li>

              <li>
                <Link to="/feedback" className="nav-link px-3 active">
                  <span className="me-2">
                    <FeedbackIcon />
                  </span>
                  <span>Feedback</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* canvas */}
  
    </div>
  );
}

export default Dashboard;
