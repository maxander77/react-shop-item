import React from 'react';

interface NewsItemProps {
  icon: string;
  text: string;
  link: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ icon, text, link }) => {
  return (
    <div className="news-item">
      <img src={icon} alt="news icon" />
      <p>{text}</p>
      <a href={link}>Read More</a>
    </div>
  );
};

export default NewsItem;