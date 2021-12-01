import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import { auth } from "./firebase";

function Register({ icon }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");


  const sendUserData = (e) => {
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) =>{
        console.log(auth);
        if(auth){
          
          const data = {
            name: name,
            email: email,
            password: password,
          };
      
          axios
            .post("http://localhost:8080/api/user", data)
            .then((res) => {
              setData(res.data);
              setEmail("");
              setName("");
              setPassword("");
              history.push('/');
            })
            .catch((err) => {
              console.log("error...");
            });
        }
    })
    .catch(error => alert(error.message));
   
  };
  return (
    <div className="register">
<form >
      <section className="vh-100 bc">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black cd">
                <div className="card-body p-md-5 ">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Registration form
                      </p>

                      <div className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                            <label className="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              required
                            />
                            <label className="form-label" for="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-left mb-4 ml-3">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="fc3"
                            required
                          />
                          <label className="form-check-label" for="fc3">
                            I agree all statements in{" "}
                            <a href="">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-info btn-md" onClick={sendUserData}>
                            Register
                          </button>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <h6>
                        Already have an account?
                        <Link to="/login"> Login here</Link>
                      </h6>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <Link to="/">
                        <img src={icon} className="img-fluid" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </form>
    </div>
  );
}

export default Register;
