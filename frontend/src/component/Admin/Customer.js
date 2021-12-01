import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function Customer() {
  const {id} = useParams();
  const[customerDetails, setCustomerDetails] = useState({})
  useEffect(() => {
    getCustomerDetails();
  });

  const getCustomerDetails = () => {
    axios.get(`http://localhost:8080/api/order/${id}`).then((res) => {
      setCustomerDetails(res.data);
    });
   
  };
  return (
    <div>
      <main className="mt-5 pt-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 fw-bold fs-4 mt-1">Customer Deatils</div>
            <hr className="mt-3 mb-3" />
          </div>
          <div className="row">
            <div className="col col-md-12">
              <ul className="list-group">
              <li className="list-group-item">
                  <span className="font-weight-bold">Customer Id : </span> <br/>
                   <span className="mt-2">{customerDetails.id}</span>
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">Name : </span> <br/>
                   <span className="mt-2">{customerDetails.firstName} {customerDetails.lastName}</span>
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">Company Name (optional) : </span> <br/>
                  <span className="mt-2">{customerDetails.companyName}</span>
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">Delivery Address : </span> <br/>
                  <span className="mt-2">{customerDetails.delivaryAddress}</span>
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">Postal Code / Zip : </span> <br/>
                <span className="mt-2">{customerDetails.postalCode}</span>
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">Town / City : </span>
                  <br/>
                 <span className="mt-50"> {customerDetails.city}</span>
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">Phone Number : </span> <br/>
                 <span className="mt-2"> {customerDetails.number}</span>
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">Email Address : </span>  <br/>
                 <span className="mt-2"> {customerDetails.email}</span>
                </li>
                <li className="list-group-item">
                  <span className="font-weight-bold">User Information : </span> <br/>
                  <span className="mt-2">{customerDetails.info}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Customer;
