import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  buttonUrl?: string;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, buttonUrl, buttonText }) => {
return (
    <div className="card" style={{ width: '18rem' }}>
      {imageUrl && <img src={imageUrl} className="card-img-top" alt="Card" />}
     <div className="card-body">
       <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
       {buttonUrl && buttonText && (
         <a href={buttonUrl} className="btn btn-primary">
            {buttonText}
         </a>
      )}
    </div>
  </div>
 );
};

export default Card;