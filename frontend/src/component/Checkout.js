import React from "react";
import "./Checkout.css";

import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-sm-8 col-12">
          <h2 className="">Your Shopping Cart</h2>
          <hr />
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          ))}
         
        
        <div style = {{height:"50vh"}}></div>
         
        </div>

        <div className="col col-sm-4 col-12 ">
          <div className="card card-body mt-3 px-5 mb-3">
            <Subtotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
