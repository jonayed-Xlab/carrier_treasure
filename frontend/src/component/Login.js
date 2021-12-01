import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";


function Login({ icon }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) =>{
      
          if(auth){
            history.push('/');
            
          }
      })
      .catch(error => alert(error.message));
    };
  return (
    <div className="login">
      <form>
      <div className="vh-100 background__style">
        <Link
          to="/"
          className="d-flex justify-content-center align-items-center h-0"
        >
          <img src={icon} />
        </Link>
        <div className="container-fluid h-50 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-6 col-lg-6 col-xl-5 mt-4">
              <div className="card shadow-2-strong border__style">
                <div className="card-body p-5">
                  <h3 className="mb-5">Sign-In</h3>

                  <label className="margin__left">Email address</label>
                  <div className=" mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control form-control-lg"
                      required
                    />
                  </div>

                  <label className="margin__left">Enter Password</label>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      required 

                    />
                  </div>

                  <button
                    className="btn btn-primary btn-md btn-block"
                    type="submit"
                     onClick={signIn}

                  >
                    Login
                  </button>

                  <hr className="my-4" />
                  <h6>
                    Don't have an account?
                    <Link to="/register"> Register here</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
export default Login;
