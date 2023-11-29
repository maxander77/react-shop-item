import React from 'react'

interface ListingProps {
  items: {
    listing_id: number;
    url: string;
    MainImage: { url_570xN: string };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
  }[];
}

const Listing: React.FC<ListingProps> = ({ items }: ListingProps) => {
  return (
    <div className="item-list">
      {items?.map((item) => (
        <div className="item" key={item?.listing_id}>
          <div className="item-image">
            <a href={item?.url}>
              <img src={item?.MainImage?.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item?.title?.slice(0, 50)}
              {item?.title?.length > 50 ? "..." : ""}
            </p>
            <p className="item-price">
              {item.currency_code === "USD"
                ? `$${parseFloat(item.price).toFixed(2)}`
                : item.currency_code === "EUR"
                  ? `€${parseFloat(item.price).toFixed(2)}`
                  : `${parseFloat(item.price).toFixed(2)} ${
                      item.currency_code
                    }`}
            </p>
            <p
              className={`item-quantity ${
                item.quantity <= 10
                  ? "level-low"
                  : item.quantity <= 20
                    ? "level-medium"
                    : "level-high"
              }`}
            >
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;