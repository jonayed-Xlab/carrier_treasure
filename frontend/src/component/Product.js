import React from "react";
import "./Product.css"
import { useStateValue } from "./StateProvider";

function Product({ id,productId, title,description, image, price}) {
  const [{ cart }, dispatch] = useStateValue();



  const addToCart = (e) => {
    //dispatch the item into data layer
    const priceBd = parseInt(price);
    e.preventDefault();
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        productId:productId,
        title: title,
        description:description,
        image: image,
        price: priceBd,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <p>{description}</p>
        <p className="product__price">
          <strong>{price}</strong>
          <small><span> TK</span></small>
        </p>

      </div>
      <button className="btn-first" onClick={addToCart}>Add to Busket</button>
    </div>
  );
}

export default Product;
