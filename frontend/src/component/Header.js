import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./icon/logo.png";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState("");

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <header className="section-header">
        <section className="header-main">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-4">
                <a className="brand-wrap">
                  {/*logo*/}
                  <Link to="/">
                    <img className="img" src={logo} alt="" />
                  </Link>
                </a>
              </div>

              <div className="col-lg-3 col-sm-10">
                <div action="#" className="search align-items-center mt-3">
                  <div className="input-group w-100 ">
                    <h5 className="text-light"> Welcome Shopping World !</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-sm-6 col-14">
                <div className=" widgets-wrap float-md-right d-flex flex-row ">
                  <div className="cart p-0 d-flex flex-row ">
                    <p className="p mt-3 align-self-center">Cart</p>
                    <Link
                      to="/cart"
                      className="align-self-center justify-content-start"
                    >
                      <div>
                        <ShoppingCartIcon
                          fontSize="large"
                          style={{ color: "white" }}
                        />
                      </div>
                    </Link>
                    <span className="text-bold mt-4 mb-3 badge bg-info text-white">
                      {cart?.length}
                    </span>
                  </div>

                  {/* <div className="align-self-center px-0">
                    // <p className="retuns ">Returns & Oreders</p>
                  </div>  */}

                  <div className="align-self-center pl-5 mr-2">
                    <AccountCircleIcon
                      fontSize="large"
                      style={{ color: "white" }}
                    />
                  </div>

                  <div className="text align-self-center text-light justify-content-end  ">
                    <div>
                      <div className="txt">
                        <a>{!user ? "Welcome, Guest" : user.email}</a>
                      </div>
                      <Link to={!user && "/login"} className="txt txt__1">
                        <div onClick={handleAuthentication}>
                          <a>
                            {" "}
                            {user ? (
                              <div className="txt txt__2">Sign out</div>
                            ) : (
                              <div className="txt txt__1">Sign In</div>
                            )}
                          </a>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;
