import React from 'react';

const ShopCard = ({ name, price, color, img }) => (
  <div className="shop-card">
    <img src={img} alt={name} />
    <h2>{name}</h2>
    <p>{`Color: ${color}`}</p>
    <p>{`Price: $${price}`}</p>
  </div>
);

export default ShopCard;