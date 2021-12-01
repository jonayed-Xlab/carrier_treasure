import React, { useState, useEffect } from "react";

import { Bar } from "react-chartjs-2";
import axios from "axios";

function Details() {
  const [totalOrder, setTotalOrder] = useState('');
  const [totalProduct, setTotalProduct] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [totalCustomer, setTotalCustomer] = useState('');

  useEffect(() => {
    getTotalOrder();
    getTotalProduct();
    getTotalAmount();
    getTotalCustomer();

  });

  const getTotalOrder = () => {
    axios.get("http://localhost:8080/api/order/total").then((res) => {
      setTotalOrder(res.data);
      // console.log(res.data)
    });
  };

  const getTotalProduct = () => {
    axios.get("http://localhost:8080/api/product/total").then((res) => {
      setTotalProduct(res.data);
      // console.log(res.data)
    });
  };

  const getTotalAmount = () => {
    axios.get("http://localhost:8080/api/order/amount").then((res) => {
      setTotalAmount(res.data);
    });
  };

  const getTotalCustomer = () => {
    axios.get("http://localhost:8080/api/user/total").then((res) => {
  
      setTotalCustomer(res.data);
    });
  };
  return (
    <div>
       <main className="mt-5 pt-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 fw-bold fs-3">Dashboard</div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card text-white bg-primary h-100">
                <div className="card-header text-dark"><b>Product Sales</b></div>
                <div className="card-body">
                  <p className="mb-2">Total Product</p>
                  <h4 className="mb-5">{totalProduct}</h4>
                  <p className="card-text">
                    Incresed by 25%
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card text-white bg-success h-100">
                <div className="card-header text-dark"><b>Transactions</b></div>
                <div className="card-body">
                <p className="mb-2">Total Transactions</p>
                  <h4 className="mb-5">{totalAmount} TK</h4>
                  <p className="card-text">
                    Incresed by 40%
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card text-white bg-warning h-100">
                <div className="card-header text-dark"><b>Customers</b></div>
                <div className="card-body">
                <p className="mb-2">Total Customer</p>
                  <h4 className="mb-5">{totalCustomer}</h4>
                  <p className="card-text">
                    Incresed by 40%
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card text-white bg-danger h-100">
                <div className="card-header text-dark"><b>Orders</b></div>
                
                <div className="card-body">
                <p className="mb-2">New Orders</p>
                  <h4 className="mb-5">{totalOrder}</h4>
                  <p className="card-text">
                    Incresed by 32%
                  </p>
                </div>
          

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">Charts</div>
                <div className="card-body">
                  <Bar
                    data={{
                      labels: [
                        "Saturday",
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thrusday",
                        "Friday"
                      ],
                      datasets: [
                        {
                          label: "Orders",
                          data: [65, 59, 80, 81, 56, 55, 40],
                          backgroundColor: [
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(255, 205, 86, 0.2)",
                            "rgba(255, 99, 132, 0.2)",
                          ],
                          borderColor: [
                            "rgb(153, 102, 255)",
                            "rgb(54, 162, 235)",
                            "rgb(255, 99, 132)",
                            "rgb(255, 159, 64)",
                            "rgb(75, 192, 192)",
                            "rgb(255, 205, 86)",
                            "rgb(255, 99, 132)",

                          ],
                          borderWidth: 1,
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </main>
        </div>
    
  );
}
export default Details;
