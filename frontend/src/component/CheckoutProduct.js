import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="my__product">
      <img src={image} alt="" />

      <div className="my__product__info">
        <p>{title}</p>

        <p className="my__product__price">
          <strong>{price}</strong>
          <small><span> TK</span></small>
          
        </p>
      </div>
      <div className="my__product__btn">
        {!hideButton && <butto onClick={removeFromBasket}>Remove</butto>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
