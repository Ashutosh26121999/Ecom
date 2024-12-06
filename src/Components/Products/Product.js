import React from "react";
import "./Product.css";
import {useStateValue} from "../StateManagement/StateProvider";

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__title'>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__reating'>{Array(rating).fill("⭐️")}</div>
      </div>
      <img className='product__image' src={image} alt='Product' />
      <button className='product__button' onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
