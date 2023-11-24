import React from 'react';

const ShopItem = ({ name, price, color, img }) => (
  <div className="shop-item">
    <img src={img} alt={name} />
    <div className="item-details">
      <h2>{name}</h2>
      <p>{`Color: ${color}`}</p>
      <p>{`Price: $${price}`}</p>
    </div>
  </div>
);

export default ShopItem;