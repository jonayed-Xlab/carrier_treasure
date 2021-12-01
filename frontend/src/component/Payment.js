import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import "./Payment.css";
import axios from "axios";
import { useForm } from "react-hook-form";

function Payment() {
  const [data, setData] = useState("");
  const { register, handleSubmit, watch, errors } = useForm();
  const [{ cart }, dispatch] = useStateValue();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [delivaryAddress, setDelivaryAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
  const [amount, setAmount] = useState("");
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [startTime, setStartTime] = useState("");
  const sendOrder = (e) => {
    // e.preventDefault();
    let id = "";
    let name = "";
    cart.map(
      (item) => (
        (id += String(item.productId) + " . "), (name += String(item.title) + " , ")
      )
    );
    // console.log(id);
    setProductId(id);
    setProductName(name);

    var today = new Date();

    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var dateTime = date + "  " + time;
    setStartTime(dateTime);
    // var a =  parseInt(amount);
    const data = {
      firstName: firstName,
      lastName: lastName,
      companyName: companyName,
      delivaryAddress: delivaryAddress,
      postalCode: postalCode,
      city: city,
      number: number,
      email: email,
      info: info,
      amount: amount,
      productName: productName,
      productId: productId,
      startTime: startTime,
    };

    axios
      .post("http://localhost:8080/api/order", data)
      .then((res) => {
        setData(res.data);
        setFirstName("");
        setLastName("");
        setCompanyName("");
        setDelivaryAddress("");
        setPostalCode("");
        setCity("");
        setNumber("");
        setEmail("");
        setAmount("");
        alert("success...")
      })
      .catch((err) => {
        console.log("error...");
      });
  };
  return (
    <div>
      <form>
        {/* <!--Section: Block Content--> */}
        <div className="container">
          {/* <!--Grid row--> */}

          <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-lg-8 mb-4 mt-4">
              {/* <!-- Card --> */}
              <div className="card wish-list pb-1">
                <div className="card-body">
                  <h5 className="mb-2">Billing details</h5>
                  {/* <!-- Grid row --> */}
                  <div className="row">
                    {/* <!-- Grid column --> */}
                    <div className="col-lg-6">
                      {/* <!-- First name --> */}
                      <div className="md-form md-outline mb-0 mb-lg-4">
                        <input
                          className="form-control mb-0 mb-lg-2"
                          type="text"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />

                        <label for="firstName">First name</label>
                      </div>
                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div className="col-lg-6">
                      {/* <!-- Last name --> */}
                      <div className="md-form md-outline">
                        <input
                          type="text"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="form-control"
                          required
                        />
                        <label for="lastName">Last name</label>
                      </div>
                    </div>
                    {/* <!-- Grid column --> */}
                  </div>
                  {/* <!-- Grid row --> */}

                  {/* <!-- Company name --> */}
                  <div className="md-form md-outline my-0">
                    <input
                      type="text"
                      id="companyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="form-control mb-0"
                    />
                    <label for="companyName">Company name (optional)</label>
                  </div>

                  {/* <!-- Address Part 1 --> */}
                  <div className="md-form md-outline mt-3">
                    <input
                      type="text"
                      id="form14"
                      value={delivaryAddress}
                      onChange={(e) => setDelivaryAddress(e.target.value)}
                      placeholder="House numbe, Street name, Area"
                      className="form-control"
                      required
                    />
                    <label for="form14">Delivery Address</label>
                  </div>

                  {/* <!-- Postcode / ZIP --> */}
                  <div className="md-form md-outline mt-3">
                    <input
                      type="text"
                      id="form16"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="form-control"
                      required
                    />
                    <label for="form16">Postcode / ZIP</label>
                  </div>

                  {/* <!-- Town / City --> */}
                  <div className="md-form md-outline mt-3">
                    <input
                      type="text"
                      id="form17"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="form-control"
                      required
                    />
                    <label for="form17">Town / City</label>
                  </div>

                  {/* <!-- Phone --> */}
                  <div className="md-form md-outline mt-3">
                    <input
                      type="number"
                      id="form18"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      className="form-control"
                      required
                    />
                    <label for="form18">Phone</label>
                  </div>

                  {/* <!-- Email address --> */}
                  <div className="md-form md-outline mt-3">
                    <input
                      type="email"
                      id="form19"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      required
                    />
                    <label for="form19">Email address</label>
                  </div>

                  {/* <!-- Additional information --> */}
                  <div className="md-form md-outline mt-3">
                    <textarea
                      id="form76"
                      className="md-textarea form-control"
                      value={info}
                      onChange={(e) => setInfo(e.target.value)}
                      rows="4"
                      required
                    ></textarea>
                    <label for="form76">Additional information</label>
                  </div>

                  <div className="form-check pl-0 mb-4 mb-lg-0">
                    <Link to="/register">
                      <a
                        className="mx-1 mt-3 form-check-label small text-uppercase card-link-secondary"
                        for="new3"
                      >
                        Create an account?
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- Card --> */}
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-4">
              {/* <!-- Card --> */}
              <div className="card mb-4 mt-4">
                <div className="card-body">
                  <h5 className="mb-3">The total amount of</h5>

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Temporary amount
                      <span>
                        <CurrencyFormat
                          renderText={(value) => (
                            <>
                              {
                              setAmount(value)
                              }
                              <p>{value}</p>
                            </>
                          )}
                          
                          value={getCartTotal(cart)}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>The total amount of</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <CurrencyFormat
                          renderText={(value) => (
                            <>
                              <p>
                                <strong>{value}</strong>
                              </p>
                            </>
                          )}
                          decimalScale={2}
                          value={getCartTotal(cart)}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={" TK"}
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Card --> */}
              <div className="card mb-4 mt-2">
                <div className="card-body">
                  <h5 className="mb-3">Payment Details</h5>

                  <div className="panel-body">
                    <form role="form">
                      <div className="form-group">
                        <label for="cardNumber">CARD NUMBER</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="cardNumber"
                            placeholder="Valid Card Number"
                            required
                            autofocus
                          />
                          <span className="input-group-addon">
                            <span className="glyphicon glyphicon-lock"></span>
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-7 col-md-7">
                          <div className="form-group">
                            <label for="expityMonth">EXPIRY DATE</label>
                            <div className="col-xs-6 col-lg-6 pl-ziro">
                              <input
                                type="text"
                                className="form-control"
                                id="expityMonth"
                                placeholder="MM"
                                required
                              />
                            </div>
                            <div className="col-xs-6 col-lg-6 pl-ziro mt-2">
                              <input
                                type="text"
                                className="form-control"
                                id="expityYear"
                                placeholder="YY"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-5 col-md-5 pull-right">
                          <div className="form-group">
                            <label for="cvCode">CV CODE</label>
                            <input
                              type="password"
                              className="form-control"
                              id="cvCode"
                              placeholder="CV"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success btn-block waves-effect waves-light"
                    onClick={sendOrder}
                  >
                    Pay Bill
                  </button>
                </div>
              </div>

              {/* <!-- Card --> */}
            </div>
            {/* <!--Grid column--> */}
          </div>

          {/* <!--Grid row--> */}
        </div>
        {/* <!--Section: Block Content--> */}
      </form>
    </div>
  );
}

export default Payment;
