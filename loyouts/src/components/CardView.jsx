import React from "react";
import ShopCard from "./ShopCard";


const CardsView = ({ cards }) => (
  <div className="card-veiw" style={{ display: 'flex', flexWrap: 'wrap' }}>
    {cards.map((card, index) => (
      <ShopCard key={index} {...card} />
    ))}
  </div>
);

export default CardsView;
