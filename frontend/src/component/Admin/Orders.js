import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Orders() {
  const[orderList, setOrderList] = useState([])
  useEffect(() => {
    getOrderList();
  });
  
  const getOrderList = () => {
    axios.get("http://localhost:8080/api/order").then((res) => {
      setOrderList(res.data);
    });
     
  };
  return (
    <div>
      <main className="mt-5 pt-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 fw-bold fs-4">Orders list</div>
          </div>
          <div className="row">
            <div className="col col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">PRODUCT_ID</th>
                    <th scope="col">CUSTOMER_ID</th>
                    <th scope="col">PRODUCT NAME</th>
                    <th scope="col">START DATE</th>
                    <th scope="col">AMOUNT</th>
                    <th scope="col">DETAILS</th>
                  </tr>
                </thead>
                <tbody>
                {orderList.map((order, index) => (
                  <tr>
                      <th scope="row">{order.productId}</th>
                      <td>{order.id}</td>
                      <td>{order.productName}</td>
                      <td>{order.startTime}</td>
                      <td>{order.amount}</td>
                      <td>
                      <Link to={`/customer/${order.id}`} className="btn btn-warning px-3">
                            Details
                        </Link>
                    </td>
                  </tr>
                      ))}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Orders;
