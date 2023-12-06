import React from 'react';
import NewsItem from './NewsItem';

interface NewsListProps {
  newsData: NewsItemProps[];
}

const NewsList: React.FC<NewsListProps> = ({ newsData }) => {
  return (
    <div className="news-list">
      {newsData.map((news, index) => (
        <NewsItem key={index} {...news} />
      ))}
    </div>
  );
};

export default NewsList;
