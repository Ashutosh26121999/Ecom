import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "../StateManagement/StateProvider";

function CheckoutProduct({id, image, title, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='Product' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating).fill("⭐️")}
        </div>
        <button className='checkoutProduct__button' onClick={removeFromBasket}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
