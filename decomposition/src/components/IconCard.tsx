import React from 'react';

interface IconCardProps {
  icon: string;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => {
  return (
    <div className="icon-card">
      <img src={icon} alt={`${title} Icon`} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default IconCard;