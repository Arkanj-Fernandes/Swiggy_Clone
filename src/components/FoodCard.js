import React from "react";
import "./FoodCard.css";

function FoodCard({ name, description, price, image }) {
  return (
    <div className="food-card">
      <img src={image} alt={name} className="food-image" />
      <div className="food-info">
        <h3 className="food-title">{name}</h3>
        <p className="food-description">{description}</p>
        <p className="food-price">{price}</p>
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
}

export default FoodCard;
